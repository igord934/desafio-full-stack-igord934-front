import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  div,
  ul {
    width: 90%;
    padding: 16px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: 1200px;
    box-sizing: border-box;
    display: flex;
  }
  ul {
    background-color: var(--grey-3);
    padding: 22px 19px;
    box-sizing: border-box;
    border-radius: 4px;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 12px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: var(--grey-4);
      cursor: pointer;
      transition: 0.6s;
      &:hover {
        background-color: var(--grey-2);
      }
      span {
        color: var(--grey-1);
      }
    }
  }
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
`;
