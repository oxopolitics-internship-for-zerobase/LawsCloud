import React from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {pageState} from "../state/StateBillList";
import styled from "styled-components";

const Title = () => {
  const setPageStateUseSet = useSetRecoilState(pageState);
  const navigate = useNavigate();
  return (
    <Header>
      <h1
        onClick={() => {
          setPageStateUseSet(1);
          navigate("/main");
        }}
        style={{cursor: "pointer"}}>
        Laws Cloud
      </h1>
      <img
        onClick={() =>
          navigate("/bills", {
            state: {
              inputValue: "",
              age: 21,
            },
          })
        }
        src="/icons/searchIcon.svg"
        alt="검색"
        style={{cursor: "pointer"}}
      />
    </Header>
  );
};

export default Title;

const Header = styled.header`
  min-width: 320px;
  display: flex;
  height: 70px;
  position: relative;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-weight: 800;
  }

  img {
    position: absolute;
    margin-left: min(calc(200px + 25vw), 500px);
    height: 25px;
  }
`;
