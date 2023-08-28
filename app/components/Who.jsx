import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from "./Cube"
import { forwardRef } from 'react';

const Section = styled.div`
height:100vh;
display:flex;
scroll-snap-align:center;
justify-content:center;

@media (min-width:0px) and (max-width: 1000px) {
      display: none;
    }
`

const Container = styled.div`
height:100vh;
width:1400px;
display:flex;
justify-content:space-between;
scroll-snap-align:center;
`

const Left = styled.div`
flex: 1;


`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
font-size: large;
`
const Line = styled.img`
height: 5px;
`
const Subtitle = styled.div`
font-size: 25px;
font-weight: 700;
color: #9beb89c7;
`
const Desc = styled.div`

`

const Button = styled.div`

`
const Title = styled.div`
font-size: 74px;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
// eslint-disable-next-line react/display-name
export const Who = () => {
  return (

    <div id="who">

      <Section>
        <Container>
          <Left>

            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />

              <Cube />


            </Canvas>

          </Left>

          <Right>
            <Title>Think outside the square space</Title>

            <WhatWeDo>

              <Line src="./img/Line.png" />

              <Subtitle>Critical Thinker.</Subtitle>
            </WhatWeDo>

            <Desc>
            I enjoy Creating Beautiful Experiences.
            </Desc>

            <Button>My works</Button>
          </Right>

        </Container>

      </Section>

    </div>



  )
}
export default Who;
