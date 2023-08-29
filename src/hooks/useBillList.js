import {useEffect} from "react";
import {useSetRecoilState, useRecoilValue} from "recoil";
import {billListState, pageState, excelFilterState} from "../recoil/store";
import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

export const useBillList = ({searchFilter, category}) => {
  const setBillListUseSet = useSetRecoilState(billListState);
  const pageValue = useRecoilValue(pageState);
  const excelFilterValue = useRecoilValue(excelFilterState);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${BaseURL}AGE=${category}&Type=json&pIndex=${pageValue}&pSize=7&BILL_NAME=${searchFilter}&COMMITTEE=${
        excelFilterValue === "전체" ? "" : excelFilterValue
      }`,
    })
      .then((res) => setBillListUseSet(res.data.nzmimeepazxkubdpn[1].row))
      .catch(() => alert(`검색 결과가 없습니다.`));
  }, [searchFilter, pageValue, excelFilterValue, category]);
};
