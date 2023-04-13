import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height:100vh;
display:flex;
scroll-snap-align:center;
justify-content:center;
`

const Container = styled.div`
height:100vh;
width:1400px;
display:flex;
justify-content:space-between;
scroll-snap-align:center;
`

const Left = styled.div`
flex: 1;


`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
font-size: large;
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

export const Who = () => {
  return (
    <Section>



      <Container>

        <Left>



        </Left>

        <Right>
          <Title>Think outside the square space</Title>

          <WhatWeDo>

            <Line src="./img/Line.png" />

            <Subtitle>who we are.</Subtitle>
          </WhatWeDo>

          <Desc>
            We enjoy creating delightful,human centered
            digital experiences
          </Desc>

          <Button>see our works</Button>
        </Right>

      </Container>

    </Section>




  )
}
export default Who;
