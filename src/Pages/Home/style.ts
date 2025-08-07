import styled, { keyframes } from "styled-components";
import background from "../../assets/background.jpg";
import { devices } from "../../style";

export const lights = keyframes`
0% {
  color: #7e5959;
  text-shadow: 0 0 1em rgba(126, 89, 89, 0.2),
    0 0 0.125em rgba(126, 89, 89, 0.3),
    -1em -0.125em 0.5em rgba(255, 0, 0, 0),
    1em 0.125em 0.5em rgba(255, 255, 255, 0);
}

30% {
  color: #7e5959;
  text-shadow: 0 0 1em rgba(126, 89, 89, 0.5),
    0 0 0.125em rgba(126, 89, 89, 0.5),
    -0.5em -0.125em 0.25em rgba(255, 0, 0, 0.2),
    0.5em 0.125em 0.25em rgba(255, 255, 255, 0.4);
}

40% {
  color: #7e5959;
  text-shadow: 0 0 1em rgba(126, 89, 89, 0.5),
    0 0 0.125em rgba(126, 89, 89, 0.5),
    -0.25em -0.125em 0.125em rgba(255, 0, 0, 0.2),
    0.25em 0.125em 0.125em rgba(255, 255, 255, 0.4);
}

70% {
  color: #7e5959;
  text-shadow: 0 0 1em rgba(126, 89, 89, 0.5),
    0 0 0.125em rgba(126, 89, 89, 0.5),
    0.5em -0.125em 0.25em rgba(255, 0, 0, 0.2),
    -0.5em 0.125em 0.25em rgba(255, 255, 255, 0.4);
}

100% {
  color: #7e5959;
  text-shadow: 0 0 1em rgba(126, 89, 89, 0.2),
    0 0 0.125em rgba(126, 89, 89, 0.3),
    1em -0.125em 0.5em rgba(255, 0, 0, 0),
    -1em 0.125em 0.5em rgba(255, 255, 255, 0);
}
`;

export const lights1 = keyframes`
0% {
  color: #8b6c6c;
  text-shadow: 0 0 1em rgba(139, 108, 108, 0.2),
    0 0 0.125em rgba(139, 108, 108, 0.3),
    -1em -0.125em 0.5em rgba(255, 0, 0, 0),
    1em 0.125em 0.5em rgba(255, 255, 255, 0);
}

30% {
  color: #8b6c6c;
  text-shadow: 0 0 1em rgba(139, 108, 108, 0.5),
    0 0 0.125em rgba(139, 108, 108, 0.5),
    -0.5em -0.125em 0.25em rgba(255, 0, 0, 0.2),
    0.5em 0.125em 0.25em rgba(255, 255, 255, 0.4);
}

40% {
  color: #8b6c6c;
  text-shadow: 0 0 1em rgba(139, 108, 108, 0.5),
    0 0 0.125em rgba(139, 108, 108, 0.5),
    -0.25em -0.125em 0.125em rgba(255, 0, 0, 0.2),
    0.25em 0.125em 0.125em rgba(255, 255, 255, 0.4);
}

70% {
  color: #8b6c6c;
  text-shadow: 0 0 1em rgba(139, 108, 108, 0.5),
    0 0 0.125em rgba(139, 108, 108, 0.5),
    0.5em -0.125em 0.25em rgba(255, 0, 0, 0.2),
    -0.5em 0.125em 0.25em rgba(255, 255, 255, 0.4);
}

100% {
  color: #8b6c6c;
  text-shadow: 0 0 1em rgba(139, 108, 108, 0.2),
    0 0 0.125em rgba(139, 108, 108, 0.3),
    1em -0.125em 0.5em rgba(255, 0, 0, 0),
    -1em 0.125em 0.5em rgba(255, 255, 255, 0);
}
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const BackgroundWrapper = styled.div`
  background-image: url(${background});
  background-image: repeat;
`;

export const HeadingStyle = styled.p`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;
  animation: ${lights} 5s 750ms linear infinite;
  cursor: default;

  @media (${devices.mobileES}) {
    margin-top: 80px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: 80px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: 80px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileL}) {
    margin-top: 80px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 30px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: 80px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 180px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 217px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.desktop}) {
    margin-top: 217px;
    font-weight: 700 !important;
    font-size: 4em !important;
    letter-spacing: 4.5px !important;
    line-height: 40px !important;
    margin-bottom: 10px;
  }
`;

export const ImageTitle = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;

  @media (${devices.mobileES}) {
    width: 60%;
    margin-bottom: 15px;
  }

  @media (${devices.mobileS}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileM}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileL}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.tablet}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptop}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptopL}) {
    margin-bottom: 30px;
    width: 35%;
  }

  @media (${devices.desktop}) {
    width: 20%;
    margin-bottom: 30px;
  }
`;

export const TextStyle = styled.p`
  color: #8b6c6c;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  cursor: default;

  @media (${devices.mobileES}) {
    font-weight: 50 !important;
    font-size: 0.5 !important;
    line-height: 1px !important;
    letter-spacing: 1px !important;
    margin-bottom: 20px;
  }

  @media (${devices.mobileS}) {
    font-weight: 150 !important;
    font-size: 0.5 !important;
    line-height: 10px !important;
    letter-spacing: 1px !important;
    margin-bottom: 20px;
  }

  @media (${devices.mobileM}) {
    font-weight: 500 !important;
    font-size: 10 !important;
    line-height: 1px !important;
    letter-spacing: 1px !important;
    margin-bottom: 20px;
  }

  @media (${devices.laptop}) {
    font-weight: 500 !important;
    font-size: 10 !important;
    line-height: 1px !important;
    letter-spacing: 3px !important;
    margin-bottom: 20px;
  }
`;

export const TextStyle1 = styled.p`
  color: #8b6c6c;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  cursor: default;

  @media (${devices.mobileES}) {
    font-weight: 50 !important;
    font-size: 0.5 !important;
    line-height: 20px !important;
    letter-spacing: 1px !important;
    margin-bottom: 20px;
  }

  @media (${devices.mobileS}) {
    font-weight: 150 !important;
    font-size: 0.5 !important;
    line-height: 20px !important;
    letter-spacing: 1px !important;
    margin-bottom: 20px;
  }

  @media (${devices.mobileM}) {
    font-weight: 500 !important;
    font-size: 10 !important;
    line-height: 20px !important;
    letter-spacing: 1px !important;
    margin-bottom: 20px;
  }

  @media (${devices.laptop}) {
  display:none;
  }
`;
