"use client";
import { useState } from "react";
export default function ExternalMedia({ url }) {
  const [active, setActive] = useState(false);
  if (!url) return null;
  return (
    <div className="local-external-media">
      {active ? (
        <iframe
          title="Video player"
          src={url}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setActive(true)} aria-label="Play video">
          ▶ <span>Play video</span>
        </button>
      )}
    </div>
  );
}
