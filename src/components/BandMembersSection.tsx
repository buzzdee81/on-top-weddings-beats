
import React from "react";

interface BandMember {
  name: string;
  instrument: string;
  image: string;
  funFact: string;
}

const bandMembers: BandMember[] = [
  {
    name: "Nadine",
    instrument: "Gesang",
    image: "/public/images/members/nadine3.png?q=80&w=987&auto=format&fit=crop",
    funFact: "Ob rockig oder emotional, sie erreicht mit Ihrer  Wahnsinns-Stimme jedes Ohr",
  },
  {
    name: "Bene",
    instrument: "Keyboard",
    image: "/public/images/members/bene3.png?q=80&w=988&auto=format&fit=crop",
    funFact: "Der Mann für jeden Sound – und jeden Spaß",
  },
  {
    name: "Chris",
    instrument: "Bass",
    image: "/public/images/members/chris4.png?q=80&w=987&auto=format&fit=crop",
    funFact: "Bringt die Bässe zum Wackeln und die Gäste zum Tanzen",
  },
  {
    name: "Wast",
    instrument: "Gitarre",
    image: "/public/images/members/wast4.png?q=80&w=987&auto=format&fit=crop",
    funFact: "Jede Feier macht er zum unvergesslichen Rock-Spektakel",
  },
  {
    name: "Alex",
    instrument: "Gesang & Schlagzeug",
    image: "/public/images/members/alex1.png?q=80&w=987&auto=format&fit=crop",
    funFact: "Kalibriert in seiner Freizeit Metronome",
  },
  {
    name: "Leny",
    instrument: "Gitarre",
    image: "/public/images/members/leny1.png?q=80&w=987&auto=format&fit=crop",
    funFact: "Singt unter der Dusche nur 80er Hits",
  },
];

const BandMembersSection = () => {
  return (
    <section id="band-members" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-gradient">Die Band</h2>
          <p className="text-lg">
            Unsere 6-köpfige Band vereint jahrelange Erfahrung und Leidenschaft für Musik. 
            Lernen Sie die Gesichter hinter den Klängen kennen, die Ihren besonderen Tag unvergesslich machen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md group animate-hover"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.instrument}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-brand-purple mb-2">{member.instrument}</p>
                <p className="text-gray-600 text-sm italic">
                  "{member.funFact}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandMembersSection;
