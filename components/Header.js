import React from "react";

const Header = ({ logo }) => (
  <header>
    <div className="header-container container">
      <div className="logo">
        <img src={logo} width={200} height={200} alt="React Finland logo" />
      </div>
      <div className="rubric">
        <span>React </span>
        <span className="text-rf-blue">Finland</span>
      </div>
      <h1>One workshop day + two days of talks</h1>
      <h3>
        Your chance to learn more about React up north - Helsinki (24-26.4.2018)
      </h3>
      <div className="buy">
        <a href="https://ti.to/react-finland/2018" className="buy-button">
          Buy tickets now!
        </a>
      </div>
    </div>
  </header>
);

export default Header;
