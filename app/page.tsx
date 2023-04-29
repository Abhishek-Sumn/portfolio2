//1

'use client'
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";

import { useRef } from "react";
import Navbar from './components/Navbar'
import "./page.module.css"

const Container = styled.div`
height:100vh;
scroll-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width: none;
/* &::-webkit-scrollbar{
  display:none;
} */
color:white;
background:url("./img/bg1.jpg");



`

export default function Home() {
  const worksRef = useRef(null);
  const studioRef = useRef(null);
  const contactRef = useRef(null);


  return (

    <Container>

      <Navbar boy={worksRef} />
      <Hero />
      <Who />
      <Works ref={worksRef} />
      <Contact />

    </Container>
  )
}
