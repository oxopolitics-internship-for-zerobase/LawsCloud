import React from "react";

import {StyledToggleButton, StyledCommitteeList} from "../../style/StyledExcelFilterList";

const committeeArray = [
  "전체",
  "국회운영위원회",
  "법제사법위원회",
  "정무위원회",
  "기획재정위원회",
  "교육위원회",
  "과학기술정보방송통신위원회",
  "외교통일위원회",
  "국방위원회",
  "행정안전위원회",
  "문화체육관광위원회",
  "농림축산심품해양수산위원회",
  "산업통상자원중소벤처기업위원회",
  "보건복지위원회",
  "환경노동위원회",
  "국토교통위원회",
  "정보위원회",
  "여성가족위원회",
];

const ExcelFilterList = ({toggle, toggleHandler}) => {
  return (
    <>
      <StyledToggleButton>▼</StyledToggleButton>
      <StyledCommitteeList toggle={toggle}>
        {committeeArray.map((item, idx) => (
          <li key={idx}>
            <button
              onClick={(e) => {
                toggleHandler(e);
              }}>
              {item}
            </button>
          </li>
        ))}
      </StyledCommitteeList>
    </>
  );
};
export default ExcelFilterList;
