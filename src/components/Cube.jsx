import Cubie from "./Cubie";
import { useCubeStore } from "../store/cubeStore";

export default function Cube() {
  const cubies = useCubeStore((state) => state.cubies);

  return (
    <>
      {cubies.map((cubie) => (
        <Cubie key={cubie.id} cubie={cubie} />
      ))}
    </>
  );
}
