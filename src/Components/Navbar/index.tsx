import { StyledLink, ImgStyle, NavStyle, Timing } from "./style";
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
      <Timing href="https://www.bing.com/search?q=%2bThe+Indian+Expresss+Food+Truck&filters=rcrse%3a%221%22&FORM=RCRE#:~:text=Closed%20%C2%B7-,Opens%20Mar%205%20at%206%20pm,-Walk%2Din%20%C2%B7">
      Timing
      </Timing>
      <Timing href="https://repasorder.com/app/home/44c4f30a-6992-9ad5-75f4-2ac8358e10da">
      Online Order
      </Timing>
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
