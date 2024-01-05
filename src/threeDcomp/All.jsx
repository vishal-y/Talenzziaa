import {Suspense,  useMemo, useRef } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { Loader, OrbitControls, Text as DreiText  } from '@react-three/drei';
import Vehicle from './Vehicle';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

import myFont from '/Oleo_Script_Regular.json?url'

const DEFAULT_LETTER_SPACING = 0.2;


// const Box = ({ onCollide, position, mass = 0.3, size = [1.2,1.2,1.2], wireframe = false, isTrigger = false, opacity = 1 }) => {
//   const [ref] = useBox(() => ({
//     isTrigger,
//     mass,
//     args: size,
//     position,
//     onCollide
//   }));


//   return (
//     <mesh   ref={ref} position={position} castShadow={opacity > 0}>
//       {/* <boxGeometry  args={isHovered ? [1.5, 1.5, 1.5] : size} />
//       <meshStandardMaterial color={"red"}/> */}
//       <Cube/>
//     </mesh>
//   );
// };




// const Letter = ({ offset, offsetY, offsetZ, textGeo, mass = 100 }) => {
//   const position = new THREE.Vector3(offset, offsetY, offsetZ);

//   const [ref] = useBox(() => ({
//     mass,
//     position: [position.x, position.y, position.z],
//     args: [textGeo?.textSize.x, textGeo?.textSize.y, textGeo?.textSize.z / 2]
//   }));

//   if (!textGeo) {
//     return null;
//   }

//   return (
//     <mesh ref={ref} castShadow>
//       <primitive object={textGeo?.textGeo} attach="geometry" />
//       <meshLambertMaterial   />
//     </mesh>
//   );
// };


// const Text = ({ text, textPosition, size, depth, mass, kerning = DEFAULT_LETTER_SPACING }) => {
 
//   const font = new FontLoader().parse(myFont);



//   const config = useMemo(
//     () => ({
//       font,
//       size: size,
//       height: depth,
//       curveSegments: 24,
//       bevelEnabled: false
//     }),
//     [font, size, depth]
//   );

//   const letterGeometriesArr = text.split('').map((letter) => {
//     const textGeo = new TextGeometry(letter, config);
//     // You need to manually compute bounding box for geometries
//     textGeo.computeBoundingBox();
//     textGeo.center();

//     // If you have the bounding box (initially null) get its size or else just create a new vector3
//     const textSize = textGeo?.boundingBox?.getSize(new THREE.Vector3()) ?? new THREE.Vector3();

//     return { textGeo: textGeo, textSize: textSize };
//   });

//   const textOffsets = letterGeometriesArr.reduce((acc, curr, idx, arr) => {
//     const currLetterWidth = curr?.textSize?.x;
//     const prevLetterWidth = arr[idx - 1]?.textSize?.x ?? 0;

//     // Kerninggggggg
//     const distanceToCenter = idx > 0 ? acc[acc.length - 1] + (currLetterWidth + prevLetterWidth) / 2 + kerning : textPosition.x;
//     acc.push(distanceToCenter);

//     return acc;
//   }, []);

//   return letterGeometriesArr.map((textGeo, idx) => {
//     // All the props lmao
//     return <Letter offsetZ={textPosition.z} offsetY={textPosition.y} offset={textOffsets[idx]} textGeo={textGeo} mass={mass} key={idx} />;
//   });
// };



// const Plane = (props) => {
//   const [ref] = usePlane(() => ({ type: 'Static', material: 'ground', ...props }));

//   return (
//     <group ref={ref}>
//       <mesh receiveShadow>
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial color={props.bgColor} />
//       </mesh>
//     </group>
//   );
// };



// const Lights = ({ color }) => {
//   // color={'#DA2D2D'}

//   return (
//     <group>
//       <ambientLight intensity={0.6} color={color} />
//       <directionalLight position={[0, 1000, 0]} intensity={0.2} />
//       <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={0.8} />
//     </group>
//   );
// };

// export default function App() {

//   const bgColor = '#FFB344'
//   const lightColor = '#FFB344'
//   const message = 'Welcome to hell'
//   const displayMessage = true

//   const [zoom, setZoom] = useState(false)

//   const [show, setShow] = useState(true)
//   setTimeout(() => {
//     setShow(false)
//   }, 3000);


//   return (
//     <div className='h-screen w-screen flex items-center'>
//      <Canvas shadows camera={{ position: [0, 5, 15], fov: 50 }} mode="concurrent">
//         <fog attach="fog" args={[bgColor, 10, 50]} />
//         <color attach="background" args={[bgColor]} />


//         <Lights color={lightColor} />
//         {displayMessage && (
//           <DreiText position={[0, 0.2, 7]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1}>
//             Drive here...
//           </DreiText>
//         )}
//         <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
//           <Suspense fallback={null}>
//             <Text text="Halloween" textPosition={{ x: -9, y: 2, z: -5 }} size={4} depth={1} mass={1} />
//             <Text text="I LOVE U 3 D" textPosition={{ x: -5, y: 2, z: 5 }} size={2} depth={1} mass={1} />

//             <Plane userData={{ id: 'floor' }} rotation={[-Math.PI / 2, 0, 0]} data={{ name: 'floor' }} bgColor={bgColor} />
//             <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />
           
//           </Suspense>
//         </Physics>
//         <OrbitControls      
//           enableZoom={zoom}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2.5}
// />
//       </Canvas>
//       <Loader />

