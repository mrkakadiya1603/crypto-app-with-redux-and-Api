import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";

import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Homepage,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes"></div>
        </Layout>
      </div>
      <div className="footer">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/exchanges" element={<Exchanges />} />
          <Route
            exact
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          />
          <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route exact path="/news" element={<News />} />
        </Routes>
      </div>
      <div className="footer" level={5}>
<Typography.Title>
  Cryptoverse<br />
All Right Are Reserve
</Typography.Title>
      </div>
    </div>
  );
};

export default App;
