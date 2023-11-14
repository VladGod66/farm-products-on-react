import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  padding-right: 90px;
  padding-left: 90px;
  padding-top: 90px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 55px;
  margin-left: -20px;
  text-align: center;
`;

export const StyledLi = styled.li`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
`;
