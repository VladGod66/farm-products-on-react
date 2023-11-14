import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  font-face {
  font-family: "Inter";
  font-weight: 400;
  font-style: normal;
  src: url("../../fonts/Inter-Regular.woff2") format("woff2"),
    url("../../fonts/Inter-Regular.woff") format("woff");
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  font-style: bold;
  src: url("../../fonts/Inter-Bold.woff2") format("woff2"),
    url("../../fonts/Inter-Bold.woff") format("woff");
  font-display: swap;
}

html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #333333;
}
`;
