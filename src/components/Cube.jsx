import Cubie from "./Cubie";

export default function Cube() {
  const cubies = [];

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubies.push({
          id: `${x}-${y}-${z}`,
          position: [x, y, z],
        });
      }
    }
  }

  return (
    <>
      {cubies.map((cubie) => (
        <Cubie
          key={cubie.id}
          position={cubie.position}
        />
      ))}
    </>
  );
}