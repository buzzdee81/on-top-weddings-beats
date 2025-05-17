
import React from "react";
import { Music } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-gradient">Über Uns</h2>
            <p className="mb-4">
              <strong>Test On Top</strong> ist eine erfahrene 6-köpfige Hochzeits- und Eventband aus dem Landkreis Pfaffenhofen/Ilm, die seit 1998 Stimmung auf jede Feier bringt. 
            </p>
            <p className="mb-4">
              Wir spielen die besten Songs aus den 70ern, 80ern, 90ern und aktuelle Hits – passend für jedes Alter und jeden Musikgeschmack. Ob romantische Balladen für den Hochzeitstanz oder Partymusik für die Brautentführung – wir machen Ihre Hochzeit musikalisch einzigartig.
            </p>
            <p className="mb-6">
              Unsere langjährige Erfahrung sorgt für einen reibungslosen Ablauf und pure Emotionen auf Ihrem besonderen Tag in Pfaffenhofen und Umgebung!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex bg-white p-4 rounded-lg shadow-sm">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center">
                    <Music size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">25+ Jahre Erfahrung</h4>
                  <p className="text-gray-600 text-sm">Seit 1998 auf Bühnen aktiv</p>
                </div>
              </div>

              <div className="flex bg-white p-4 rounded-lg shadow-sm">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center">
                    <Music size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">100+ Hochzeiten</h4>
                  <p className="text-gray-600 text-sm">Unvergessliche Feiern gestaltet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative">
              <img
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070"
                alt="On Top Band bei einem Auftritt"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-md">
                <p className="text-2xl font-bold font-serif text-brand-purple-dark">Seit 1998</p>
                <p className="text-gray-600 text-sm">Ihre Hochzeitsband</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
