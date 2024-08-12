import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
function Sofa(props) {
  const { nodes, materials } = useGLTF('./models/Sofa.glb')

  const map =useTexture("./textures/sofa/Sofa_01_diff_2k.png")
    const normalMap=useTexture("./textures/sofa/Sofa_01_nor_gl_2k.png")
    const roughMap=useTexture("./textures/sofa/Sofa_01_roughness_2k.png")
  return (
    <group {...props} dispose={null} scale={[15,15,15]} position={[-55,3,-60]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa_01.geometry}
        material={materials.Sofa_01}
        map={map}
        normalMap={normalMap}
        roughnessMap={roughMap}
      />
    </group>
  )
}

useGLTF.preload('/Sofa.glb')

export default Sofa;
