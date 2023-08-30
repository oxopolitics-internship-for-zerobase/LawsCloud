import React, {useState} from "react";
import WordCloudSection from "./WordCloudSection";
import {ComparedWordCloud, PlusBtn} from "../../style/StyledComparedWordCloudPage";

function ComparedWordCloudsSection() {
  const [compareCount, setCompareCount] = useState(2);
  const clickHandler = (e) => {
    if (e.currentTarget.className === "wordcloud" && compareCount > 2) {
      setCompareCount(compareCount - 1);
    } else if (compareCount < 4) {
      setCompareCount(compareCount + 1);
    }
  };
  const compareNum = Array.from({length: compareCount}, (_, i) => i + 1);
  return (
    <>
      <ComparedWordCloud>
        {compareNum.map((num) => (
          <WordCloudSection size={60} elemId={`wordcloud${num}`} key={`wordcloud-${num}`} clickHandler={clickHandler} />
        ))}
      </ComparedWordCloud>
      {compareCount < 4 && <PlusBtn onClick={clickHandler}>비교대상 추가</PlusBtn>}
    </>
  );
}

export default ComparedWordCloudsSection;
