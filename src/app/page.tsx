"use client";

import { useState } from "react";
import DumbbellLoader from "@/components/DumbbellLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationsSection from "@/components/TransformationsSection";
import ProgramsSection from "@/components/ProgramsSection";
import InstagramSection from "@/components/InstagramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <DumbbellLoader onComplete={() => setLoading(false)} />}
      <div className={`grain-overlay ${loading ? "hidden" : ""}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TransformationsSection />
          <ProgramsSection />
          <InstagramSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
