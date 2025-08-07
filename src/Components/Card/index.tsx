import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  CardContainer,
  CardText,
  CardTitle,
  ItemName,
  ItemPrice,
} from "./style";

interface CardProps {
  categoryData: {
    title: string;
    dishName: string[];
    amount: number[];
  };
}

export const Card: React.FC<CardProps> = ({ categoryData }) => {
  const { title, dishName, amount } = categoryData;
  const [show, setShow] = useState(false);

  // const fadeAnimation = useSpring({
  //   opacity: show ? 1 : 0,
  //   from: { opacity: 0 },
  //   config: { duration: 500 },
  // });

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    // <animated.div style={fadeAnimation}>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        {dishName.map((name, index) => (
          <CardText key={index}>
            <ItemName>{name}</ItemName>
            <ItemPrice>{amount[index]}</ItemPrice>
          </CardText>
        ))}
      </CardContainer>
    // </animated.div>
  );
};
