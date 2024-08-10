import styled from "styled-components";
import Footerbg from "../../assets/card-background.jpg";

export const FooterContainer = styled.footer`
  background-image: url(${Footerbg});
  color: #fff;
  padding: 20px;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e5bcbc;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterLinks = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 0;
    flex-direction: row;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ContactDetails = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const ContactInfo = styled.a`
  margin-bottom: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #800000;
  }
`;

export const ContactLabel = styled.span`
  font-weight: bold;
  float: left;
  margin-right: 10px;
`;

export const ContactLink = styled.a`
  color: #e5bcbc;
  text-decoration: none;

  &:hover {
    color: #800000;
  }
`;

export const TimingEntry = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: #e5bcbc;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TimingContainer = styled.div`
  width: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;

  @media (min-width: 320px) {
    width: 50%;
    height: 250px; // Adjust height for larger screens
  }

  @media (min-width: 425px) {
    width: 50%;
    height: 250px; // Adjust height for larger screens
  }

  @media (min-width: 768px) {
    width: 30%;
    height: 250px; // Adjust height for larger screens
  }

  @media (min-width: 1024px) {
    height: 300px; // Adjust height for even larger screens
    width: 50%;
  }
`;

export const FooterSection = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Day = styled.strong`
  // color: #ff6347; /* Replace with your desired color for the day */
`;

export const Time = styled.span`
  color: #fff; /* White color for the time */
`;
