
import React from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/header1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo/logo.png" 
              alt="On Top Band Logo - Hochzeitsband Bayern" 
              className="h-32 sm:h-40 md:h-48 animate-fade-in" 
            />
          </div>

          <h1 className="text-white mb-6 animate-fade-in">
            Ihre perfekte{" "}
            <span className="text-brand-pink">Hochzeitsband in Bayern</span> für
            <br className="hidden sm:block" /> unvergessliche Momente
          </h1>

          <p className="text-white text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <strong>Seit 1998</strong> bringen wir als erfahrene 6-köpfige Band Stimmung auf jede Hochzeit und Event 
            im Landkreis Pfaffenhofen/Ilm, München, Augsburg, Freising und ganz Bayern
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-3 rounded-md font-medium transition-colors w-full sm:w-auto"
            >
              Jetzt unverbindlich anfragen!
            </a>
            <a
              href="#about"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-brand-purple-dark transition-colors w-full sm:w-auto"
            >
              Mehr über uns
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
