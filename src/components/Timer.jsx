import { useEffect } from "react";
import { useTimerStore } from "../store/timerStore";

export default function Timer() {
  const { seconds, running, tick } = useTimerStore();

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      tick();
    }, 10);

    return () => clearInterval(id);
  }, [running]);

  return (
    <div
      style={{
        position: "absolute",
        top: 60,
        left: 20,
        color: "white",
        fontSize: 28,
        zIndex: 100,
      }}
    >
      {seconds.toFixed(2)}
    </div>
  );
}
