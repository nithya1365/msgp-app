import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "@/assets/hero-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // iOS play workaround
    const once = (
      el: HTMLElement | Document,
      event: string,
      fn: (e: Event) => void
    ) => {
      const onceFn = (e: Event) => {
        el.removeEventListener(event, onceFn);
        fn(e);
      };
      el.addEventListener(event, onceFn);
    };

    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    // Make video play and control with scroll
    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 0;
      
      let isPlaying = false;
      let lastScrollY = window.scrollY;
      let reverseInterval: NodeJS.Timeout | null = null;
      
      // Simple scroll control - play forward on scroll down, reverse on scroll up
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        
        if (scrollDirection === 'down') {
          // Clear reverse interval and play forward
          if (reverseInterval) {
            clearInterval(reverseInterval);
            reverseInterval = null;
          }
          video.playbackRate = 1;
          video.play();
        } else if (scrollDirection === 'up') {
          // Pause normal playback and start reverse
          video.pause();
          if (reverseInterval) {
            clearInterval(reverseInterval);
          }
          reverseInterval = setInterval(() => {
            if (video.currentTime > 0) {
              video.currentTime -= 0.1;
            } else {
              clearInterval(reverseInterval!);
              reverseInterval = null;
            }
          }, 100);
        }
        
        lastScrollY = currentScrollY;
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    // Optional: Load video as blob for better iOS behavior
    setTimeout(() => {
      if (window.fetch) {
        const src = video.currentSrc || video.src;
        fetch(src)
          .then((res) => res.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            const t = video.currentTime;

            once(document.documentElement, "touchstart", () => {
              video.play();
              video.pause();
            });

            video.src = blobURL;
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);

    return () => {
      const video = videoRef.current as any;
      if (video && video._tickerFn) {
        gsap.ticker.remove(video._tickerFn);
        delete video._tickerFn;
      }
      gsap.ticker.lagSmoothing(1000, 16);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "80vh", position: "relative", overflow: "hidden" }}>
      {/* Video */}
      <video
        ref={videoRef}
        className="video-background"
        src={heroVideo}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        muted
        playsInline
        preload="auto"
      />
      {/* Optional overlay content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          color: "white",
          padding: "2rem",
        }}
      >
        <h1>Scroll to play the video</h1>
      </div>
    </div>
  );
};

export default ScrollVideo;
