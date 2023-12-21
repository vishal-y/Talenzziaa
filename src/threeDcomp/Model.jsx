import { useRef } from 'react'
import { useGLTF} from '@react-three/drei'


export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF('/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<mesh geometry={nodes.dolmen1001.geometry} material={nodes.dolmen1001.material} >
<mesh geometry={nodes.dolmen1.geometry} material={nodes.dolmen1.material} />
<mesh geometry={nodes.dolmen1002.geometry} material={nodes.dolmen1002.material} />
<mesh geometry={nodes.dolmen1003_1.geometry} material={nodes.dolmen1003_1.material} />
<mesh geometry={nodes.dolmen1004.geometry} material={nodes.dolmen1004.material} />
<mesh geometry={nodes.dolmen1005.geometry} material={nodes.dolmen1005.material} />
<mesh geometry={nodes.dolmen1006.geometry} material={nodes.dolmen1006.material} />
<mesh geometry={nodes.dolmen1007.geometry} material={nodes.dolmen1007.material} />
<mesh geometry={nodes.dolmen1008.geometry} material={nodes.dolmen1008.material} />
<mesh geometry={nodes.dolmen1009.geometry} material={nodes.dolmen1009.material} />
<mesh geometry={nodes.dolmen1010.geometry} material={nodes.dolmen1010.material} />
<mesh geometry={nodes.dolmen1011.geometry} material={nodes.dolmen1011.material} />
<mesh geometry={nodes.dolmen1012.geometry} material={nodes.dolmen1012.material} />
<mesh geometry={nodes.dolmen1013.geometry} material={nodes.dolmen1013.material} />
<mesh geometry={nodes.dolmen1014.geometry} material={nodes.dolmen1014.material} />
<mesh geometry={nodes.dolmen1015.geometry} material={nodes.dolmen1015.material} />
<mesh geometry={nodes.dolmen1016.geometry} material={nodes.dolmen1016.material} />
<mesh geometry={nodes.dolmen1017.geometry} material={nodes.dolmen1017.material} />
<mesh geometry={nodes.dolmen1018.geometry} material={nodes.dolmen1018.material} />
<mesh geometry={nodes.dolmen1019.geometry} material={nodes.dolmen1019.material} />
<mesh geometry={nodes.dolmen1020.geometry} material={nodes.dolmen1020.material} />
<mesh geometry={nodes.dolmen2.geometry} material={nodes.dolmen2.material} />
<mesh geometry={nodes.dolmen2001.geometry} material={nodes.dolmen2001.material} />
<mesh geometry={nodes.dolmen2002.geometry} material={nodes.dolmen2002.material} />
<mesh geometry={nodes.dolmen2003.geometry} material={nodes.dolmen2003.material} />
<mesh geometry={nodes.dolmen2004.geometry} material={nodes.dolmen2004.material} />
<mesh geometry={nodes.dolmen2005.geometry} material={nodes.dolmen2005.material} />
<mesh geometry={nodes.dolmen3.geometry} material={nodes.dolmen3.material} />
<mesh geometry={nodes.dolmen3001.geometry} material={nodes.dolmen3001.material} />
<mesh geometry={nodes.dolmen3002.geometry} material={nodes.dolmen3002.material} />
<mesh geometry={nodes.dolmen4.geometry} material={nodes.dolmen4.material} />
<mesh geometry={nodes.dolmen4001.geometry} material={nodes.dolmen4001.material} />
<mesh geometry={nodes.dolmen4002.geometry} material={nodes.dolmen4002.material} />
<mesh geometry={nodes.dolmen4003.geometry} material={nodes.dolmen4003.material} />
<mesh geometry={nodes.dolmen4004.geometry} material={nodes.dolmen4004.material} />
<mesh geometry={nodes.dolmen4005.geometry} material={nodes.dolmen4005.material} />
<mesh geometry={nodes.dolmen4006.geometry} material={nodes.dolmen4006.material} />
<mesh geometry={nodes.dolmen4007.geometry} material={nodes.dolmen4007.material} />
<mesh geometry={nodes.dolmen4008.geometry} material={nodes.dolmen4008.material} />
</mesh>

    </group>
  )
}

useGLTF.preload('/model.gltf')