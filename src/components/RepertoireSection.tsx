
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Song {
  title: string;
  artist: string;
}

interface RepertoireCategory {
  id: string;
  name: string;
  description: string;
  songs: Song[];
}

const repertoireData: RepertoireCategory[] = [
  {
    id: "hochzeitstanz",
    name: "Hochzeitstanz",
    description: "Romantische Balladen und Klassiker für den ersten Tanz als Ehepaar",
    songs: [
      { title: "Perfect", artist: "Ed Sheeran" },
      { title: "Weilst a Herz host wia a Bergwerk", artist: "Reinhard Fendrich" },
      { title: "Wonderful Tonight", artist: "Eric Clapton" },
      { title: "Angels", artist: "Robbie Williams" },
      { title: "Zam Oid Wern", artist: "Edmund" },
      { title: "So liab hab i di", artist: "Andreas Gabalier" },
      { title: "Seite an Seite", artist: "Christina Stürmer" },
      { title: "Du Entschuldige I Kenn Di", artist: "Peter Cornelius" }
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    description: "Dezente Hintergrundmusik während des Essens",
    songs: [
      { title: "Europa", artist: "Santana" },
      { title: "Samba pa ti", artist: "Santana" },
      { title: "Fly me to the Moon", artist: "Frank Sinatra" },
      { title: "Dream a little Dream", artist: "Mamas And Papas" },
      { title: "Stand by me", artist: "Ben E. King" },
      { title: "Wonderful Tonight", artist: "Eric Clapton" },
      { title: "A Thousand Years", artist: "Christina Perri" },
      { title: "Time is Tight", artist: "Booker T. & The MG's" }
    ],
  },
  {
    id: "party",
    name: "Party",
    description: "Energiegeladene Hits für eine unvergessliche Feier",
    songs: [
      { title: "Celebration", artist: "Kool & the Gang" },
      { title: "Don't Stop Believin'", artist: "Journey" },
      { title: "I'm so excited", artist: "Pointer Sisters" },
      { title: "Summer of 69", artist: "Bryan Adams" },
      { title: "Atemlos", artist: "Helene Fischer" },
      { title: "Sweet Caroline", artist: "DJ Ötzi" },
      { title: "Shut up and dance", artist: "Walk the Moon" },
      { title: "You shook me all night long", artist: "AC/DC" }
    ],
  },
  {
    id: "klassiker",
    name: "Klassiker",
    description: "Zeitlose Hits, die jeder kennt und liebt",
    songs: [
      { title: "Pretty Woman", artist: "Roy Orbison" },
      { title: "Sweet Child O Mine", artist: "Guns N' Roses" },
      { title: "I am from Austria", artist: "Reinhard Fendrich" },
      { title: "Marmor Stein und Eisen bricht", artist: "Drafi Deutscher" },
      { title: "Rockin All Over The World", artist: "Status Quo" },
      { title: "99 Luftballons", artist: "Nena" },
      { title: "I've Had The Time Of My Life", artist: "Bill Medley and Jennifer Warnes" },
      { title: "Highway to Hell", artist: "AC/DC" }
    ],
  },
];

const RepertoireSection = () => {
  const [activeTab, setActiveTab] = useState("hochzeitstanz");

  return (
    <section id="repertoire" className="section-padding bg-gradient">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-gradient">Unser Repertoire</h2>
          <p className="text-lg">
            Wir bieten ein vielseitiges Repertoire mit den besten Songs aus verschiedenen Jahrzehnten und Genres. 
            Von romantischen Balladen bis zu energiegeladenen Partyhits – wir haben die passende Musik für jeden Anlass.
          </p>
          <p className="mt-3 text-brand-purple-dark">
            <strong>Dies ist nur ein kleiner Auszug aus unserem umfangreichen Repertoire.</strong>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Tabs defaultValue="hochzeitstanz" value={activeTab} onValueChange={setActiveTab}>
            <div className="px-4 sm:px-6 md:px-8 pt-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {repertoireData.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="border border-gray-200"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="p-4 sm:p-6 md:p-8 pt-6">
              {repertoireData.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-purple-dark">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.songs.map((song, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-3 rounded-md border border-gray-100"
                        >
                          <p className="font-medium">{song.title}</p>
                          <p className="text-sm text-gray-500">{song.artist}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Dies ist nur eine kleine Auswahl unserer Songs. Gerne gehen wir auf Ihre individuellen Musikwünsche ein!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-brand-purple hover:text-brand-purple-dark font-medium"
                >
                  Fragen Sie nach unserem kompletten Repertoire
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;
