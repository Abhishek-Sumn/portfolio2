import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Map from "./Map"
import emailjs from '@emailjs/browser';


const Section = styled.div`
height:100vh;
scroll-snap-align:center;
`
const Container = styled.div`
 height: 100%;
 
 display: flex;
 justify-content: space-between;
 
`
const Left = styled.div`
flex: 1; 
display: flex;
align-items: center;
justify-content: center;
/* justify-content: flex-end; */
@media (min-width:0px) and (max-width: 1000px) {
  padding: 2em;
}
`
const Form = styled.form`
width: 35em;
display: flex;
flex-direction: column;
gap: 25px;
`
const Title = styled.h1`
font-weight: bold;
`

const Input = styled.input`
background-color: #e8e6e6;
padding: 1.5em;
border: none;
border-radius: 5px;
&:hover{
  background-color: #c6bfcf;
}
`
const Textarea = styled.textarea`
padding: 2em;
border: none;
border-radius: 5px;
&:hover{
  background-color: #c6bfcf;
}
`
const Button = styled.button`
background-color: aqua;
padding: 2em;
border: none;
font-weight: bold;
border-radius: 5px;
cursor: pointer;
background-color: #694b90;

&:focus{
  background-color: green;
}

`
const Right = styled.div`

@media (min-width:0px) and (max-width: 1000px) {
      display: none;
    }
`


export const Contact = () => {


  const ref = useRef()
  const [success, setSuccess] = useState(null);

  const handlesubmit = e => {
    e.preventDefault()

    emailjs.sendForm('service_c9rsf8y', 'template_1ovz47a', ref.current, '5syLzyjL9L3qW8Ze8')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);

      });

  }


  return (
    <div id='sec3'>

      <Section >
        <Container>
          <Left>
            <Form ref={ref}
              onSubmit={handlesubmit}>
              <Title>Contact</Title>
              <Input placeholder='Name' name="name" />
              <Input placeholder='Email' name="email" />
              <Textarea placeholder='Write your message'
                name='message' rows={10} />
              <Button type='submit'>Send</Button>
              {
                success && "Message Sent Successfully I will revert back in few hours"
              }
            </Form>
          </Left>
          <Right>
            <Map />
          </Right>
        </Container>
      </Section>
    </div>
  )
}

export default Contact;