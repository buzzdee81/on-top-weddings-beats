
import React from "react";

interface BandMember {
  name: string;
  instrument: string;
  image: string;
  funFact: string;
}

const bandMembers: BandMember[] = [
  {
    name: "Thomas",
    instrument: "Gesang & Gitarre",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    funFact: "Singt unter der Dusche nur 80er Hits",
  },
  {
    name: "Julia",
    instrument: "Gesang",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop",
    funFact: "Kennt jeden Disney-Film auswendig",
  },
  {
    name: "Michael",
    instrument: "Bass",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
    funFact: "Sammelt seltene Vinylplatten",
  },
  {
    name: "Andreas",
    instrument: "Schlagzeug",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    funFact: "War früher Straßenmusiker in Berlin",
  },
  {
    name: "Sarah",
    instrument: "Keyboard",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    funFact: "Spielt 5 Instrumente fließend",
  },
  {
    name: "Markus",
    instrument: "Gitarre",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=987&auto=format&fit=crop",
    funFact: "Hat eine Gitarre aus dem Jahr 1962",
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
