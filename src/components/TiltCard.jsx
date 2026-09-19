import { usePointerOffset } from "../hooks/usePointerOffset";

export default function TiltCard({ children, className = "" }) {
  const { ref, offset } = usePointerOffset();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `perspective(900px) rotateX(${offset.y * -8}deg) rotateY(${offset.x * 10}deg) translateZ(0)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
