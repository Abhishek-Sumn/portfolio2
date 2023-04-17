import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Htmld from "./Htmld"
import Model from "./Model"
export const Html = () => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
    <OrbitControls enableZoom={true} autoRotate/>
    <ambientLight intensity={1} />
    <directionalLight position={[3, 2, 1]} />

    <Htmld />


  </Canvas>
  )
}
export default Html