import { useEffect, useRef, useState } from "react";
import {
  HeadingStyle,
  ImgStyle,
  LogoWrapper,
  NavStyle,
  PageWrapper,
  SidebarStyle,
  ToggleButton,
} from "./style";

import logoUrl from "../../assets/Logo.jpg";
import { routes } from "../../routes";
import { StyledLink } from "./style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsDonationOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !(ref.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleScrollToFooter = () => {
    navigate(routes.home);
    handleClose();
    setTimeout(() => {
      const footerElement = document.getElementById("Footer-section");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleScrollToMenu = () => {
    navigate(routes.home);
    handleClose();
    setTimeout(() => {
      const footerElement = document.getElementById("menu-section");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={ref}>
      <Navbar />
      <NavStyle>
        <PageWrapper>
          <LogoWrapper>
            <StyledLink to={routes.home} onClick={handleScrollToMenu}>
              <ImgStyle src={logoUrl} alt="Logo" />
            </StyledLink>
            <HeadingStyle>INDIAN EXPRESSS LLC</HeadingStyle>
          </LogoWrapper>
          <ToggleButton onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleButton>
        </PageWrapper>
        <SidebarStyle isOpen={isOpen}>
          <nav>
            <StyledLink to={routes.home} onClick={handleScrollToMenu}>
              Food Truck
            </StyledLink>
            <hr />
            <StyledLink to="#" onClick={handleScrollToFooter}>
              Timing
            </StyledLink>
            <hr />
            <StyledLink to={routes.home} onClick={handleScrollToFooter}>
              Location
            </StyledLink>
            <hr />

            <StyledLink to={routes.home} onClick={handleScrollToMenu}>
              Menu
            </StyledLink>
            <hr />

            <StyledLink to={routes.home} onClick={handleScrollToFooter}>
              Contact Us
            </StyledLink>
          </nav>
        </SidebarStyle>
      </NavStyle>
    </div>
  );
};
