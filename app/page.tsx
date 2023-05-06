//1

'use client'
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";
import styles from "./page.module.scss"
import { useRef } from "react";
import Navbar from './components/Navbar'


const Container = styled.div`
height:100vh;
width: inherit;
scroll-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display:none;
}
color:white;
`

export default function Home() {
  const worksRef = useRef(null);
  return (

    <Container className={styles.main}>

      <Navbar boy={worksRef} />
      <Hero />
      <Who />
      <Works ref={worksRef} />
      <Contact />

    </Container>
  )
}
