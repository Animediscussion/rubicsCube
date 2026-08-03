import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Cube from "./Cube";

export default function Scene() {
  return (
    <Canvas camera={{ position: [6, 6, 6], fov: 45 }}>
      <ambientLight intensity={1.5} />

      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Cube />

      <Environment preset="city" />

      <OrbitControls enablePan={false} minDistance={6} maxDistance={12} />
    </Canvas>
  );
}
