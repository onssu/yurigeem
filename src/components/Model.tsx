"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/yurigeem.glb");
  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const scale = viewport.width < 3 ? 0.3 : 1.3;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    ref.current.rotation.y = Math.sin(t * 2) * 0.3;
  });

  return <primitive ref={ref} object={scene} scale={scale} />;
}

export default function YurigeemModel() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Model />

        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
