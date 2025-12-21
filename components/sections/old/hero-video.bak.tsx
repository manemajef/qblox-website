"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Volume2, VolumeX } from "lucide-react";
import { YOUTUBE_URL, YOUTUBE_EMBED_URL } from "@/lib/constants";

function Video({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLIFrameElement | null>;
}) {
  // Extract video ID for the loop playlist parameter
  const videoId = YOUTUBE_EMBED_URL.split("/").pop()?.split("?")[0];
  const separator = YOUTUBE_EMBED_URL.includes("?") ? "&" : "?";
  // enablejsapi=1 is required to control the player via postMessage
  // scale-[1.35] and pointer-events-none hide the YouTube UI
  const embedSrc = `${YOUTUBE_EMBED_URL}${separator}autoplay=1&mute=1&controls=0&start=6&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&enablejsapi=1`;
  // const embedSrc = `${YOUTUBE_EMBED_URL}${separator}autoplay=1&mute=1&controls=0&start=6&end=39&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&enablejsapi=1`;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <iframe
        ref={videoRef}
        className="h-full w-full"
        src={embedSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
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
    <div className="absolute inset-x-0 top-0 xl:top-5 z-20 flex justify-end p-4">
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

export function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (videoRef.current?.contentWindow) {
      const action = isMuted ? "unMute" : "mute";
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: action, args: [] }),
        "*"
      );
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <Video videoRef={videoRef} />
      {/* 
        We place controls here so they share state. 
        Positioning is handled by absolute classes within HeroControls 
      */}
      <HeroControls isMuted={isMuted} toggleMute={toggleMute} />
    </>
  );
}
