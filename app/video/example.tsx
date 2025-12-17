"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
const youtubeUrl = "https://www.youtube.com/watch?v=t_Us_D8lJIU";
import { VolumeOff, Volume2, ExternalLink } from "lucide-react";

const videoControlStyle = "bg-black/60 rounded-4xl hover:bg-black/60";

export function VideoControls({
  muted,
  setMuted,
}: {
  muted: boolean;
  setMuted: (value: boolean) => void;
}) {
  return (
    <div className="w-full flex justify-end">
      <Button
        variant="ghost"
        size="icon"
        className={videoControlStyle}
        onClick={() => setMuted(!muted)}
      >
        {muted ? <VolumeOff /> : <Volume2 />}
      </Button>
      <Button className={videoControlStyle} asChild>
        <a href={youtubeUrl}>
          <ExternalLink />
        </a>
      </Button>
    </div>
  );
}

export default function Example() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full aspect-video mt-16 xl:mt-0 xl:z-100">
      <ReactPlayer
        className="pointer-events-none"
        src={youtubeUrl}
        width="100%"
        height="100%"
        playing={true}
        muted={muted}
        loop={true}
        playsInline={true}
        controls={false}
        config={{
          youtube: {
            iv_load_policy: 3,
            start: 6,
          },
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <Button>Click Me</Button>
      </div>
      <div className="absolute inset-x-4"></div>
    </div>
  );
}
