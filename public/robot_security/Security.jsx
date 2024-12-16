/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 security.gltf 
Author: Gouhadouken (https://sketchfab.com/goukagouken)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/puc-security-bot-7-ee0a6da142b94d2bbf1d65526bec3d3e
Title: P.U.C. security bot #7
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/robot_security/security.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Cube001" position={[0, 0, 1.341]}>
              <mesh name="Cube001_0" geometry={nodes.Cube001_0.geometry} material={materials.Material} />
            </group>
            <group name="Cube" position={[0, 0, 1.302]} rotation={[0, 0, 0.785]}>
              <group name="Cube004" position={[0, 0, -0.008]}>
                <group name="Cylinder" position={[0, -0.7, 0.282]} rotation={[-Math.PI / 2, 0, 0]} scale={0.151}>
                  <mesh name="Cylinder_0" geometry={nodes.Cylinder_0.geometry} material={materials['Material.001']} />
                </group>
                <mesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials.Material} />
              </group>
              <mesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials.Material} />
            </group>
            <group name="Lamp" position={[1.651, -1.857, 3.787]} rotation={[0.386, 0.539, 0.852]}>
              <group name="Lamp_1" />
            </group>
            <group name="Cube003" position={[0.551, -0.437, 0.77]} rotation={[0, 0, 0.887]} scale={0.836}>
              <group name="Cube005" position={[0, -0.043, 0]}>
                <mesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials.Material} />
              </group>
              <mesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials.Material} />
            </group>
            <group name="Cube006" position={[0.478, 0.309, 0.77]} rotation={[0, 0, 2.335]} scale={0.836}>
              <group name="Cube007" position={[0, -0.043, 0]}>
                <mesh name="Cube007_0" geometry={nodes.Cube007_0.geometry} material={materials.Material} />
              </group>
              <mesh name="Cube006_0" geometry={nodes.Cube006_0.geometry} material={materials.Material} />
            </group>
            <group name="Point" position={[-2.338, 0.351, 1.69]}>
              <group name="Point_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/security.gltf')
