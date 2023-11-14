import styled from "styled-components";

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 72px 292px;
  grid-template-rows: 25px 27px;
`;

export const StyledP = styled.p`
  margin: 0;
  padding-top: 20px;
`;

export const StyledImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/3;
`;

export const StyledSpan = styled.span`
  width: 150px;
  padding: 0 10px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background-color: ${(feature) => {
    let backgroundColor;
    if (feature.type === "farmer") {
      backgroundColor = "#88aa4d";
    }
    if (feature.type === "store") {
      backgroundColor = "#f75531";
    }
    return backgroundColor;
  }};
`;

export const StyledArticle = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(feature) => {
    let backgroundColor;
    if (feature.type === "farmer") {
      backgroundColor = "#e1edce";
    }
    if (feature.type === "store") {
      backgroundColor = "#f8ddd7";
    }
    return backgroundColor;
  }};
  box-sizing: border-box;
`;
