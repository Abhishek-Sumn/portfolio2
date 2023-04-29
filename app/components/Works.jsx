import React, { useState } from 'react'
import styled from 'styled-components';
import Html from "./Html";
import Reactt from "./Reactt";
import Next from "./Next";
import Link from 'next/link';
import { forwardRef } from 'react';

const data = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "React-js",
  "Next-js"

];
const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display: flex;
justify-content: center;
`

const Container = styled.div`
width:1400px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Head = styled.div`
margin-left: 2vh;
margin-top: 4.4vh;
align-items: center;
font-size: 20px;
font-family: sans-serif;
color: #9ef729;

`

const List = styled.div`
margin-left: 30px;
display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 2.5vh;
`
const ListItem = styled.div`
margin-right: 10vh;
font-size: 40px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

::after{
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: #d6c0ff;
  width: 0px;
  overflow:hidden ;
  white-space: nowrap;
}

&:hover{
  ::after{
    animation: anim 0.4s linear both;

    @keyframes anim {
      to{
        width: 100%;
       }
    }
  }
}
`
const Right = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
  position: relative;

  ::before,::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

  ::before {
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  top: 30%;
  right: 7%;
}

::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;

  &:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
  background-color: aqua;
}
}
`

const Sbox = styled.div`
  width: 25.875em;
  height: 34.875em;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: .7rem;
  transition: all ease .3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
// eslint-disable-next-line react/display-name
export const Works = forwardRef((props, ref) => {

  const [work, setWork] = useState("HTML")
  return (
    <div ref={ref}>

      <Section id='Works' >
        <Container >
          <Left>

            <Box>

              <Sbox>

                <Head>
                  <h1>My Tech Stack</h1>
                </Head>

                <div>
                  <List>
                    {data.map((item) => (
                      <ListItem key={item} text={item} onClick={() => setWork(item)}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </div>

              </Sbox>

            </Box>

          </Left>

          <Right>



          </Right>

        </Container>
      </Section>
    </div>
  )

});

export default Works;