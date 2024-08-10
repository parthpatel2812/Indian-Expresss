import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  InnerContainer,
  FooterLinks,
  ContactDetails,
  ContactInfo,
  ContactLabel,
  TimingEntry,
  TimingContainer,
  Time,
  FooterSection,
  Day,
} from "./style";
import { client } from "../../contentful/client";
import { GoogleMapComponent } from "./Map";

export const Footer_SECTION_ID = "Footer-section";

export const emailLink = "mailto:Indian.express24@gmail.com";
export const phoneLink = "tel:02692 230796";

export const Footer: React.FC = () => {
  const [timing, setTiming] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timingEntries = await client.getEntries({
          content_type: "timing",
        });
        console.log(timingEntries);
        setTiming(timingEntries.items);
      } catch (err) {
        setError("Failed to fetch timing data from Contentful");
        console.error("Error fetching timing:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <FooterContainer>
      <InnerContainer>
        {/* <TimingContainer>
          <p id="Footer-section">OPENING HOURS</p>
          {error && <p>{error}</p>}
          {timing.length > 0 ? (
            timing.map((entry: any, index: number) =>
              entry.fields && entry.fields.day && entry.fields.time ? (
                entry.fields.day.map((day: string, idx: number) => (
                  <TimingEntry key={idx}>
                    <strong>{day} :-</strong>
                    {entry.fields.time[idx]}
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
        <TimingContainer>
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
        </TimingContainer>

        <GoogleMapComponent />

        <FooterLinks>
          <ContactDetails>
            <ContactLabel>Phone:</ContactLabel>
            <ContactInfo href={phoneLink}>+1(510) 565-8587</ContactInfo>
            <br />
            <ContactLabel>Email:</ContactLabel>
            <ContactInfo href={emailLink}>
              Indian.express24@gmail.com
            </ContactInfo>
          </ContactDetails>
        </FooterLinks>
      </InnerContainer>
    </FooterContainer>
  );
};
