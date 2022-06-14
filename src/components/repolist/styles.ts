import styled from "styled-components";

import theme from "../../styles/theme";

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  padding: 1rem;
  color: ${theme.colors.white};
  text-align: center;
  width: 100%;
  flex-direction: column;
`;

export const RepoGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

export const Repo = styled.li`
  list-style: none;
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`;
