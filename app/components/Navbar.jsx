import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
display:flex;
justify-content:center;
`
const Container = styled.div`
width: 1400px;
display:flex;
justify-content:space-between;
align-items:center;

`
const Links = styled.div`
display:flex;
gap:50px
align-items:center;
`

const Logo = styled.img`
margin-top:15px;
width:150px;

`
const List = styled.ul`
margin-left:55vh;
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
width:100px;
padding:15px;
background-color:#0f5d77;
color: white;
border:none;
border-radius:5px;
cursor:pointer;
font-size:15px;
`


function Navbar() {
    return (

        <Section>
            <Container>

                <Links>
                    <Logo src="./img/logo.png"></Logo>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>

                <Icons>

                    <Icon src="./img/search.png" />
                    <Button > Hire Now </Button>

                </Icons>
            </Container>
        </Section>
    )
}
export default Navbar; 
