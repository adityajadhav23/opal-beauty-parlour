import { useEffect, useRef, useState } from "react";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

export function usePointerOffset(enabled = true) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefersReduced() || isCoarsePointer()) return;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = el.getBoundingClientRect();
        setOffset({
          x: (event.clientX - box.left) / box.width - 0.5,
          y: (event.clientY - box.top) / box.height - 0.5,
        });
      });
    };
    const onLeave = () => setOffset({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  return { ref, offset };
}
