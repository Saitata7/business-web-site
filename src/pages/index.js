import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Ensuring Hassle-Free Ownership and Optimal Property Performance"
        title="Efficient Property Management and Maintenance Services"
        text="Discover reliable property management and maintenance solutions tailored to meet your needs. Our expert team takes care of all aspects, from tenant screening and rent collection to regular upkeep and repairs. Enjoy stress-free property ownership and maximize your investment's potential. Trust us to handle the complexities while you focus on what matters most."
        btnText="See You"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Expert Assistance in Buying, Selling, Rental, Renovation, and Maintenance"
        title="Your One-Stop Solution for Real Estate Needs"
        text="Welcome to our comprehensive real estate platform! Whether you're looking to buy your dream home, sell your property, find the perfect rental, or renovate and maintain your existing space, we've got you covered. Our team of experienced professionals is dedicated to providing top-notch service and guidance throughout your real estate journey. Experience hassle-free transactions and reliable support with us."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Contact information"
        title=""
        text="Address: 82 Upper sutton lane Heston Middx TW5 0QB, Heston middx, UK"
        newtext ="Email: skrj80@gmail.com  |  Phone: +44 7909537987"
        //btnText="Read more"
      />
      <Footer />
    </>
  );
};
