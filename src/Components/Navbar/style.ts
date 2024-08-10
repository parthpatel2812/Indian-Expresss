import { devices } from "../../style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import title from "../../assets/title.jpg";

export const StyledLink = styled(Link)`
  color: #c7e5d7;
  text-decoration: none;
  font-family: Overlock-Regular, Arial, Helvetica, sans-serif;
  display: flex;
  margin: 10px;
  justify-content: space-around;
  &:hover {
    color: #ad0d0d;
  }
`;

export const ImgStyle = styled.img`
  height: 70px;
  margin: auto;
  border-radius: 8px;

  @media (${devices.mobileES}) {
    height: 10px;
  }

  @media (${devices.mobileS}) {
    display: none;
  }

  @media (${devices.mobileM}) {
    display: none;
  }

  @media (${devices.mobileL}) {
    display: none;
  }

  @media (${devices.tablet}) {
    display: flex;
    height: 70px;
  }

  @media (${devices.laptop}) {
    height: 80px;
  }

  @media (${devices.laptopL}) {
    height: 80px;
  }

  @media (${devices.desktop}) {
    display: flex;
    height: 100px;
  }
`;

export const NavStyle = styled.nav`
  background-image: url(${title});
  filter: drop-shadow(8px 8px 10px #fff);
  color: #8b6c6c;
  position: fixed;
  z-index: 999;

  @media (${devices.mobileES}) {
    display: none;
  }

  @media (${devices.mobileS}) {
    display: none;
  }

  @media (${devices.mobileM}) {
    display: none;
  }

  @media (${devices.mobileL}) {
    display: none;
  }

  @media (${devices.tablet}) {
    display: none;
  }

  @media (${devices.laptop}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 200 !important;
    font-size: 1.2em !important;
    letter-spacing: 1px !important;
    align-items: center;
    height: 90px;
    padding: 0 0px;
    margin-top: -126px;
  }

  @media (${devices.laptopL}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 0px;
    margin-top: -163px;
  }

  @media (${devices.desktop}) {
    height: 105px !important;
    width: 150% !important;
    margin-top: -163px;
  }
`;

export const MarqueeWrapper = styled(Marquee)`
  color: #c7e5d7;
  background-color: #8484c2;
  font-family: Overlock-Regular, cursive, sans-serif;
  height: 75px;
  width: 85%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  visibility: hidden;

  // @media (${devices.mobileES}) {
  //   display: none;
  //   height: 0%;
  //   width: 0%;
  // }

  // @media (${devices.mobileS}) {
  //   display: none;
  //   height: 0%;
  //   width: 0%;
  // }

  // @media (${devices.mobileM}) {
  //   display: none;
  //   height: 0%;
  //   width: 0%;
  // }

  // @media (${devices.mobileL}) {
  //   display: none;
  //   height: 0%;
  //   width: 0%;
  // }

  // @media (${devices.tablet}) {
  //   display: none;
  //   height: 0%;
  //   width: 0%;
  // }

  @media (${devices.laptop}) {
    height: 55px;
    width: 100%;
    position: fixed;
    visibility: visible;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  @media (${devices.laptopL}) {
    height: 55px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  @media (${devices.desktop}) {
    height: 55px;
    width: 85%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
`;
