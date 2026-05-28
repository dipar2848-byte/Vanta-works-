import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(6000 * 3);

    for (let i = 0; i < 6000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    return arr;
  }, []);

  useFrame(({ mouse, clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += mouse.y * 0.0003;
    ref.current.rotation.y += mouse.x * 0.0003;

    ref.current.position.z = Math.sin(clock.getElapsedTime() * 0.4) * 0.4;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function WebGLBackground() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none"
    }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
      }
