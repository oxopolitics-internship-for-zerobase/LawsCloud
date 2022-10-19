import styled from "styled-components";

export const Replys = styled.section`
  box-sizing: border-box;
  width: min(100%, 836px);
  height: 1099px;

  margin: auto;
  margin-bottom: 10px;

  border: 2px solid #333333;
  border-radius: 10px;

  overflow: scroll;
`;

export const RecentReply = styled.div`
  border-bottom: 1px solid #c6c6c6;
`;

export const BillNameArea = styled.div`
  box-sizing: border-box;

  width: calc(100% - 38px);
  height: 70px;

  display: flex;
  flex-direction: column;

  margin: auto;

  padding-top: 27px;
  padding-bottom: 13px;
`;

export const BillName = styled.p`
  font-size: 22px;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;
export const Info = styled.div`
  font-size: 13px;

  color: #888080;
  span {
    padding-left: 2px;
    padding-right: 10px;
  }
`;

export const ReplyArea = styled.div`
  width: calc(100% - 40px);

  display: flex;

  margin: auto;

  justify-content: space-between;

  padding-bottom: 27px;
`;

export const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 51px;

  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  padding-left: 19px;

  font-size: 24px;
  font-weight: 700;

  z-index: 10;
  background-color: #000;
  color: #fff;

  border-bottom: 2px solid #000000;
`;

export const Reply = styled.p`
  box-sizing: border-box;

  margin-left: 15px;

  font-weight: 500;
  font-size: 20px;
  line-height: 25px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    margin-left: 15px;
  }
`;