import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";

const Signin = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  if (!emailRegex.test(e.target.email.value)) {
    setEmailError('Please enter a valid email address.');
    return;
  }
  setEmailError('');
  console.log(form.current);
    emailjs.sendForm('service_6vy0qjs', 'template_d3qyfun', form.current, 'sxMP4F-UHWtVRUWL6')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setMessageSent(false);
          console.log(form.current);
      });
    };
  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sending message to Company</h3>
          <form ref={form} onSubmit={sendEmail}>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <SigninP>Email</SigninP>
            <SigninInput type="text" placeholder="Enter your email..." name="email" required/>
            <SigninP>Name</SigninP>
            <SigninInput type="text" placeholder="Enter your Name..." name="name"/>
            <SigninP>Message</SigninP>
            <SigninInput type="text" placeholder="Enter your Message what you want to say..." name="message"/>
            <SigninInput type="submit" value="Send" className="mt-5 mb-3" style={{backgroundColor:"#010606",color:"#fff",borderRadius: '50px'}}/>
          </form>
          {isMessageSent && <p style={{ color: 'green' }} className="center-align">Message has been sent!</p>}
          <p className="center-align">
            Okay, Bye <a href="/">Back</a>
          </p>
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
