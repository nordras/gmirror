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

export const Search = styled.form`
  margin: 0.6rem 0 1rem 0;
  input {
    padding: 0.2rem;
  }
  button {
    position: relative;
    color: ${theme.colors.white};
    background-color: transparent;
    background-image: none;
    border: 1px solid ${theme.colors.white};
    padding: 0.2rem;
    &:hover {
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.white};
    }
    &:before {
      content: "";
      position: absolute;
      right: 16px;
      top: 50%;
      margin-top: -0.5rem;
      color: ${theme.colors.white};
      width: 0.75rem;
      height: 0.75rem;
      border: 2px solid;
      border-left-color: transparent;
      border-right-color: transparent;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.5s;
      animation: 0.8s linear infinite rotate;
    }

    &.sending {
      pointer-events: none;
      cursor: not-allowed;
      color: transparent;
      &:before {
        transition-delay: 0.5s;
        transition-duration: 1s;
        opacity: 1;
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
