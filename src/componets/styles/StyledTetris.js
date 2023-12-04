import styled from "styled-components";
import bgImage from "../../assets/img/bg2.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    aside {
      max-width: none;
      width: 100%;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 80%;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
