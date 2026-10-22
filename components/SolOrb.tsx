"use client";

import { useEffect, useRef } from "react";

// A live, WebGL version of the Sol orb that sits behind the hero title.
// - a matte squircle with a drifting mesh gradient, like the Sol logo
// - bulges toward the cursor, swirls faster when the cursor moves quickly
// - clicking it sends a ripple through it
// - on scroll it shrinks and flies into the header logo, which pops in when it lands
// Falls back to the CSS gradient glows if WebGL is unavailable or reduced motion is on.

const VERT = `attribute vec2 a; void main() { gl_Position = vec4(a, 0.0, 1.0); }`;

const FRAG = `
precision highp float;
uniform float uTime;
uniform vec2 uCenter;
uniform float uRadius;
uniform vec2 uMouse;
uniform float uHover;
uniform vec3 uRipple;
uniform float uEnergy;
uniform float uFlow; // swirl phase, integrated in JS so speed changes never jump
uniform float uFade;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 3; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

// One colour point of the mesh gradient: soft gaussian weight around a drifting centre
void blob(inout vec3 acc, inout float wsum, vec2 uv, vec2 c, vec3 col, float k) {
  float w = exp(-dot(uv - c, uv - c) * k);
  acc += col * w;
  wsum += w;
}

void main() {
  float r = max(uRadius, 1.0);
  vec2 q = (gl_FragCoord.xy - uCenter) / r;
  if (length(q) > 1.9) { gl_FragColor = vec4(0.0); return; }
  float t = uFlow;

  // Slightly tilted, slowly rocking frame
  float rot = -0.18 + 0.12 * sin(uTime * 0.35);
  float ca = cos(rot); float sa = sin(rot);
  vec2 qr = vec2(ca * q.x - sa * q.y, sa * q.x + ca * q.y);

  // Squircle (superellipse) body with a soft organic wobble
  float ang = atan(qr.y, qr.x);
  float n = 3.0 + 0.4 * sin(uTime * 0.5);
  float se = pow(pow(abs(qr.x), n) + pow(abs(qr.y), n), 1.0 / n);
  float edgeN = fbm(vec2(cos(ang), sin(ang)) * 1.1 + vec2(uTime * 0.15, -uTime * 0.1));
  float rad = 1.0 + (edgeN - 0.5) * (0.09 + uEnergy * 0.05);

  // Bulge toward the pointer
  vec2 m = (uMouse - uCenter) / r;
  float facing = max(0.0, dot(normalize(q + 1e-4), normalize(m + 1e-4)));
  rad += uHover * pow(facing, 5.0) * 0.12;

  // Click ripple
  vec2 rp = (uRipple.xy - uCenter) / r;
  float rt = uRipple.z;
  float rd = length(q - rp);
  float ripple = sin(rd * 16.0 - rt * 12.0) * exp(-rt * 1.8) * exp(-abs(rd - rt * 1.8) * 3.0);
  rad += ripple * 0.04;

  float dist = se - rad;

  // Mesh gradient: magenta left, pink top, warm orange/yellow top-right,
  // lime right, green bottom-right, deep magenta bottom-left
  vec2 uv = qr + 0.22 * (vec2(fbm(qr * 1.4 + t * 0.25), fbm(qr * 1.4 - t * 0.25 + 5.0)) - 0.5) + ripple * 0.12;
  vec3 acc = vec3(0.0); float wsum = 0.0;
  blob(acc, wsum, uv, vec2(-0.70, 0.10) + 0.12 * vec2(sin(t * 0.7), cos(t * 0.6)), vec3(0.82, 0.07, 0.55), 2.2);
  blob(acc, wsum, uv, vec2(-0.10, 0.65) + 0.12 * vec2(cos(t * 0.5), sin(t * 0.8)), vec3(0.93, 0.13, 0.47), 2.6);
  blob(acc, wsum, uv, vec2(0.55, 0.60) + 0.10 * vec2(sin(t * 0.9 + 1.0), cos(t * 0.5)), vec3(0.97, 0.62, 0.22), 4.0);
  blob(acc, wsum, uv, vec2(0.75, 0.05) + 0.12 * vec2(cos(t * 0.6 + 2.0), sin(t * 0.7)), vec3(0.72, 0.84, 0.23), 2.8);
  blob(acc, wsum, uv, vec2(0.35, -0.70) + 0.12 * vec2(sin(t * 0.8 + 3.0), cos(t * 0.6 + 1.0)), vec3(0.20, 0.72, 0.45), 2.6);
  blob(acc, wsum, uv, vec2(-0.45, -0.65) + 0.10 * vec2(cos(t * 0.7 + 4.0), sin(t * 0.5)), vec3(0.62, 0.11, 0.55), 2.6);
  vec3 col = acc / max(wsum, 1e-4);

  // Matte shading: gently lighter toward the top-right, darker rim bottom-left
  float lightDir = dot(normalize(qr + 1e-4), normalize(vec2(0.6, 0.8)));
  col *= 0.94 + 0.08 * lightDir * smoothstep(0.2, 1.0, se);
  col *= 1.0 - 0.14 * smoothstep(0.65, 1.0, se / rad) * (0.5 - 0.5 * lightDir);

  // Fine film grain, like the logo
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.06;

  float aa = 1.5 / r;
  float a = (1.0 - smoothstep(-aa, aa, dist)) * uFade;
  gl_FragColor = vec4(col * a, a);
}
`;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const easeOutBack = (p: number) => 1 + 2.4 * Math.pow(p - 1, 3) + 1.4 * Math.pow(p - 1, 2);
const smoothstep = (a: number, b: number, v: number) => { const x = clamp((v - a) / (b - a)); return x * x * (3 - 2 * x); };

