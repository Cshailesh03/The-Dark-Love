import React from "react";
import HeroSection from "../components/HeroSection";
import Container from "../components/Container";
import HowItWorks from "../components/HowItWorks";
import Explore from "../components/Explore";
import PersonalityTest from "../components/PersonalityTest";
import ContactSection from "../components/ContactSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection/>
      <Explore/>
      <HowItWorks/>
      <PersonalityTest/>
      <ContactSection/>
    </>
  );
}
