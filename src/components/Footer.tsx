
import React from "react";
import { Instagram, Phone, Mail, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-purple-darker text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4 flex flex-col items-start">
              <img 
                src="https://ontop-band.de/images/logo.png" 
                alt="On Top Band Logo" 
                className="h-16 mb-2" 
              />
              <p className="text-gray-300 mt-1">Hochzeits- & Eventband</p>
            </div>
            <p className="text-gray-300 mb-4">
              Seit 1998 bringen wir Stimmung auf jede Feier mit den besten Songs für Hochzeiten und Events.
            </p>
            <div className="flex space-x-3 mt-6">
              <a
                href="https://instagram.com/ontopband"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <div className="flex flex-col space-y-4">
              <a href="tel:+491234567890" className="flex items-center hover:text-brand-pink transition-colors">
                <Phone size={18} className="mr-2" />
                <span>+49 123 4567890</span>
              </a>
              <a href="mailto:info@ontop-band.de" className="flex items-center hover:text-brand-pink transition-colors">
                <Mail size={18} className="mr-2" />
                <span>info@ontop-band.de</span>
              </a>
              <p className="flex items-start">
                <Music size={18} className="mr-2 mt-1 shrink-0" />
                <span>Landkreis Pfaffenhofen/Ilm und Umgebung</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Schnellzugriff</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="#home" className="hover:text-brand-pink transition-colors">Start</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-pink transition-colors">Über Uns</a>
              </li>
              <li>
                <a href="#band-members" className="hover:text-brand-pink transition-colors">Bandmitglieder</a>
              </li>
              <li>
                <a href="#repertoire" className="hover:text-brand-pink transition-colors">Repertoire</a>
              </li>
              <li>
                <a href="#media" className="hover:text-brand-pink transition-colors">Media</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-pink transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 text-center text-sm text-gray-400">
          <div className="flex justify-center mb-4">
            <img 
              src="https://ontop-band.de/images/logo_ontop_neu_2017-01.png" 
              alt="On Top Ambience Logo" 
              className="h-16" 
            />
          </div>
          <p>© {currentYear} On Top Band. Alle Rechte vorbehalten.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-brand-pink transition-colors">Impressum</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
