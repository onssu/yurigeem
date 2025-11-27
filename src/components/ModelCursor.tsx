"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function YurigeemLookAtCursor() {
  const { scene } = useGLTF("/models/yurigeem.glb");
  const ref = useRef<THREE.Group>(null);
  const { pointer, viewport } = useThree(); // [-1, 1] 범위의 x, y

  const scale = viewport.width < 3 ? 0.3 : 1.3;

  useFrame(() => {
    if (!ref.current) return;

    const maxRotY = 0.6; // 좌우 회전 최대값
    const maxRotX = 0.3; // 위아래 회전 최대값

    // pointer.x: -1(왼쪽) ~ 1(오른쪽)
    // pointer.y: -1(아래) ~ 1(위)
    const targetY = pointer.x * maxRotY;
    const targetX = -pointer.y * maxRotX; // 위로 갈수록 고개 위로

    // 부드럽게 보간
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      targetY,
      0.08
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      targetX,
      0.08
    );
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

useGLTF.preload("/models/Untitled.glb");
