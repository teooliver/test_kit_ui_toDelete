import React from "react";
import styled from "styled-components";
import CounterControls from "../components/CounterControls";
import CounterInfo from "../components/CounterInfo";
import Button from "../components/Button/Button";
import FormQuestion from "../components/FormQuestion/FormQuestion";
import SquareCard from "../components/SquareCard/SquareCard";
import RadioOptions from "../components/RadioOptions";
import Tiles from "../components/Tiles";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <>
    <Title>My page</Title>
    <CounterControls />
    <CounterInfo />
    <Button
      className="btn btn--medium btn--primary--solid"
      onClick={() => {
        console.log("You clicked on me!");
      }}
    >
      Click Me
    </Button>
    <Button className="btn btn--medium btn--primary--outline">Click Me</Button>
    <FormQuestion
      questionsArray={["Question 1", "Question 2", "Question 3", "Question 4"]}
    />
    <SquareCard title="House" />

    <hr />

    <RadioOptions radioOptsArray={[1, 2, 3, 4]} />

    <br />
    <hr />

    <Tiles imgSrc="/house-vector-style.svg" />
  </>
);
