import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iPropsButton {
  typeName?: string;
}

export const Button = styled.button`
  border-style: none;
  font-size: 0.875rem;
  border-radius: 4px;
  padding: 11px 22px;
  color: var(--text-color);
  cursor: pointer;
  transition: 0.5s;

  ${(props: iPropsButton) => {
    if (props.typeName == "primary") {
      return css`
        background-color: var(--primary);
        &:hover {
          background-color: var(--primary-focus);
        }
      `;
    } else if (props.typeName == "negative") {
      return css`
        background-color: var(--primary-negative);
      `;
    } else if (props.typeName == "grey") {
      return css`
        background-color: var(--grey-1);
        &:hover {
          background-color: var(--grey-2);
        }
      `;
    } else if (props.typeName == "darkGrey") {
      return css`
        background-color: var(--grey-3);
        &:hover {
          background-color: var(--grey-2);
        }
      `;
    }
  }}
`;

export const LinkButton = styled(Link)`
  text-align: center;
  font-size: 0.875rem;
  box-sizing: border-box;
  text-decoration: none;
  border-style: none;
  border-radius: 4px;
  padding: 11px 22px;
  color: var(--text-color);
  cursor: pointer;
  transition: 0.3s;
  background-color: var(--grey-1);
  &:hover {
    background-color: var(--grey-2);
  }
`;

export const AddButton = styled.button`
  text-align: center;
  font-size: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  border-style: none;
  border-radius: 4px;
  height: 32px;
  width: 32px;
  color: var(--text-color);
  cursor: pointer;
  transition: 0.5s;

  background-color: var(--grey-3);
  &:hover {
    background-color: var(--grey-2);
  }
`;
