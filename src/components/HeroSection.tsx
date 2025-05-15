
import React from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/logos/ontop-logo.png" 
              alt="On Top Band Logo" 
              className="h-32 sm:h-40 md:h-48 animate-fade-in" 
            />
          </div>

          <h1 className="text-white mb-6 animate-fade-in">
            Ihre perfekte{" "}
            <span className="text-brand-pink">Hochzeitsband</span> für
            <br className="hidden sm:block" /> unvergessliche Momente
          </h1>

          <p className="text-white text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Seit 1998 bringen wir als erfahrene 6-köpfige Band Stimmung auf jede Feier
            im Landkreis Pfaffenhofen/Ilm und Umgebung
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
