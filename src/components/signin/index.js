import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { Button } from "../ButtonElements";

const Signin = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setMessageSent(true);

    emailjs.sendForm('service_6vy0qjs', 'template_d3qyfun', form.current, 'g-SPDJBPk49brtonK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign In to your Account</h3>
          <form ref={form} onSubmit={sendEmail}>
            <SigninP>Email</SigninP>
            <SigninInput type="text" placeholder="Enter your email..." />
            <SigninP>Name</SigninP>
            <SigninInput type="text" placeholder="Enter your Name..." />
            <SigninP>Message</SigninP>
            <SigninInput type="text" placeholder="Enter your Message what you want to say..." />
            <Button type="submit" value="Send" className="mt-5 mb-3">Continue</Button>
          </form>
          {isMessageSent && <p className="center-align">Message has been sent!</p>}
          <p className="center-align">
            Okay, Bye <a href="/">Back</a>
          </p>
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
