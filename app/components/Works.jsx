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
align-items: center;
 
`

const List = styled.div`
margin-left: 30px;
display: flex;
flex-direction: column;
gap: 20px;
`
const ListItem = styled.div`
font-size: 70px;
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
`
// eslint-disable-next-line react/display-name
export const Works = forwardRef((props,ref) => {

  const [work, setWork] = useState("HTML")
  return (
    <div ref={ref}>

      <Section id='Works' >
        <Container >
          <Left>
            <List>
              {data.map((item) => (
                <ListItem key={item} text={item} onClick={() => setWork(item)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>

           {/*  {work === "React-js" ? (
              <Reactt />
            ) : work === "Next-js" ? (
              <Next />
            ) : (
              <Html />
            )} */}

          </Right>

        </Container>
      </Section>
    </div>
  )

});

export default Works;