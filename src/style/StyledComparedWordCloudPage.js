import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 700px;
  margin: 0 auto;
  .wordcloud-back {
    box-sizing: border-box;
    margin: 45px 30px;
    padding: 15px 5px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25), inset 12px 12px 20px rgba(255, 255, 255, 0.25);
    border: 1px solid #e6e6e6;
    border-radius: 15px;
    .wordcloud {
      box-sizing: content-box;
    }
  }
`;

export const ComparedWordCloud = styled.section`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  padding: 50px 10px;
  margin: 0 auto;
`;

export const PlusBtn = styled.button`
  display: flex;
  margin: 0px auto;
  width: 110px;
  height: 36px;

  background: #000000;
  border-radius: 18px;
  border-style: none;

  font-weight: 600;
  font-size: 16px;
  color: #ffffff;

  align-items: center;
  justify-content: center;
  text-align: center;
  :hover {
    background-color: #223131;
    transition: background-color 0.24s;
  }
`;
