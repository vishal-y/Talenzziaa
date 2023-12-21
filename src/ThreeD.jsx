import { Canvas } from "@react-three/fiber";
// import Keyboard from './threeDcomp/Keyboard'
import {
    CameraControls,
    Environment,
    Float,
    // MeshReflectorMaterial,
    // RenderTexture,
    // Text,
    // useFont,
  } from "@react-three/drei";
import Lighting from "./threeDcomp/Lighting";

export default function ThreeD() {
  return (
    <Canvas  shadows camera={{ position: [0, 0, 3], fov: 40 }}>
    <CameraControls  />
    <Float  position={[0, -.3, 0]} floatIntensity={1} rotationIntensity={0}>
    {/* <Keyboard/> */}
    <Lighting/>
    </Float>
    <Environment preset="city" />
  </Canvas>
  )
}
