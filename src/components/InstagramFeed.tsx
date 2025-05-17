
import React, { useState, useEffect } from "react";
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

// Instagram handle
const INSTAGRAM_USERNAME = "ontop_hochzeitsband";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

// This would normally be fetched from Instagram's API
// For now, we'll use representative images with the correct Instagram URL
const instagramPosts = [
  {
    id: "post1",
    imageUrl: "/posts/475156123_1978654539282685_2977966864755881624_n.jpg?q=80&w=2070",
    caption: "Großartiger Auftritt bei der Hochzeit! #livemusic #hochzeit",
    likes: 124,
    date: "2023-07-15",
    postUrl: `${INSTAGRAM_URL}p/CuWX2X3Ig9B/`
  },
  {
    id: "post2",
    imageUrl: "/posts/475179091_1331544347987987_1883371011612756287_n.jpg?q=80&w=2070",
    caption: "Backstage-Momente vor unserem Auftritt #ontop #band",
    likes: 98,
    date: "2023-06-28",
    postUrl: `${INSTAGRAM_URL}p/CuKLm8XIv2S/`
  },
  {
    id: "post3",
    imageUrl: "/posts/481805763_1836546520450636_5559497184676111584_n.jpg?q=80&w=2070",
    caption: "Die Stimmung kocht! Danke für diesen unvergesslichen Abend #liveperformance",
    likes: 156,
    date: "2023-06-10",
    postUrl: `${INSTAGRAM_URL}p/Ct9BAJBI31Z/`
  },
  {
    id: "post4",
    imageUrl: "/posts/475200049_540579132368569_3245614905553706556_n.jpg?q=80&w=1937",
    caption: "Neue Songs im Repertoire! Freut euch auf unsere nächsten Auftritte #newmusic",
    likes: 87,
    date: "2023-05-22",
    postUrl: `${INSTAGRAM_URL}p/Cti4hZnIuMb/`
  }
];

const InstagramFeed: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Note: A full implementation would fetch real Instagram posts here
  // This would require Instagram API credentials and user authentication
  // For now, we'll use the representative data above

  useEffect(() => {
    // This is where you would make the API call to fetch Instagram posts
    // For demonstration, we're just simulating a loading state
    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="instagram" className="section-padding bg-neutral-warm">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-3A506B">On Top auf Instagram</h2>
          <p className="text-lg">
            Folgen Sie uns auf Instagram und bleiben Sie auf dem Laufenden über unsere neuesten Auftritte, Backstage-Momente und mehr!
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-C8102E"></div>
          </div>
        ) : error ? (
          <div className="text-center text-C8102E p-8">
            <p>Entschuldigung, wir konnten keine Instagram-Posts laden. Bitte versuchen Sie es später erneut.</p>
          </div>
        ) : (
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
                          <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="block">
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
                          </a>
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
        )}

        <div className="text-center">
          <Button className="bg-C8102E hover:bg-C8102E/90 text-white">
            <Instagram className="mr-2 h-4 w-4" />
            <a 
              href={INSTAGRAM_URL}
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
