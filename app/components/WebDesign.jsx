import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Model from "./model";

export const WebDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>

                <Model />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}
export default WebDesign;