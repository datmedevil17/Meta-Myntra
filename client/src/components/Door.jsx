import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Door(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/door.glb')
  const { actions } = useAnimations(animations, group)

  // Play a specific animation (assuming there's an animation to play)
  React.useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="OutBoddy"
          castShadow
          receiveShadow
          geometry={nodes.OutBoddy.geometry}
          material={materials.text}
          position={[0.407, 0, -0.005]} // Adjusted position
          rotation={[0, 0, 0]} // Reset rotation
          scale={[1, 1, 1]} // Adjusted scale to normal size
        />
        <group
          name="DoorBoddy"
          position={[0, 0, 0]} // Adjusted position
          rotation={[0, 0, 0]} // Reset rotation
          scale={[1, 1, 1]} // Adjusted scale to normal size
        >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['text.001']}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['text.005']}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials['text.006']}
          />
          <group
            name="Locker"
            position={[0, 0, 0]} // Adjusted position
            rotation={[0, 0, 0]} // Reset rotation
            scale={[1, 1, 1]} // Adjusted scale to normal size
          >
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials['text.002']}
            />
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials['text.004']}
            />
          </group>
          <group
            name="Locker001"
            position={[0, 0, 0]} // Adjusted position
            rotation={[0, 0, 0]} // Reset rotation
            scale={[1, 1, 1]} // Adjusted scale to normal size
          >
            <mesh
              name="Cube004"
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials['text.002']}
            />
            <mesh
              name="Cube004_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={materials['text.004']}
            />
            <mesh
              name="Mesh001"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001.geometry}
              material={materials['text.003']}
              position={[0, 0, 0]} // Adjusted position
              rotation={[0, 0, 0]} // Reset rotation
              scale={[1, 1, 1]} // Adjusted scale to normal size
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/door.glb')

export default Door