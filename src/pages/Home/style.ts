import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
  background-color: var(--grey-4);
  color: var(--grey-0);
  box-sizing: border-box;
  .header {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
  }
  .infos {
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 90%;
      padding: 35px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 1200px;
      box-sizing: border-box;
      h2 {
        color: var(--grey-0);
      }
      span {
        color: var(--grey-1);
      }
      @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  .kontatos {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
