import styled from "styled-components";
import aboutImage from "/src/assets/about.png";

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  padding-left: 90px;
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: #d8ecfe;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: 18px;
    right: 90px;
    display: block;
    content: "";
    width: 446px;
    height: 550px;
    margin: auto;
    background: url(${aboutImage});
  }
`;

export const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const StyledP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 20px;
  padding-right: 190px;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 27px;
`;
