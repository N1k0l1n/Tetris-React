import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;

  @media (max-width: 768px) {
    /* Adjust the grid layout for smaller screens */
    grid-template-rows: repeat(
      ${props => props.height},
      calc(50vw / ${props => props.width})
    );
    max-width: 50vw;
  }

  @media (max-width: 480px) {
    /* Further adjustments for smaller screens */
    grid-template-rows: repeat(
      ${props => props.height},
      calc(75vw / ${props => props.width})
    );
    max-width: 75vw;
  }
`;
