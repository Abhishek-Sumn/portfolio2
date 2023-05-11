import React from 'react'
import styles from './Res.module.css'
import Image from 'next/image'
import styled from 'styled-components'

const Left = styled.div`
margin-left: 20px;
padding-bottom: 30vh;
flex: 2;
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
color: #C1FF72;
`
const Desc = styled.div`
font-size: 20px;
`
const Buttoncontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vh;
`
const Button = styled.div`
width:50px;

border:none;
border-radius:5px;
cursor:pointer;
font-size:15px;
`
const Title = styled.div`
font-size: 74px;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`



export const Res = () => {
    return (
        <div className={styles.main}>

            <Left>

                <Title>I am Abhishek</Title>

                <WhatWeDo>

                    <Line src="./img/Line.png" />

                    <Subtitle>Frontend Web Dev.</Subtitle>
                </WhatWeDo>

                <Desc>
                    I enjoy creating visually appealing and interactive web interfaces that enhance user experiences
                    <br />
                    <br />


                    <b>
                    I am Still in the process of making this page Responsive/Mobile-Friendly Please visit Me on Desktop
                    </b>
                </Desc>

                <Buttoncontainer>

                    <a href="https://www.linkedin.com/in/abhishek-suman-0021411b7/" target='_blank'>
                        <Button >
                            <Image src="/img/ld.png" alt='Linkidin' width="50" height="50"></Image>
                        </Button>
                    </a>

                    <a href="https://github.com/Abhishek-Sumn" target='_blank'>
                        <Button>
                            <Image src="/img/git.png" alt='Linkidin' width="50" height="50"></Image>
                        </Button>
                    </a>

                </Buttoncontainer>

            </Left>
        </div>
    )
}

export default Res