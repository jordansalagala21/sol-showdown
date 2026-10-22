import Image from "next/image";
import brodsky from "@/public/logos/brodsky.png";
import dais from "@/public/logos/dais.png";

export default function Logos() {
  return (
    <div className="logo-row">
      <span className="logo-tile">
        <Image src={brodsky} alt="The Brodsky Institute for Economic & Community Impact" />
      </span>
      <span className="logo-tile">
        <Image src={dais} alt="D.A.IS" />
      </span>    </div>
  );
}
