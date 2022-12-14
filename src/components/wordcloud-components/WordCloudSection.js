import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import AgeSelect from "./AgeSelect";
import WordCloud from "./WordCloud";
import YearSelect from "./YearSelect";

const agesAndYears = {
  21: {firstYear: 2020, yearsNum: 3},
  20: {firstYear: 2016, yearsNum: 5},
  19: {firstYear: 2012, yearsNum: 5},
  18: {firstYear: 2008, yearsNum: 5},
  17: {firstYear: 2004, yearsNum: 5},
  16: {firstYear: 2000, yearsNum: 5},
};

function WordCloudSection({setSearch, setAgeData, size = 100, elemId = "wordcloud"}) {
  // const navigate = useNavigate();
  const defaultYear = 2022;
  const defaultAge = 21;
  const [year, setYear] = useState(defaultYear);
  const [age, setAge] = useState(defaultAge);
  return (
    <div className="wordcloud-section">
      <WordCloud age={age} year={year} setSearch={setSearch} size={size} elemId={elemId} />
      <AgeSelect
        setAgeData={setAgeData}
        age={age}
        setAge={setAge}
        setYear={setYear}
        agesAndYears={agesAndYears}
        size={size}
      />
      <YearSelect
        year={year}
        setYear={setYear}
        firstYear={agesAndYears[age].firstYear}
        yearsNumber={agesAndYears[age].yearsNum}
        size={size}
      />
    </div>
  );
}

WordCloudSection.propTypes = {
  setSearch: PropTypes.func.isRequired,
  size: PropTypes.number,
  elemId: PropTypes.string,
};

export default WordCloudSection;
