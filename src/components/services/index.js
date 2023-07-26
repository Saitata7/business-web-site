import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Property Developer</ServicesH2>
          <ServicesP>
          Discover Your Ideal Project! Explore our extensive database for buying,
           selling, and rental opportunities. Your dream property awaits.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Expert Renovation Services</ServicesH2>
          <ServicesP>
           Enhance your property with top-notch 
           renovation solutions tailored to your needs.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Hassle-Free Maintenance</ServicesH2>
          <ServicesP>
           Ensure your property stays in top condition with our 
           reliable and efficient maintenance services.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