// Top of an element in document coordinates, ignoring CSS transforms (parallax)
function docTop(el: HTMLElement) {
  let y = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
  return y;
}

export default function SolOrb() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    // One oversized triangle covers the screen
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aLoc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);
    const U = Object.fromEntries(
      ["uTime", "uFlow", "uCenter", "uRadius", "uMouse", "uHover", "uRipple", "uEnergy", "uFade"].map((n) => [n, gl.getUniformLocation(prog, n)])
    );
    gl.clearColor(0, 0, 0, 0);

    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero");
    const title = hero?.querySelector<HTMLElement>("h1") ?? null;
    const logo = document.querySelector<HTMLElement>("header.top .brand .orb");
    root.classList.add("has-orb");

    let W = 0, H = 0, dpr = 1, startY = 0, R = 0;
    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, W < 700 ? 1.25 : 1.6);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      R = Math.min(W * 0.27, H * 0.28, 235);
      // Rest a bit below the title's centre, and always far enough down that the
      // orb's top (squircle corners reach ~1.15R) clears the sticky header.
      const headerH = document.querySelector<HTMLElement>("header.top")?.offsetHeight ?? 64;
      const titleMid = title ? docTop(title) + title.offsetHeight / 2 : H * 0.4;
      startY = Math.max(titleMid + R * 0.35, headerH + R * 1.15 + 28);
    };
    resize();
    window.addEventListener("resize", resize);

    // Live state shared between the frame loop and the pointer handlers
    let cx = W / 2, cy = startY, rad = 0, t = 0;
    let mx = -9999, my = -9999, hasMouse = false, hover = 0, energy = 0, flow = 0;
    let rx = 0, ry = 0, rStart = -100;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hasMouse = true;
      const nearOrb = Math.hypot(e.clientX - cx, e.clientY - cy) < rad * 2.6;
      if (mx > -9999 && nearOrb) energy = Math.min(1, energy + Math.min(Math.hypot(e.clientX - mx, e.clientY - my), 60) * 0.003);
      mx = e.clientX;
      my = e.clientY;
    };
    const onDown = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - cx, e.clientY - cy) > rad * 1.5) return;
      rx = e.clientX;
      ry = e.clientY;
      rStart = t;
      energy = Math.min(1, energy + 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    const t0 = performance.now();
    let raf = 0, cleared = false;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (document.hidden) return;
      const prevT = t;
      t = (now - t0) / 1000;
      const dt = Math.min(0.05, Math.max(0, t - prevT));

      // Scroll progress through the hero: 0 = resting behind title, 1 = landed in the header logo
      const heroH = hero?.offsetHeight ?? H;
      const p = clamp(window.scrollY / (heroH * 0.8));
      const e = easeInOut(p);
      const lr = logo?.getBoundingClientRect();
      const lx = lr ? lr.left + lr.width / 2 : 38;
      const ly = lr ? lr.top + lr.height / 2 : 32;
      const intro = easeOutBack(clamp(t / 1.3));

      cx = lerp(W / 2, lx, e);
      cy = lerp(startY - window.scrollY * 0.6, ly, e);
      rad = Math.max(0, lerp(R, 14, e) * intro);
      const fade = 1 - smoothstep(0.88, 1, p);
      logo?.classList.toggle("waiting", p < 0.95);

      if (fade <= 0) {
        if (!cleared) { gl.disable(gl.SCISSOR_TEST); gl.clear(gl.COLOR_BUFFER_BIT); cleared = true; }
        return;
      }
      cleared = false;

      const near = hasMouse && Math.hypot(mx - cx, my - cy) < rad * 2.6 ? 1 : 0;
      hover += (near * (1 - e) - hover) * 0.06;
      energy *= Math.pow(0.94, dt * 60);
      flow += dt * (0.35 + energy * 0.6);

      gl.uniform1f(U.uTime, t);
      gl.uniform1f(U.uFlow, flow);
      gl.uniform2f(U.uCenter, cx * dpr, (H - cy) * dpr);
      gl.uniform1f(U.uRadius, rad * dpr);
      gl.uniform2f(U.uMouse, mx * dpr, (H - my) * dpr);
      gl.uniform1f(U.uHover, hover);
      gl.uniform3f(U.uRipple, rx * dpr, (H - ry) * dpr, t - rStart);
      gl.uniform1f(U.uEnergy, energy);
      gl.uniform1f(U.uFade, fade);

      // Only shade the box around the orb
      gl.disable(gl.SCISSOR_TEST);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.SCISSOR_TEST);
      const pad = rad * 1.8 * dpr;
      const x0 = Math.max(0, cx * dpr - pad), y0 = Math.max(0, (H - cy) * dpr - pad);
      gl.scissor(x0, y0, Math.max(0, Math.min(canvas.width, cx * dpr + pad) - x0), Math.max(0, Math.min(canvas.height, (H - cy) * dpr + pad) - y0));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      root.classList.remove("has-orb");
      logo?.classList.remove("waiting");
    };
  }, []);

  return <canvas ref={ref} className="sol-orb" aria-hidden="true" />;
}
