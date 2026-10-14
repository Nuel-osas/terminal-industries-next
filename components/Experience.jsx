"use client";
import { useEffect, useRef } from "react";
export default function Experience({ route, children }) {
  const root = useRef(null);
  useEffect(() => {
    let stopped = false,
      dispose;
    import("@/lib/experience").then(({ mountExperience }) => {
      if (!stopped) dispose = mountExperience(root.current);
    });
    return () => {
      stopped = true;
      dispose?.();
    };
  }, [route]);
  return (
    <div ref={root} className="local-experience">
      {children}
    </div>
  );
}
