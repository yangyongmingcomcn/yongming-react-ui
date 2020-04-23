import React from "react";
import "./index.less";

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <a href="#">
          <span className="site-name">Yongming UI</span>
        </a>
        <div className="navbar-right">
          <div className="search-box">
            <input />
          </div>
          <div className="nav-link">
            <div className="nav-item aa">
              <a href="#">主页</a>
            </div>
            <div className="nav-item">
              <a href="#">文档</a>
            </div>
            <div className="nav-item external">
              <a href="https://github.com/yangyongmingcomcn/yongming-react-ui" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
