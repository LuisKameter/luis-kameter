"use client";
import { useState, useEffect } from "react";

const SwipeMotion = () => {
  var down: any = null;

  const [swipe, setSwipe] = useState(0);

  const updateTouchStart = (e: any) => {
    down = e.clientY;
  };

  const updateTouchMove = (e: any) => {
    if (!down) return;
    var up = e.clientY;
    updateSwipe(up - down);
    down = null;
  };

  const updateSwipe = (y: number) => {
    setSwipe(y);
  };

  useEffect(() => {
    document.addEventListener("mousedown", updateTouchStart);
    document.addEventListener("mousemove", updateTouchMove);
    return () => {
      document.removeEventListener("mousedown", updateTouchStart);
      document.removeEventListener("mousemove", updateTouchMove);
    };
  }, []);

  return swipe;
};

export default SwipeMotion;
