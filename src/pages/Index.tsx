
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BandMembersSection from "@/components/BandMembersSection";
import RepertoireSection from "@/components/RepertoireSection";
import MediaSection from "@/components/MediaSection";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Update page title
    document.title = "On Top - Hochzeitsband & Eventband aus Pfaffenhofen/Ilm";
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <HeroSection />
      <AboutSection />
      <BandMembersSection />
      <RepertoireSection />
      <MediaSection />
      <InstagramFeed />
      <ContactSection />
      
      <Footer />
    </main>
  );
};

export default Index;
