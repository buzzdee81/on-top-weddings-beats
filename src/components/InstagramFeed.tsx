
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Mock Instagram Daten - in einer realen Anwendung würden diese durch eine API-Abfrage ersetzt
const instagramPosts = [
  {
    id: "post1",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070",
    caption: "Großartiger Auftritt bei der Hochzeit von Sarah und Michael! #livemusic #hochzeit",
    likes: 124,
    date: "2023-07-15"
  },
  {
    id: "post2",
    imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070",
    caption: "Backstage-Momente vor unserem Auftritt beim Stadtfest #ontop #band",
    likes: 98,
    date: "2023-06-28"
  },
  {
    id: "post3",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    caption: "Die Stimmung kocht! Danke für diesen unvergesslichen Abend #liveperformance",
    likes: 156,
    date: "2023-06-10"
  },
  {
    id: "post4",
    imageUrl: "https://images.unsplash.com/photo-1574226516831-e1dff420e562?q=80&w=1937",
    caption: "Neue Songs im Repertoire! Freut euch auf unsere nächsten Auftritte #newmusic",
    likes: 87,
    date: "2023-05-22"
  },
  {
    id: "post5",
    imageUrl: "https://images.unsplash.com/photo-1528489290689-8402e4a4cc15?q=80&w=2070",
    caption: "Probe für das kommende Wochenende! #ontopband #proberaum",
    likes: 65,
    date: "2023-05-15"
  }
];

const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="section-padding bg-neutral-warm">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-3A506B">On Top auf Instagram</h2>
          <p className="text-lg">
            Folgen Sie uns auf Instagram und bleiben Sie auf dem Laufenden über unsere neuesten Auftritte, Backstage-Momente und mehr!
          </p>
        </div>

        <Card className="border-0 shadow-lg bg-white p-4 mb-8">
          <CardContent className="p-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {instagramPosts.map((post) => (
                  <CarouselItem key={post.id} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden border-0">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src={post.imageUrl}
                            alt={post.caption}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                          />
                        </AspectRatio>
                        <div className="p-4">
                          <p className="text-sm text-gray-500 mb-1">
                            {new Date(post.date).toLocaleDateString('de-DE')}
                          </p>
                          <p className="text-sm line-clamp-2">{post.caption}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-end mt-4 space-x-2">
                <CarouselPrevious className="static transform-none" />
                <CarouselNext className="static transform-none" />
              </div>
            </Carousel>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button className="bg-C8102E hover:bg-C8102E/90 text-white">
            <Instagram className="mr-2 h-4 w-4" />
            <a 
              href="https://www.instagram.com/ontopband/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white no-underline"
            >
              Folgen Sie uns auf Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
