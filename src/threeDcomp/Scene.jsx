import {  Suspense, useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import {  OrbitControls, Text as DreiText, PerspectiveCamera } from '@react-three/drei';
import Vehicle from './Vehicle';
import * as THREE from "three";
import { Box, Plane } from './All';


export default function Scene() {

  const bgColor = '#faf1e8'
  const displayMessage = true

  const bodyRef = useRef();
  const cameraRef = useRef();

  const lookAtVec = new THREE.Vector3(0, 0, 0);
  const cameraVector = new THREE.Vector3(0, 0, 0);

  useFrame((state) => {
    const boxPos = bodyRef.current.translation();
    console.log(boxPos);
    lookAtVec.set(boxPos.x, boxPos.y, boxPos.z);
    cameraVector.lerp(lookAtVec, 0.1);
    state.camera.lookAt(cameraVector);
    state.camera.updateProjectionMatrix();
  });

  return (
        <>
        <PerspectiveCamera position={[-12, 1, 2]} makeDefault ref={cameraRef} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
        />

        <fog attach="fog" args={[bgColor, 30, 50]} />
        <color attach="background" args={[bgColor]} />

        <group>
          <ambientLight intensity={0.5} color={bgColor} />
          <directionalLight position={[0, 10, 0]} intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={0.8} />
        </group>

        {displayMessage && (
          <DreiText position={[0, 0.2, 7]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1}>
            Drive here...
          </DreiText>
        )}
        <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
          <Suspense fallback={null}>

            <Plane userData={{ id: 'floor' }} rotation={[-Math.PI / 2, 0, 0]} data={{ name: 'floor' }} bgColor={bgColor} />

            <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />

            <Box position={[Math.random() * 8, 1, Math.random() * 14]} data={{ name: 'box-1' }} />
            <Box position={[Math.random() * 10, 1, Math.random() * 8]} data={{ name: 'box-2' }} />
            <Box position={[Math.random() * -20, 1, Math.random() * 4]} data={{ name: 'box-3' }} />
            <Box position={[Math.random() * -5, 1, Math.random() * 6]} data={{ name: 'box-4' }} />
            <Box position={[Math.random() * -12, 1, Math.random() * -10]} data={{ name: 'box-5' }} />
            <Box position={[Math.random() * 4, 1, Math.random() * -15]} data={{ name: 'box-6' }} />
            <Box position={[Math.random() * 40, 1, Math.random() * 10]} data={{ name: 'box-7' }} />
            <Box position={[Math.random() * 12, 1, Math.random() * 16]} data={{ name: 'box-8' }} />


          </Suspense>
        </Physics>
        <OrbitControls />
 
</>
      
  );
}
