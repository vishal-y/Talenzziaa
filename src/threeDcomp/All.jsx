import { useState, Suspense, } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { Loader, OrbitControls, Text as DreiText } from '@react-three/drei';
import Vehicle from './Vehicle';
import PropTypes from 'prop-types';



const Box = ({ onCollide, position, mass = 1, size = [2,2,2], wireframe = false, isTrigger = false, opacity = 1 }) => {
  const [ref] = useBox(() => ({
    isTrigger,
    mass,
    args: size,
    position,
    onCollide
  }));

  return (
    <mesh ref={ref} position={position} castShadow={opacity > 0}>
      <boxGeometry args={size} />
      <meshLambertMaterial wireframe={wireframe} transparent opacity={opacity} />
    </mesh>
  );
};

const Plane = (props) => {
  const [ref] = usePlane(() => ({ type: 'Static', material: 'ground', ...props }));

  return (
    <group ref={ref}>
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={props.bgColor} />
      </mesh>
    </group>
  );
};



const Lights = ({ color }) => {
  return (
    <group>
      <ambientLight intensity={0.6} color={color} />
      <directionalLight position={[0, 1000, 0]} intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={0.8} />
    </group>
  );
};

export default function App() {

  const bgColor = '#faf1e8'
  const lightColor = '#faf1e8'
  const message = 'Welcome to hell'
  const displayMessage = true

  const [show, setShow] = useState(false)
  setTimeout(() => {
    setShow(false)
  }, 3000);

  return (
    <div className='h-screen w-screen'>
      <Canvas shadows camera={{ position: [0, 5, 15], fov: 50 }} mode="concurrent">
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
        />
        <fog attach="fog" args={[bgColor, 30, 50]} />
        <color attach="background" args={[bgColor]} />
        <Lights color={lightColor} />
        {displayMessage && (
          <DreiText position={[0, 0.2, 7]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1}>
            Drive here...
          </DreiText>
        )}
        <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
          <Suspense fallback={null}>

            <Plane userData={{ id: 'floor' }} rotation={[-Math.PI / 2, 0, 0]} data={{ name: 'floor' }} bgColor={bgColor} />
            <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />

            <Box position={[Math.random() * 8, Math.random() * 14, 2]} data={{ name: 'box-1' }} />
            <Box position={[Math.random() * 10, Math.random() * 8, 1]} data={{ name: 'box-2' }} />
            <Box position={[Math.random() * -20, Math.random() * 4, 1]} data={{ name: 'box-3' }} />
            <Box position={[Math.random() * -5, Math.random() * 6, 1]} data={{ name: 'box-4' }} />
            <Box position={[Math.random() * -12, Math.random() * -10, 1]} data={{ name: 'box-5' }} />
            <Box position={[Math.random() * 4, Math.random() * -15, 1]} data={{ name: 'box-6' }} />
            <Box position={[Math.random() * 40, Math.random() * 10, 1]} data={{ name: 'box-7' }} />
            <Box position={[Math.random() * 12, Math.random() * 16, 1]} data={{ name: 'box-8' }} />


          </Suspense>
        </Physics>
        <OrbitControls />
      </Canvas>
      <Loader />

      {

        show ? <div className='absolute'>
          <h1 className="title">MEET OUR TEAM</h1>
          <div className="controls">
            <p className="controls-content">
              Use the <strong>arrow keys</strong> to drive
              <br />
              Hit the breaks with <strong>space</strong>
              <br />
              Reset the car with <strong>r</strong>
            </p>
            <p>{message}</p>
          </div>
        </div>
          :
          null

      }

    </div>
  );
}

Plane.propTypes = {
  bgColor: PropTypes.string,
};

Lights.propTypes = {
  color: PropTypes.string,
};
