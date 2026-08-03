import { useRef, useState, useEffect } from "react";
import { createCube } from "../utils/createCube";

export default function useCube() {
  const [cubies, setCubies] = useState(createCube);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveQueue = useRef([]);
  const addMove = (move) => {
    moveQueue.current.push(move);
  };
  const nextMove = () => {
    if (moveQueue.current.length === 0) return null;

    return moveQueue.current.shift();
  };
  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key.toLowerCase()) {
        case "r":
          addMove("R");
          break;

        case "u":
          addMove("U");
          break;

        case "f":
          addMove("F");
          break;

        case "l":
          addMove("L");
          break;

        case "d":
          addMove("D");
          break;

        case "b":
          addMove("B");
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return {
    cubies,
    setCubies,
    moveQueue,
    addMove,
    isAnimating,
    setIsAnimating,
  };
}
