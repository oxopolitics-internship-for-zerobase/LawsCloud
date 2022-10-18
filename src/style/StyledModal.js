import styled from "styled-components";

export const ViewArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ToggleArea = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: 20px;

  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;

  color: #969696;
  font-size: 16px;

  .arrow {
    display: inline-block;
    width: 10px;
    height: 10px;

    margin-left: 5px;

    transform: rotate(135deg);

    border-top: 1px solid #969696;
    border-left: 1px solid #969696;
  }

  span.view-and-like {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;

    right: 30px;
  }
`;

export const ModalView = styled.div`
  box-sizing: border-box;

  width: min(100%, 1200px);
  height: 700px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;

  overflow: scroll;

  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 3px 20px rgba(0, 0, 0, 0.2);
`;

export const Blur = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  z-index: 999;

  background-color: #969696;
  opacity: 0.67;
`;

export const Container = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  box-sizing: border-box;

  width: min(100%, 1200px);

  margin: auto;

  border: none;

  /* border: solid;
  border-width: 1px 0 0 1px;
  border-color: #c6c6c6; */
`;

export const BillProcResultArea = styled.div`
  display: flex;
  flex: 1;
  z-index: 10;
`;

export const BillInformationArea = styled.div`
  display: flex;
  background-color: #fff;
  z-index: 10;
`;

export const BillProc = styled.div`
  z-index: 10;
  width: 40%;

  display: flex;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #c6c6c6;
  background-color: #fff;
  z-index: 10;
`;

export const BillNameArea = styled.div`
  display: flex;
`;

export const BillName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  padding-left: 14px;

  border: solid;
  border-width: 0 0 1px 0;
  border-color: #c6c6c6;
`;

export const Title = styled.div`
  width: 168px;
  height: 64px;

  display: flex;
  align-items: center;

  padding-left: 41px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  background-color: #e6e6e6;
  color: #000000;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #c6c6c6;
`;

export const InfoArea = styled.div`
  display: flex;

  width: 40%;
`;

export const BillInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #c6c6c6;
  background-color: #fff;

  z-index: 10;
`;

export const BillCommittee = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 0 1px 0;
  border-color: #c6c6c6;
`;

export const BorderLine = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 0px;
  left: 1px;
  top: 45px;

  /* border: 3px solid #000000; */
  border: none;
`;
export const BillDetailArea = styled.div`
  box-sizing: border-box;
  /* margin: 20px 0; */
  height: 460px;

  transform: translateY(-50px);

  display: flex;
  flex: 1;

  border: solid;
  border-width: 0 0 1px 0;
  border-color: #c6c6c6;

  z-index: 1;
  .detail {
    border: none;
  }
`;

export default ViewArea;
