import React from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import Floor from '../components/Floor'
import Light from '../components/Light'
import StoreFloor from '../components/StoreFloor'
import StoreWall1 from '../components/StoreWall1'
import StoreWall2 from '../components/StoreWall2'
import StoreWall3 from '../components/StoreWall3'
import StoreWall4 from '../components/StoreWall4'
import StoreWall5 from '../components/StoreWall5'
import Sofa from '../components/Sofa'
import Sofa2 from '../components/Sofa2'
import Sofa3 from '../components/Sofa3'
const Metaverse = () => {
  return (
    <div className='container'>
        <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
            <OrbitControls/>
            <Light/>
            <Floor/>
            <StoreFloor/>
            <StoreWall1/>
            <StoreWall2/>
            <StoreWall3/>
            <StoreWall4/>
            <StoreWall5/>
            <Sofa/>
            <Sofa2/>
            <Sofa3/>
            

        </Canvas>      
    </div>
  )
}

export default Metaverse
