import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Title from "./components/Title";
import WordCloudPage from "./pages/WordCloudPage";
import ComparedWordCloudPage from "./pages/ComparedWordCloudPage";

import Bills from "./pages/Bills";
import axios from "axios";
import {useRecoilState} from "recoil";
import {userIp} from "./recoil/store";

function App() {
  const [ip, setIp] = useRecoilState(userIp);
  const apiKey = process.env.REACT_APP_IP_API_KEY;
  const getIp = async () => {
    const userIpInfo = await axios(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`);
    setIp(userIpInfo.data.ip);
  };
  getIp();

  return (
    <>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path="/" element={<WordCloudPage />} />
          <Route path="/main" element={<WordCloudPage />} />
          <Route path="/compare" element={<ComparedWordCloudPage />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
