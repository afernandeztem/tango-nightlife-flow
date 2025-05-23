
import React, { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, PauseCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      id: 'testimonial1',
      name: t('testimonials.carlos.name'),
      role: t('testimonials.carlos.role'),
      quote: t('testimonials.carlos.quote'),
      videoPlaceholder: 'https://placehold.co/600x400/2D0D63/FFFFFF?text=Testimonial+LUXE',
      videoUrl: '#', // Replace with actual video URL
    },
    {
      id: 'testimonial2',
      name: t('testimonials.sofia.name'),
      role: t('testimonials.sofia.role'),
      quote: t('testimonials.sofia.quote'),
      videoPlaceholder: 'https://placehold.co/600x400/6F3BFF/FFFFFF?text=Testimonial+Beach+Paradise',
      videoUrl: '#', // Replace with actual video URL
    },
    {
      id: 'testimonial3',
      name: t('testimonials.miguel.name'),
      role: t('testimonials.miguel.role'),
      quote: t('testimonials.miguel.quote'),
      videoPlaceholder: 'https://placehold.co/600x400/9D4EDD/FFFFFF?text=Testimonial+SoundWave',
      videoUrl: '#', // Replace with actual video URL
    },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleVideoToggle = (id: string) => {
    if (activeVideo === id) {
      // Pause current video
      videoRefs.current[id]?.pause();
      setActiveVideo(null);
    } else {
      // Pause previous video if exists
      if (activeVideo && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo]?.pause();
      }
      
      // Play new video
      if (videoRefs.current[id]) {
        videoRefs.current[id]?.play();
        setActiveVideo(id);
      }
    }
  };

  return (
    <section id="testimonios" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.testimonialsTitle')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('home.testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden feature-card-hover">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Video placeholder - replace with actual video component in production */}
                  <div className="relative bg-gray-900 aspect-video">
                    <img
                      src={testimonial.videoPlaceholder}
                      alt={`Testimonio de ${testimonial.name}`}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <button
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => handleVideoToggle(testimonial.id)}
                      aria-label={activeVideo === testimonial.id ? "Pausar video" : "Reproducir video"}
                    >
                      {activeVideo === testimonial.id ? (
                        <PauseCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
                      ) : (
                        <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                    <video
                      ref={(el) => (videoRefs.current[testimonial.id] = el)}
                      className="hidden"
                      src={testimonial.videoUrl}
                      controls={false}
                      onEnded={() => setActiveVideo(null)}
                    />
                  </div>
                  
                  {/* Quote overlay */}
                  <div className="bg-white p-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-tango-purple">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://youtube.com/playlist" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-tango-violet hover:underline font-medium"
          >
            {t('testimonials.moreSuccessStories')} <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
