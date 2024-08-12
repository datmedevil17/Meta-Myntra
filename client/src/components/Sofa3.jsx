import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Sofa(props) {
  const { nodes, materials } = useGLTF('./models/Sofa.glb')
  return (
    <group {...props} dispose={null} scale={[15,15,15]} position={[17,3,-60]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa_01.geometry}
        material={materials.Sofa_01}
      />
    </group>
  )
}

useGLTF.preload('/Sofa.glb')

export default Sofa;
