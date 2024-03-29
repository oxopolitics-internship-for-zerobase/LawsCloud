import styled from "styled-components";

export const StyledSearchArea = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  width: max(50vw, 320px);
  max-width: 700px;
  box-sizing: border-box;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  background-color: white;
  margin-top: min(2vh, 20px);
  margin-bottom: 10px;
  input {
    box-sizing: border-box;
    height: 40px;
    width: max(45vw, 350px);
    color: #000000;
    font-size: min(calc(10px + 1vw), 16px);
    font-weight: 500;
    border: 0;
    border-radius: 2px;
    padding: 5px;
    margin-left: 10px;
    outline: 0 none;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    &::placeholder {
      color: #c6c6c6;
    }
  }

  select {
    width: max(5vw, 50px);
    height: 40px;
    margin-left: 20px;
    font-size: min(calc(10px + 0.7vw), 14px);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    background-size: 20px;
    border: 0;
    outline: 0 none;
  }
  button {
    height: 40px;
    margin-right: 8px;
    margin-top: 2px;
    border: 0;
    background: none;
  }
  img {
    height: 18px;
    cursor: pointer;
  }
`;
