"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ExternalLink, Volume2, VolumeX } from "lucide-react";
import { YOUTUBE_URL, YOUTUBE_EMBED_URL } from "@/lib/constants";
import { ContactUs } from "../blocks/form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { YoutubeLoader } from "./youtube-loader";
import { YoutubeLoaderLight } from "./youtube-loader-light";
function HeroOverlay() {
  return <div className="absolute inset-0 bg-black/35" />;
}

function HeroContent() {
  return (
    <div className="absolute inset-0 z-10 flex h-full items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center gap-6 text-center text-white">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild>
            <a href="#intro">Explore Qblox</a>
          </Button>
          <ContactUs className=" border cursor-pointer border-white/60 bg-white/0 text-white hover:bg-white/10 hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function HeroControls({
  isMuted,
  toggleMute,
}: {
  isMuted: boolean;
  toggleMute: () => void;
}) {
  return (
    <div className="absolute inset-x-0 top-0 xl:top-5 z-105 flex justify-end p-4">
      <div className="w-full max-w-7xl mx-auto flex justify-end">
        <div className="flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 backdrop-blur">
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 rounded-full text-white hover:bg-white/15"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 rounded-full text-white hover:bg-white/15"
            asChild
          >
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open on YouTube"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
function Thumbnail() {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsDone(true), 700);
  }, []);
  return (
    <div
      className={cn(
        "absolute inset-0 aspect-video transition-opacity duration-500",
        isDone && "opacity-0 hidden"
      )}
    >
      <Image src="/thumbnail.jpg" fill alt="aspect" className="object-cover" />
    </div>
  );
}

export function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const useLoader = false;

  // Extract video ID from the constant
  const videoId = YOUTUBE_EMBED_URL.split("/").pop()?.split("?")[0];

  // Build URL from scratch to avoid duplicate parameters
  const playerParams = [
    "autoplay=1",
    "mute=1",
    "controls=0",
    `start=${useLoader ? "5" : "6"}`,
    "end=53",
    "showinfo=0",
    "rel=0",
    "modestbranding=0",
    "loop=1",
    `playlist=${videoId}`,
    "enablejsapi=1",
    "iv_load_policy=3",
    "playsinline=1",
  ];

  const embedSrc = `https://www.youtube.com/embed/${videoId}?${playerParams.join(
    "&"
  )}`;

  console.log("Embed URL:", embedSrc);
  console.log("Start time:", useLoader ? "3" : "6");

  const toggleMute = () => {
    if (videoRef.current?.contentWindow) {
      const action = muted ? "unMute" : "mute";
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: action, args: [] }),
        "*"
      );
      setMuted(!muted);
    }
  };

  return (
    <div className="mt-16  xl:mt-0 xl:z-50">
      <section
        id="hero-section"
        className="relative isolate w-full aspect-video overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            key={embedSrc}
            ref={videoRef}
            className="h-full w-full"
            src={embedSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <Thumbnail />
        {useLoader && <YoutubeLoaderLight />}
        <HeroOverlay />
        {/* <div
          className={cn(
            "absolute inset-0 bg-black/35",
            showVideo ? "bg-black/0" : "bg-white"
          )}
        /> */}
        <div className="hidden sm:block h-full">
          <HeroContent />
        </div>
        <HeroControls isMuted={muted} toggleMute={toggleMute} />
      </section>
    </div>
  );
}
