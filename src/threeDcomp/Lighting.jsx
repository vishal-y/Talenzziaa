import  { useRef } from 'react'
import { useGLTF} from '@react-three/drei'


export default function Lighting(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/light.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<mesh geometry={nodes.lightning.geometry} material={materials['Yellow.026']} rotation={[Math.PI / 2, 0, 0,]} />
    </group>
  )
}

useGLTF.preload('/light.gltf')