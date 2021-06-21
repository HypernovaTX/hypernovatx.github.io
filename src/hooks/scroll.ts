import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const updateScrollPosition = () => {
    setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return scrollPosition;
};