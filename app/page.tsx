import Effects from "@/components/Effects";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsSol from "@/components/WhatIsSol";
import Timeline from "@/components/Timeline";
import Challenge from "@/components/Challenge";
import Judging from "@/components/Judging";
import EventNight from "@/components/EventNight";
import Prizes from "@/components/Prizes";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Effects />
      <Header />
      <main id="top">
        <Hero />
        <WhatIsSol />
        <Challenge />
        <Timeline />
        <Judging />
        <EventNight />
        <Prizes />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
