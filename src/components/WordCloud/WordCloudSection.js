import React, {useState} from "react";
import PropTypes from "prop-types";
import AgeSelect from "./AgeSelect";
import WordCloud from "../WordCloud";
import YearSelect from "./YearSelect";
import {useNavigate} from "react-router-dom";
const agesAndYears = {
  21: {firstYear: 2020, yearsNum: 4},
  20: {firstYear: 2016, yearsNum: 5},
  19: {firstYear: 2012, yearsNum: 5},
  18: {firstYear: 2008, yearsNum: 5},
  17: {firstYear: 2004, yearsNum: 5},
  16: {firstYear: 2000, yearsNum: 5},
};

function WordCloudSection({size = 100, elemId = "wordcloud", clickHandler}) {
  const defaultYear = 2023;
  const defaultAge = 21;
  const [year, setYear] = useState(defaultYear);
  const [age, setAge] = useState(defaultAge);

  const navigate = useNavigate();

  const setSearch = (data) => {
    navigate("/bills", {
      state: {
        inputValue: data.name,
        age: data.age,
      },
    });
  };

  return (
    <div className="wordcloud-section">
      <WordCloud age={age} year={year} setSearch={setSearch} size={size} elemId={elemId} clickHandler={clickHandler} />
      <AgeSelect age={age} setAge={setAge} setYear={setYear} agesAndYears={agesAndYears} size={size} />
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
  size: PropTypes.number,
  elemId: PropTypes.string,
};

export default WordCloudSection;
