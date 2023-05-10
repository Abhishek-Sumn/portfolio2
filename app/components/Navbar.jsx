import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
scroll-behavior: smooth!important;
scroll-snap-align:center;

`
const Container = styled.div`
margin-left: 5em;
margin-right: 2em;

`
const Links = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:50px;
margin-right: 1.5em;
`

const Logo = styled.img`
margin-top:1.5em;
width:10em;

`
const List = styled.ul`
display:flex;
align-items:center;
gap:2em;
list-style:none;

@media (min-width:0px) and (max-width: 1000px) {
  display: none;
}
`

const ListItem = styled.li`
cursor:pointer;
font-size:20px;
text-decoration: none !important;
color: #ffffff;
`

const Hire = styled.div`
 
 
`
const Button = styled.button`


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
  transition: transform .6s ease-in-out;
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

            <a href="#who"> <ListItem>
              Studio
            </ListItem> </a>

            <ListItem
              onClick={() => boy.current.scrollIntoView({ behavior: "smooth" })}>
              Works
            </ListItem>

            <a href="#sec3"> <ListItem>
              Contact
            </ListItem> </a>

          </List>



          <Hire>
            <a href="#sec3">
              <Button>
                Hire
              </Button> </a>
          </Hire>
        </Links>


      </Container>
    </Section>
  )
}
export default Navbar; 
