"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

export default function Reveal({ children, width = "100%" }: { children: ReactNode, width?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`reveal ${isVisible ? "revealVisible" : ""}`}
      style={{ width }}
    >
      {children}
    </div>
  );
}
