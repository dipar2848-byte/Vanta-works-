import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";

function Scene({ scroll }) {
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;

    // cinematic scroll motion
    mesh.current.rotation.y = scroll * Math.PI * 2;
    mesh.current.rotation.x = scroll * Math.PI * 0.6;

    mesh.current.position.z = -scroll * 10;
    mesh.current.scale.setScalar(1 + scroll * 0.5);
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>
    </Float>
  );
}

export default function WebGLScene({ scroll }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />

      <Environment preset="city" />

      <Scene scroll={scroll} />
    </Canvas>
  );
}
