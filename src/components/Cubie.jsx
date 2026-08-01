import * as THREE from "three";

const BLACK = "#111111";

export default function Cubie({ position }) {
  const [x, y, z] = position;

  const materials = [
    new THREE.MeshStandardMaterial({
      color: x === 1 ? "red" : BLACK,
    }),

    new THREE.MeshStandardMaterial({
      color: x === -1 ? "orange" : BLACK,
    }),

    new THREE.MeshStandardMaterial({
      color: y === 1 ? "white" : BLACK,
    }),

    new THREE.MeshStandardMaterial({
      color: y === -1 ? "yellow" : BLACK,
    }),

    new THREE.MeshStandardMaterial({
      color: z === 1 ? "green" : BLACK,
    }),

    new THREE.MeshStandardMaterial({
      color: z === -1 ? "blue" : BLACK,
    }),
  ];

  return (
    <mesh position={position}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      <primitive object={materials[0]} attach="material-0" />
      <primitive object={materials[1]} attach="material-1" />
      <primitive object={materials[2]} attach="material-2" />
      <primitive object={materials[3]} attach="material-3" />
      <primitive object={materials[4]} attach="material-4" />
      <primitive object={materials[5]} attach="material-5" />
    </mesh>
  );
}