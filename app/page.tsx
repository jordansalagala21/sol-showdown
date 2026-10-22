import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsSol from "@/components/WhatIsSol";
import Timeline from "@/components/Timeline";
import Submit from "@/components/Submit";
import Rules from "@/components/Rules";
import Examples from "@/components/Examples";
import Judging from "@/components/Judging";
import Pitch from "@/components/Pitch";
import EventNight from "@/components/EventNight";
import Prizes from "@/components/Prizes";
import Raffle from "@/components/Raffle";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WhatIsSol />
        <Timeline />
        <Submit />
        <Rules />
        <Examples />
        <Judging />
        <Pitch />
        <EventNight />
        <Prizes />
        <Raffle />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
