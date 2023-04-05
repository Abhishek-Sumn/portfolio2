import React from 'react';
import styled from 'styled-components';
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cube from "./Cube"
import WebDesign from "./WebDesign";

const Container = styled.div`
height:100vh;
width:100%;
scroll-snap-align:center;

`

export default function Test() {
    return (
        <Container>
            <Canvas>

                <OrbitControls enableZoom={false} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>

            </Canvas>
        </Container>
    )
}
