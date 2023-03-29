import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  background-color: var(--grey-4);
`;

export const Form = styled.form`
  background-color: var(--grey-3);
  width: 90%;
  max-width: 369px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 16px;
  box-sizing: border-box;
  gap: 22px;
  border-radius: 4px;
  h2 {
    color: var(--grey-0);
  }
  label {
    width: 100%;
    font-size: 0.75rem;
    color: var(--grey-0);
    p {
      color: var(--negative);
      padding-top: 2px;
    }
  }
  .containerForm {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 12px;
    input {
      outline: none;
      border-style: none;
      width: 100%;
      padding: 12px 16px;
      padding-right: 48px;
      box-sizing: border-box;
      background-color: var(--grey-2);
      border: 1px solid transparent;
      border-radius: 2px;
      color: var(--grey-0);
    }
    input:focus {
      border-color: var(--grey-0);
    }
    svg {
      position: absolute;
      right: 16px;
      color: var(--grey-1);
    }
  }
  button,
  a {
    width: 100%;
  }
  .toRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    width: 100%;
    span {
      color: var(--grey-1);
    }
  }
`;
