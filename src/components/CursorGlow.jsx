import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-3xl lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
