import styled, { css } from "styled-components";

interface iPropsTypograph {
  typeName?: string;
}

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: bold;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  ${(props: iPropsTypograph) => {
    if (props.typeName === "big") {
      return css`
        font-size: 1.125rem;
        font-weight: 700;
      `;
    } else if (props.typeName === "small") {
      return css`
        font-size: 0.875rem;
        font-weight: 700;
      `;
    }
  }}
`;

export const Headline = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  ${(props: iPropsTypograph) => {
    if (props.typeName === "bold") {
      return css`
        font-weight: 600;
      `;
    } else if (props.typeName === "italic") {
      return css`
        font-style: italic;
      `;
    }
  }}
`;
