import React from "react";
import {
  FooterContainer,
  FooterLinks,
  ContactDetails,
  ContactInfo,
  ContactLabel,
  
} from "./style";

import { GoogleMapComponent } from "./Map";

export const Footer_SECTION_ID = "Footer-section";

export const emailLink = "mailto:Indian.express24@gmail.com";
export const phoneLink = "tel:02692 230796";

export const Footer: React.FC = () => {


  

  return (
    <FooterContainer id='Footer-section'>
    

        <GoogleMapComponent />
        <FooterLinks>
          <ContactDetails>
            <ContactLabel>Phone:</ContactLabel>
            <ContactInfo href={phoneLink}>+1(510) 565-8587</ContactInfo>
            <br />
            <ContactLabel>Email:</ContactLabel>
            <ContactInfo href={emailLink}>
            Indian.expresss24@gmail.com
            </ContactInfo>
          </ContactDetails>
        </FooterLinks>
  
    </FooterContainer>
  );
};
