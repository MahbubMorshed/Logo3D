import React from "react";
import "./style.css";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
function Container() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, -0.75, 0.75], fov: 80, near: 0.001 }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default Container;
