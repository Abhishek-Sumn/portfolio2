'use client'
import Contact from "./components/contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Test from "./components/Test";
import styled from "styled-components";

const Container = styled.div`
height:100vh;
scroll-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display:none;
}
color:white;
background:url("./img/bg.jpeg");
`
export default function Home() {
  return (
    <Container>
      
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test />

    </Container>
  )
}
