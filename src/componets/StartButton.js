import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>StartButton</StyledStartButton>;
};

export default StartButton;
