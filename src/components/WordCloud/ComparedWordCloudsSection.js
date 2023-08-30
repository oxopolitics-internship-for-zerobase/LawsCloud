import React, {useState} from "react";
import WordCloudSection from "./WordCloudSection";

function ComparedWordCloudsSection() {
  const [compareCount, setCompareCount] = useState(2);
  const clickHandler = (e) => {
    if (e.currentTarget.className === "wordcloud" && compareCount > 2) {
      setCompareCount(compareCount - 1);
    } else {
      setCompareCount(compareCount + 1);
    }
  };
  const compareNum = Array.from({length: compareCount}, (_, i) => i + 1);
  return (
    <section className="compared-wordclouds">
      {compareNum.map((num) => (
        <WordCloudSection size={60} elemId={`wordcloud${num}`} key={`wordcloud-${num}`} clickHandler={clickHandler} />
      ))}
      {compareCount <= 4 && <button onClick={clickHandler}>+</button>}
    </section>
  );
}

export default ComparedWordCloudsSection;
