import React, { useEffect } from "react";
import {
  FooterContainer,
  FooterLinks,
  ContactDetails,
  ContactInfo,
  ContactLabel,
  
} from "./style";
import { client } from "../../contentful/client";
import { GoogleMapComponent } from "./Map";

export const Footer_SECTION_ID = "Footer-section";

export const emailLink = "mailto:Indian.express24@gmail.com";
export const phoneLink = "tel:02692 230796";

export const Footer: React.FC = () => {


  

  return (
    <FooterContainer id='Footer-section'>
      {/* <InnerContainer> */}
        {/* <TimingContainer>
          <FooterSection id="Footer-section">OPENING HOURS</FooterSection>
          {error && <p>{error}</p>}
          {timing.length > 0 ? (
            timing.map((entry, index) =>
              entry.fields && entry.fields.day && entry.fields.time ? (
                entry.fields.day.map((day: string, idx: number) => (
                  <TimingEntry key={idx}>
                    <Day>{day} :-</Day>
                    <Time>{entry.fields.time[idx]}</Time>
                  </TimingEntry>
                ))
              ) : (
                <p key={index}>Invalid data structure</p>
              )
            )
          ) : (
            <p>Loading...</p>
          )}
        </TimingContainer> */}

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
      {/* </InnerContainer> */}
    </FooterContainer>
  );
};
