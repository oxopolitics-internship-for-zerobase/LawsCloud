import React, {useState} from "react";
import {useSetRecoilState} from "recoil";
import {pageState} from "../../recoil/store";

import searchImg from "../../assests/images/search-icon.svg";

import {StyledSearchArea} from "../../style/StyledSearchBar";
const congressman_nums = [16, 17, 18, 19, 20, 21];

const SearchBar = ({searchFilter, setSearchFilter, setCategory, category}) => {
  const [searchValue, setSerchValue] = useState(searchFilter);
  const setPage = useSetRecoilState(pageState);

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      setSearchFilter(searchValue);
    }
  };
  return (
    <>
      <StyledSearchArea>
        <select
          value={category}
          onChange={(e) => {
            setPage(1);
            setCategory(e.target.value);
          }}>
          {congressman_nums.map((val) => (
            <option key={val} value={val}>
              {val}대{" "}
            </option>
          ))}
        </select>
        <input
          placeholder="의안명 검색"
          value={searchValue}
          onChange={(e) => setSerchValue(e.target.value)}
          onKeyPress={onCheckEnter}
        />
        <button
          onClick={() => {
            setSearchFilter(searchValue);
            setPage(1);
          }}>
          <img src={searchImg} alt="검색 이미지" />
        </button>
      </StyledSearchArea>
    </>
  );
};

export default SearchBar;
