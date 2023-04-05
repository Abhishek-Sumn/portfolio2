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
width:200px;
`
const List = styled.ul`

`

const ListItem = styled.li`

`
const Icons = styled.div`

`
const Icon = styled.img`

`
const Button = styled.button`

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