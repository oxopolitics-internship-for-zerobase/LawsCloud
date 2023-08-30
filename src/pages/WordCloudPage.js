import React from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import WordCloudSection from "../components/WordCloud/WordCloudSection";
import {StyledWrapper} from "../style/StyledWordCloudPage";

const WordCloudPage = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <WordCloudSection size={100} />
      <button type="button" className="compare-button" onClick={() => navigate("/compare")}>
        비교해보기
      </button>
    </StyledWrapper>
  );
};

export default WordCloudPage;

WordCloudPage.propTypes = {
  setSearch: PropTypes.func,
};
