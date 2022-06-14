import styled from "styled-components";

import theme from "../src/styles/theme";

export const App = styled.section`
  text-align: center;
  display: flex;
  position: relative;
  min-height: 100vh;
  color: ${theme.colors.white};
  background-color: ${theme.colors.background};
`;
