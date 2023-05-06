import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from "./Model"
import Image from 'next/image'


const Section = styled.div`
height:100vh;
display:flex;
align-items:center;
flex-direction:column;
scroll-snap-align:center;
justify-content:space-between;
`
const Container = styled.div`
margin-left:  20px;
height:100vh;
width:1400px;
display:flex;
justify-content:space-between;
scroll-snap-align:center;
`

const Left = styled.div`
margin-left: 20px;
padding-bottom: 30vh;
flex: 2;
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
color: #C1FF72;
`
const Desc = styled.div`

`
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate{
  100%{
    transform:translateY(20px)
  }
}
`
const Buttoncontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vh;
`
const Button = styled.div`
width:50px;

border:none;
border-radius:5px;
cursor:pointer;
font-size:15px;
`
const Title = styled.div`
font-size: 74px;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Right = styled.div`
display: flex;
flex: 3;
flex-direction: column;
gap: 20px;
align-content: center;
justify-content: center;
`
const Up = styled.div`
 background-color: yellow; 
`
const Down = styled.div`
gap: 20px;
`
const But = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const Hero = () => {
  return (
    <Section>

      <Container>

        <Left>

          <Title>I am Abhishek</Title>

          <WhatWeDo>

            <Line src="./img/Line.png" />

            <Subtitle>Frontend Web Dev.</Subtitle>
          </WhatWeDo>

          <Desc>
            I enjoy creating visually appealing and interactive web interfaces that enhance user experiences
            <br />
            <br />

        
            <b>
            I am currently Looking for Internship
            </b>
          </Desc>

          <Buttoncontainer>

            <a href="https://www.linkedin.com/in/abhishek-suman-0021411b7/" target='_blank'>
              <Button >
                <Image src="/img/ld.png" alt='Linkidin' width="50" height="50"></Image>
              </Button>
            </a>

            <a href="https://github.com/Abhishek-Sumn" target='_blank'>
              <Button>
                <Image src="/img/git.png" alt='Linkidin' width="50" height="50"></Image>
              </Button>
            </a>

          </Buttoncontainer>


        </Left>

        <Right>
          {/* <Img src="./img/moon.png" /> */}

          <Up>

          </Up>



          <Canvas camera={{ fov: 25, position: [5, 5, 5], }} >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Model />
          </Canvas>


        </Right>

      </Container>

    </Section>




  )
}
export default Hero;
