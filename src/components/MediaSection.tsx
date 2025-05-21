
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  {
    src: "/images/gallery/1.jpg?q=80&w=2070",
    alt: "Band beim Empfang auf einer Hochzeit"
  },
  {
    src: "/images/gallery/2.jpg?q=80&w=2070",
    alt: "Nadine beim Live-Auftritt"
  },
  {
    src: "/images/gallery/3.jpg?q=80&w=2070",
    alt: "Wast beim Live-Auftritt"
  },
  {
    src: "/images/gallery/4.jpg?q=80&w=2070",
    alt: "Alex beim Live-Auftritt"
  },
  {
    src: "/images/gallery/5.jpg?q=80&w=2070",
    alt: "On Top mit den King"
  },
  {
    src: "/images/gallery/6.jpg?q=80&w=2070",
    alt: "Band beim Live-Auftritt"
  }
];

const videos = [
  {
    id: "HEHQLhQy3C0",
    title: "On Top Band - Live Mitschnitt",
    thumbnail: "https://img.youtube.com/vi/HEHQLhQy3C0/hqdefault.jpg",
  },
  {
    id: "gLJFVmMERRA",
    title: "On Top - So Excited",
    thumbnail: "https://img.youtube.com/vi/gLJFVmMERRA/hqdefault.jpg",
  },
  {
    id: "VIxA6A872HY",
    title: "On Top - It's so easy",
    thumbnail: "https://img.youtube.com/vi/VIxA6A872HY/hqdefault.jpg",
  }
];

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsImageOpen(true);
  };

  const openVideoPlayer = (videoId: string) => {
    setSelectedVideo(videoId);
    setIsVideoOpen(true);
  };

  return (
    <section id="media" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-gradient">Impressionen</h2>
          <p className="text-lg">
            Erleben Sie die Energie und Stimmung unserer Live-Auftritte durch Fotos und Videos.
            Überzeugen Sie sich selbst von unserer Erfahrung und unserem professionellen Auftreten.
          </p>
        </div>

        <Tabs defaultValue="fotos">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="fotos" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer animate-hover"
                  onClick={() => openLightbox(image.src)}
                >
                  <AspectRatio ratio={4 / 3} className="bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                video.id.startsWith("video") ? (
                  // Placeholder for videos without YouTube IDs
                  <div key={index} className="overflow-hidden rounded-lg shadow-md animate-hover mb-4 w-full">
                    <div className="relative">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-brand-purple border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-medium">{video.title}</h2>
                    </div>
                  </div>
                ) : (
                  // YouTube videos with embedded player on click
                  <div 
                    key={index} 
                    className="overflow-hidden rounded-lg shadow-md animate-hover cursor-pointer mb-4 w-full"
                    onClick={() => openVideoPlayer(video.id)}
                  >
                    <div className="relative">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-brand-purple border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-medium">{video.title}</h2>
                    </div>
                  </div>
                )
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Image Lightbox */}
        <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0" onClick={() => setIsImageOpen(false)}>
            <div className="w-full relative">
              <img
                src={selectedImage || ''}
                alt="Vergrößerte Ansicht"
                className="w-full h-auto"
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Video Lightbox with YouTube Embed */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black border-0">
            <div className="w-full relative">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo}?autoplay=1` : ''}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </AspectRatio>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MediaSection;
