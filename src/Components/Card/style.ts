import styled, { keyframes } from "styled-components";
import Cardbackground from "../../assets/image.jpeg";

export const CardContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
  color: white;
  border-radius: 10px;
  padding: 20px;
  cursor: default;
  line-height: 2.5;
  font-size: 18px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${Cardbackground});
    opacity: 0.9; /* Adjust the opacity of the background image here */
    z-index: -1;
    border-radius: 10px;
  }
`;

export const lights = keyframes`
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  30% {
    color: hsl(230, 80%, 90%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  40% {
    color: hsl(230, 100%, 95%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  70% {
    color: hsl(230, 80%, 90%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(230, 40%, 80%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
}`;

export const CardTitle = styled.h1`
  text-align: center;
  animation: ${lights} 5s 750ms linear infinite;
`;

export const ItemName = styled.span`
  flex: 1;
  color: #e5d4e0db;
  font-weight: 700 !important;
  // z-index: 9;
`;

export const ItemPrice = styled.span`
  margin-left: 20px; /* Optional: Add left margin for spacing */
  color: #e5d4e0db;
  font-weight: 700 !important;
`;

export const CardText = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute items evenly with space between */
  align-items: center; /* Align items vertically in the center */
`;
