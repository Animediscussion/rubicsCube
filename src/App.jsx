import Scene from "./components/Scene";
import HUD from "./components/HUD";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <HUD />
      <Scene />
    </div>
  );
}
