import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Title from "./components/Title";
import WordCloudPage from "./pages/WordCloudPage";
import ComparedWordCloudPage from "./pages/ComparedWordCloudPage";

import Bills from "./pages/Bills";
import axios from "axios";
import {useRecoilState} from "recoil";
import {userIp} from "./recoil/store";
const apiKey = process.env.REACT_APP_IP_API_KEY;

function App() {
  const [ip, setIp] = useRecoilState(userIp);
  useEffect(() => {
    async function getIp() {
      try {
        const userIpInfo = await axios(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`);
        setIp(userIpInfo.data.ip);
      } catch (error) {
        console.error("Error fetching user IP:", error);
      }
    }

    getIp();
  }, []);

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
