import  { Suspense, useEffect , useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, usePlane } from '@react-three/cannon';
import { Loader, OrbitControls,  Text as DreiText } from '@react-three/drei';
import Vehicle from './Vehicle';
import Model from './Model';
import PropTypes from 'prop-types';
import { Color } from "three";
import { useBox } from '@react-three/cannon';

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);


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
  // color={'#DA2D2D'}
  return (
    <group>
      <ambientLight intensity={0.6} color={color} />
      <directionalLight position={[0, 1000, 0]} intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={0.8} />
    </group>
  );
};


export default function App() {
 
  const bgColor ='#faf1e8'
  const lightColor='#faf1e8'
  const message='Welcome to hell'
  const displayMessage=true

  const [small, setSmall] = useState(false)

  useEffect(()=>{
    window.innerWidth > 800 ? setSmall(false) : setSmall(true)
  },[setSmall])

  return (
    <div className='h-screen w-screen flex justify-center mt-[20rem] items-center'>
     
      <Canvas shadows camera={{ position: [0, 0, 25], fov: 50 }} mode="concurrent">
        <fog attach="fog" args={[bgColor, 12, 50]} />
        <color attach="background" args={[bgColor]} />
        <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.5}
          />
        <Lights color={lightColor} />
        {displayMessage && (
          <DreiText position={[0, 0.2, 7]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1}>
            Drive here...
          </DreiText>
        )}


        <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
          <Suspense fallback={null}>
           
          <ModelWithPhysics  position={[0, -2, 0]} scale={1} />
            <Plane userData={{ id: 'floor' }} rotation={[-Math.PI / 2, 0, 0]} data={{ name: 'floor' }} bgColor={bgColor} />
<Model position={[0, -2, 0]} scale={small ? 0.6 : 1 }  />
            <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />
           
          </Suspense>
        </Physics>
      </Canvas>
      <Loader />

      <div className='absolute'>
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
    </div>
  );
}


ModelWithPhysics.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  scale: PropTypes.number.isRequired,
};

PhysicsBox.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

function ModelWithPhysics(props) {
  const { position, scale } = props;

  return (
    <PhysicsBox position={position}>
      <Model position={position} scale={scale} />
    </PhysicsBox>
  );
}

function PhysicsBox({ children, position }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  return <mesh ref={ref}>{children}</mesh>;
}


Plane.propTypes = {
  bgColor: PropTypes.string,
};

Lights.propTypes = {
  color: PropTypes.string,
};
