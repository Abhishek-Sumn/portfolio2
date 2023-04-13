import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
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
height:100vh;
width:1400px;
display:flex;
justify-content:space-between;
scroll-snap-align:center;
`

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
font-size: large;

`
const Right = styled.div`
flex: 3;
position: relative;
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

export const Hero = () => {
  return (
    <Section>

      <Navbar />

      <Container>

        <Left>

          <Title>I am Abhishek</Title>

          <WhatWeDo>

            <Line src="./img/Line.png" />

            <Subtitle>Frontend Web Dev.</Subtitle>
          </WhatWeDo>

          <Desc>
            We enjoy creating delightful,human centered
            digital experiences
          </Desc>

          <Button>Learn More</Button>

        </Left>

        <Right>
          <Img src="./img/moon.png" />
        </Right>

      </Container>

    </Section>




  )
}
export default Hero;
