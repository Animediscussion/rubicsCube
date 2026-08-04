import { useCubeStore } from "../store/cubeStore";

export default function HUD() {
  const moves = useCubeStore((state) => state.moveCount);

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        zIndex: 100,
      }}
    >
      Moves : {moves}
    </div>
  );
}
