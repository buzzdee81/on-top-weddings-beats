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
    id: "gLJFVmMERRA",
    title: "On Top - So Excited",
    thumbnail: "https://img.youtube.com/vi/gLJFVmMERRA/default.jpg",
  },
  {
    id: "VIxA6A872HY",
    title: "On Top - It's so easy",
    thumbnail: "https://img.youtube.com/vi/VIxA6A872HY/default.jpg",
  },
  {
    id: "HEHQLhQy3C0",
    title: "On Top Band - Live Mitschnitt",
    thumbnail: "https://img.youtube.com/vi/HEHQLhQy3C0/default.jpg",
  }
];

const audio = [
  {
    title: "Perfect (Ed Sheeran Cover)",
    duration: "4:23"
  },
  {
    title: "Don't Stop Believin' (Journey Cover)",
    duration: "3:50"
  },
  {
    title: "Summer of '69 (Bryan Adams Cover)",
    duration: "3:35"
  },
  {
    title: "Sweet Caroline (Neil Diamond Cover)",
    duration: "3:20"
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
            Erleben Sie die Energie und Stimmung unserer Live-Auftritte durch Fotos, Videos und Hörbeispiele.
            Überzeugen Sie sich selbst von unserer Erfahrung und unserem professionellen Auftreten.
          </p>
        </div>

        <Tabs defaultValue="fotos">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="audio">Hörbeispiele</TabsTrigger>
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
            {/* Updated to center videos and make them more prominent */}
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              {videos.map((video, index) => (
                video.id.startsWith("video") ? (
                  // Placeholder for videos without YouTube IDs
                  <div key={index} className="overflow-hidden rounded-lg shadow-md animate-hover mb-8 w-full max-w-2xl">
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
                      <p>{video.title}</p>
                    </div>
                  </div>
                ) : (
                  // YouTube videos with embedded player on click
                  <div 
                    key={index} 
                    className="overflow-hidden rounded-lg shadow-md animate-hover cursor-pointer mb-8 w-full max-w-2xl"
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
                      <p>{video.title}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-6">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Hörproben</h3>
                <div className="space-y-4">
                  {audio.map((track, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center mr-3">
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-white border-b-4 border-b-transparent ml-0.5"></div>
                        </div>
                        <span className="font-medium">{track.title}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{track.duration}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-6 text-gray-600 text-sm">
                  Dies sind nur einige Ausschnitte unserer Live-Auftritte. Kontaktieren Sie uns für mehr Hörbeispiele!
                </p>
              </div>
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
