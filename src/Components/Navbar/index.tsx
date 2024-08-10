import { StyledLink, ImgStyle, NavStyle } from "./style";
import Logo from "../../assets/Logo.jpg";
import { routes } from "../../routes";
import { Marquee } from "./Marquee";
import { animateScroll as scroll } from "react-scroll";
import { MENU_SECTION_ID } from "../../Pages/Home";
import { Footer_SECTION_ID } from "../Footer/index";

export const Navbar = () => {
  const handleMenuClick = () => {
    const menuSection = document.getElementById(MENU_SECTION_ID);
    if (menuSection) {
      const offset = menuSection.offsetTop;
      scroll.scrollTo(offset, {
        smooth: true,
        duration: 500,
      });
    }
  };
  const handleFooterClick = () => {
    const handleFooter = document.getElementById(Footer_SECTION_ID);
    if (handleFooter) {
      const offset = handleFooter.offsetTop;
      scroll.scrollTo(offset, {
        smooth: true,
        duration: 500,
      });
    }
  };
  return (
    <>
      <Marquee />
      <NavStyle className="navbar fixed-top">
        <StyledLink to={routes.home}>
          <ImgStyle src={Logo} alt="Logo" />
        </StyledLink>
        <StyledLink to={routes.home} className="item" onClick={handleMenuClick}>
          Menu
        </StyledLink>
        <StyledLink
          to={routes.home}
          className="item"
          onClick={handleFooterClick}
        >
          Timing
        </StyledLink>
        <StyledLink
          to={routes.home}
          className="item"
          onClick={handleFooterClick}
        >
          Contact Us
        </StyledLink>
        <StyledLink
          to={routes.home}
          className="item"
          onClick={handleFooterClick}
        >
          Location
        </StyledLink>
      </NavStyle>
    </>
  );
};
