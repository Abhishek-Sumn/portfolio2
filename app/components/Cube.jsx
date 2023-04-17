import React, { useRef } from 'react'
import { RenderTexture, Text, PerspectiveCamera } from '@react-three/drei/core'
import { useFrame } from '@react-three/fiber'



export const Cube = () => {
    const textRef = useRef()
    useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">

                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 5]}
                        
                    />

                    <color attach="background" args={["#4b8ba7"]} />
                    <Text ref={textRef} fontSize={3} color="#0e3765">
                        Hello
                    </Text>

                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}
export default Cube