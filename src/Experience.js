import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Logo from "./Logo";
import "./style.css";

export default function Experience() {
  return (
    <>
      <Suspense fallback={null}>
        <mesh>
          <sphereGeometry args={[0.2, 64, 64]} />
          <Logo />
          <meshPhysicalMaterial
            depthWrite={false}
            transmission={1}
            thickness={10}
            roughness={0.65}
          />
        </mesh>
        <OrbitControls />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} color="#ooffff" />
        <ambientLight intensity={0.4} />
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
