/* eslint-disable react-hooks/rules-of-hooks */
// Purposely added "esline-disable" since this will be used for part of a react component
import { useState, useEffect } from "react";

export default function addX() {
  let [xpos, saveX] = useState(0);

  // Hook that is used for adding X
  useEffect(() => {
    const timer = setInterval(() => {
      saveX((value) => (value >= 2112) ? 0 : value + 1);
    }, 50);
    return () => clearInterval(timer);
  }, []); // Purposely blank since this only happens when component did mount

  return xpos;
}