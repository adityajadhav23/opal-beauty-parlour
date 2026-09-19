import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setOn(true);
    let frame = 0;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setPos({ x: event.clientX, y: event.clientY });
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}
