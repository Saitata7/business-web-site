import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-6 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="#">How it works</FooterLink>
            <p style={{ color: 'white' }}>
              We provide onestop service in fully managing and maintaining your property
              </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Explore</FooterH2>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Product</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- Skrj consulting ltd -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
