
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
import { Helmet } from "react-helmet";

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
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Helmet>
        <title>On Top - Hochzeitsband & Eventband aus Bayern | München | Pfaffenhofen</title>
        <meta name="description" content="On Top - Die professionelle 6-köpfige Hochzeitsband aus Bayern. Seit 1998 bringen wir als erfahrene Partyband Stimmung auf Hochzeiten und Events im Raum München, Pfaffenhofen/Ilm, Augsburg, Freising und ganz Bayern." />
        <meta name="keywords" content="hochzeitsband bayern, partyband bayern, hochzeit band, band für hochzeit, bands für hochzeiten bayern, hochzeitsband pfaffenhofen, hochzeitsband münchen, hochzeitsband augsburg, hochzeitsband erding, hochzeitsband freising, live musik hochzeit, tanzmusik band, on top band, hochzeitsmusik bayern" />
        <link rel="canonical" href="https://ontop-band.de/" />
      </Helmet>
      
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