//       <Loader />

//      {

// show ? <div className='absolute'>
//   <h1 className="title">MEET OUR TEAM</h1>
//   <div className="controls">
//     <p className="controls-content">
//       Use the <strong>arrow keys</strong> to drive
//       <br />
//       Hit the breaks with <strong>space</strong>
//       <br />
//       Reset the car with <strong>r</strong>
//     </p>
//     <p>{message}</p>
//   </div>
// </div>
//   :
//   null

// }

// <div className='absolute p-2 border-2 border-red-500 hover:scale-110 hover:bg-blue-600' onClick={()=>{setZoom(!zoom)}}>enable zoom</div>
   
//     </div>

//   );
// }




// const Box = ({ onCollide, position, mass = 1, size = [2, 2, 2], wireframe = false, isTrigger = false, opacity = 1 }) => {
//   const [ref] = useBox(() => ({
//     isTrigger,
//     mass,
//     args: size,
//     position,
//     onCollide
//   }));

//   return (
//     <mesh ref={ref} position={position} castShadow={opacity > 0}>
//       <boxGeometry args={size} />
//       <meshLambertMaterial wireframe={wireframe} transparent opacity={opacity} />
//     </mesh>
//   );
// };

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




const Letter = ({ offset, offsetY, offsetZ, textGeo, mass = 100 }) => {
  const position = new THREE.Vector3(offset, offsetY, offsetZ);

  const [ref] = useBox(() => ({
    mass,
    position: [position.x, position.y, position.z],
    args: [textGeo?.textSize.x, textGeo?.textSize.y, textGeo?.textSize.z / 2]
  }));

  if (!textGeo) {
    return null;
  }

  return (
    <mesh ref={ref} castShadow>
      <primitive object={textGeo?.textGeo} attach="geometry" />
      <meshLambertMaterial   />
    </mesh>
  );
};


const Text = ({ text, textPosition, size, depth, mass, kerning = DEFAULT_LETTER_SPACING }) => {
 
  const font = new FontLoader().parse(myFont);



  const config = useMemo(
    () => ({
      font,
      size: size,
      height: depth,
      curveSegments: 24,
      bevelEnabled: false
    }),
    [font, size, depth]
  );

  const letterGeometriesArr = text.split('').map((letter) => {
    const textGeo = new TextGeometry(letter, config);
    // You need to manually compute bounding box for geometries
    textGeo.computeBoundingBox();
    textGeo.center();

    // If you have the bounding box (initially null) get its size or else just create a new vector3
    const textSize = textGeo?.boundingBox?.getSize(new THREE.Vector3()) ?? new THREE.Vector3();

    return { textGeo: textGeo, textSize: textSize };
  });

  const textOffsets = letterGeometriesArr.reduce((acc, curr, idx, arr) => {
    const currLetterWidth = curr?.textSize?.x;
    const prevLetterWidth = arr[idx - 1]?.textSize?.x ?? 0;

    // Kerninggggggg
    const distanceToCenter = idx > 0 ? acc[acc.length - 1] + (currLetterWidth + prevLetterWidth) / 2 + kerning : textPosition.x;
    acc.push(distanceToCenter);

    return acc;
  }, []);

  return letterGeometriesArr.map((textGeo, idx) => {
    // All the props lmao
    return <Letter offsetZ={textPosition.z} offsetY={textPosition.y} offset={textOffsets[idx]} textGeo={textGeo} mass={mass} key={idx} />;
  });
};


const Lights = () => {
  // color={'#DA2D2D'}

  return (
    <group>
      <ambientLight intensity={0.62}  />
      <directionalLight position={[0, 1000, 0]} intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={0.8} />
    </group>
  );
};


export default function App() {
  
  const bgColor = '#faf0e8'
  const lightColor = '#faf0e8'
  const message = 'Welcome to game'
  const displayMessage = true

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      
      <div className='h-screen min-h-screen w-screen'>
      <Canvas shadows camera={{ position: [0, 5, 15], fov: 50 }} mode="concurrent">
        <fog attach="fog" args={[bgColor, 10, 50]} />
        <color attach="background" args={[bgColor]} />
        <Lights color={lightColor} />
        {displayMessage && (
          <DreiText position={[0, 0.2, 7]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1}>
            Drive here...
          </DreiText>
        )}
        <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
          <Suspense fallback={null}>
            <Text text="TALENZZIAA" textPosition={{ x: -14, y: 2, z: -5 }} size={4} depth={1} mass={0} />
            <Text text="20 JAN 2024" textPosition={{ x: -7, y: 2, z: 5 }} size={2} depth={1} mass={1} />

            <Plane userData={{ id: 'floor' }} rotation={[-Math.PI / 2, 0, 0]} data={{ name: 'floor' }} bgColor={bgColor} />
            <Vehicle  position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />
         
         
          </Suspense>
        </Physics>
        <OrbitControls      
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
/>
      </Canvas>
      <Loader /> 
      </div>

      <div className='absolute'>
        <h1 className="title">TALENZIAAAA car show !</h1>
        <div className="controls">
          <p className="controls-content">
            Use the <strong>W A S D</strong> to drive
            <br />
            Hit the breaks with <strong>space</strong>
            <br />
            Do speed drift with <strong>v</strong><br />
            Reset the car with <strong>r</strong>
          </p>
          <p>{message}</p>
        </div>
      </div>


    </div>
  );
}
