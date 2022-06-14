import styled from "styled-components";

import theme from "../../styles/theme";

export const Wrapper = styled.section`
  max-width: 350px;
  padding: 1rem;
  color: ${theme.colors.white};
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
`;
