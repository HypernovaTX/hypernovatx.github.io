import { useState, useEffect } from "react";

export default function useXPos() {
  let [xpos, saveX] = useState(0);

  // Hook that is used for adding X
  useEffect(() => {
    const timer = setInterval(() => {
      saveX((value) => (value >= 2112) ? 0 : value + 1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return xpos;
}