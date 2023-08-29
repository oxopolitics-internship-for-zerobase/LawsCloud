import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {StyledWrap} from "../style/StyledBills";
import {useRecoilState} from "recoil";
import {billListState, pageState, excelFilterState} from "../state/StateBillList";
import BillsList from "../components/BillList/BillsList";
import SearchBar from "../components/BillList/SearchBar";
import PageNationSession from "../components/BillList/PageNationSession";
import RecentReplys from "../components/Reply/RecentReply";
import {useBillList} from "../hooks/useBillList";

const Bills = () => {
  const location = useLocation();
  if (!location.state) {
    location.state = {
      inputValue: "",
      age: 21,
    };
  }
  const [searchFilter, setSearchFilter] = useState(location.state.inputValue);
  const [category, setCategory] = useState(String(location.state.age));
  const [billList] = useRecoilState(billListState);
  const [page, setPage] = useRecoilState(pageState);
  const [excelFilter, setExcelFilter] = useRecoilState(excelFilterState);

  useBillList({searchFilter, category});
  return (
    <StyledWrap>
      <main>
        <SearchBar
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          category={category}
          setCategory={setCategory}
        />
        <BillsList billList={billList} excelFilter={excelFilter} setExcelFilter={setExcelFilter} setPage={setPage} />
      </main>
      <footer>
        <PageNationSession
          page={page}
          searchFilter={searchFilter}
          setPage={setPage}
          category={category}
          excelFilter={excelFilter}
        />
      </footer>
      <RecentReplys />
    </StyledWrap>
  );
};

export default Bills;
