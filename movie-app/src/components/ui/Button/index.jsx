import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  color:#141414;
  border:none;
  background: rgb(238, 174, 202); /* Solid color fallback */
  background: linear-gradient(
    11deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  ); /* Gradient for most browsers */

  cursor: pointer;
  transition: all 200ms;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

  ${({ size, theme }) => theme.sizes[size] || theme.sizes["md"]};

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
