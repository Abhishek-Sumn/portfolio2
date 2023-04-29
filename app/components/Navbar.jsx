import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Who from './Who'

const Section = styled.div`
  --scroll-behavior: smooth!important;
  scroll-behavior: smooth!important;
/* display:flex;
justify-content:center; */
display:flex;
align-items:center;
flex-direction:column;
scroll-snap-align:center;
justify-content:space-between;
`
const Container = styled.div`
position: sticky;
margin: 0px;
padding-right: 30px;

padding: 0;
width: 100%;
display:flex;
justify-content:space-between;
align-items:center;

`
const Links = styled.div`
display:flex;
gap:50px;
align-items:center;
`

const Logo = styled.img`
margin-top:15px;
margin-left: 10vh;
margin-right :50vh ;
width:150px;

`
const List = styled.ul`
margin-right:50vh;
display:flex;
align-items:center;
gap:20px;
list-style:none;
`

const ListItem = styled.li`
cursor:pointer;
font-size:20px;
`
const Icons = styled.div`
display:flex;
gap:20px;
align-items:center;
`
const Icon = styled.img`
width:20px;
cursor:pointer;

`
const Button = styled.button`
margin-right :10vh ;

/* width:100px;
background-color:#C1FF72;
border:none;
border-radius:5px;
cursor:pointer;
font-size:15px; */
--green: #1BFD9C;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid #C1FF72;
  background: linear-gradient(to right, rgba(40, 66, 195, 0.1) 1%, transparent 40%,transparent 60% , rgba(26, 16, 171, 0.1) 100%);
  color: #C1FF72;
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);


  &::before{
    content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform .4s ease-in-out;
  background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
  }
  &:hover{
    color: #C1FF72;
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);

  ::before{
    transform: translateX(15em);
  }
  }

  
`


function Navbar({ boy }) {
  return (

    <Section>
      <Container>

        <Links>
          <Logo src="./img/logg.png"></Logo>
          <List >

            <ListItem>Home</ListItem>

            
             
            <ListItem>Studio</ListItem>

            <ListItem
              onClick={() => boy.current.scrollIntoView({ behavior: "smooth" })}>
              Works
            </ListItem>

            <ListItem  >Contact</ListItem>

          </List>
        </Links>

        <Icons>


          <Button >Hire Now</Button>

        </Icons>
      </Container>
    </Section>
  )
}
export default Navbar; 
