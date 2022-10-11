import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BillDetailArea = styled.div`
  width: 85%;

  padding-left: 10px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
  .detail {
    border: none;
  }
`;

function BillsDetail({ billId }) {
  const url = `https://likms.assembly.go.kr/bill/summaryPopup.do?billId=${billId}`;
  return (
    <BillDetailArea>
      <iframe className="detail" src={url} title="발의안" width="580px" height="456px" scrolling="yes" />
    </BillDetailArea>
  );
}

BillsDetail.propTypes = {
  billId: PropTypes.string.isRequired,
};

export default BillsDetail;
