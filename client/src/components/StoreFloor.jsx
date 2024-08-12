import React from 'react'
import { useTexture } from '@react-three/drei'


const StoreFloor = () => {
    const map =useTexture("./textures/store_floor/marble_mosaic_tiles_diff_1k.png")
    const displacementMap=useTexture("./textures/store_floor/marble_mosaic_tiles_disp_1k.png")
    const normalMap=useTexture("./textures/store_floor/marble_mosaic_tiles_nor_gl_1k.png")
    const roughMap=useTexture("./textures/store_floor/marble_mosaic_tiles_rough_1k.png")


  return (
    <mesh rotation-x={Math.PI*-0.5} receiveShadow position={[0,2,0]}>
        <planeGeometry args={[150,150]}/>
        <meshStandardMaterial
        map={map} displacementMap={displacementMap} normalMap={normalMap} roughMap={roughMap}/>
    </mesh>
  )
}

export default StoreFloor
