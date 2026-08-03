import { forwardRef } from "react";
import * as THREE from "three";

const BLACK = "#111";

const Cubie = forwardRef(({ cubie }, ref) => {
  const [x, y, z] = cubie.position;

  const materials = [
    new THREE.MeshStandardMaterial({ color: x === 1 ? "red" : BLACK }),
    new THREE.MeshStandardMaterial({ color: x === -1 ? "orange" : BLACK }),
    new THREE.MeshStandardMaterial({ color: y === 1 ? "white" : BLACK }),
    new THREE.MeshStandardMaterial({ color: y === -1 ? "yellow" : BLACK }),
    new THREE.MeshStandardMaterial({ color: z === 1 ? "green" : BLACK }),
    new THREE.MeshStandardMaterial({ color: z === -1 ? "blue" : BLACK }),
  ];

  return (
    <mesh
      ref={ref}
      position={cubie.position}
      rotation={cubie.rotation}
      material={materials}
    >
      <boxGeometry args={[0.95, 0.95, 0.95]} />
    </mesh>
  );
});

export default Cubie;
