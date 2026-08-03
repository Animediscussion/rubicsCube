import Cubie from "./Cubie";
import useCube from "../hooks/useCube";

export default function Cube() {
  const { cubies } = useCube();

  return (
    <>
      {cubies.map((cubie) => (
        <Cubie key={cubie.id} cubie={cubie} />
      ))}
    </>
  );
}
