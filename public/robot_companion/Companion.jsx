/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 companion.gltf 
Author: Yandrack (https://sketchfab.com/Yandrack)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-home-robot-7b75f204eb3e42b6babd883773e0789d
Title: Cute Home Robot
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useEffect } from 'react'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/robot_companion/companion.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.057}>
          <group name="edca9fd234644d5480a540acc91ca584fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, 10, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Robo" position={[0, 10, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Cylinder001" position={[-0.121, 0, -0.603]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="Cylinder001_M_Suelo_0" geometry={nodes.Cylinder001_M_Suelo_0.geometry} material={materials.M_Suelo} />
                  </group>
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.M_Metal1} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.M_Pantalla1} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.M_Pantalla2} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.M_Rueda} skeleton={nodes.Object_10.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/companion.gltf');
