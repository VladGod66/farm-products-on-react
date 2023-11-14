import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledH = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 41px;
  font-size: ${(props) => {
    let fontSize = "18px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "45px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    if (props.$size === TitleSize.MINI) {
      fontSize = "18px";
    }
    return fontSize;
  }};
`;
