import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import "./index.less";

function Index() {
  return (
    <Fragment>
      <content className="content-container">
        <img src="./assets/index.jpg" alt="" />
        <h1 className="content-title">Yongming UI</h1>
        <p className="content-descrption">用react造轮子</p>
        <p className="content-button">
          <NavLink exact to="/list">Get Started→</NavLink>
        </p>
        <Switch>
          <Route path="/list" component={List} />
        </Switch>
      </content>
      <footer className="footer-container">
        <div className="footer-card">
          <h2>注意事项</h2>
          <p>Yongming UI 只是一个玩具项目, 不要用于生产环境</p>
        </div>
        <div className="footer-card">
          <h2>我的目的</h2>
          <p>有人总说不要重复造轮子, 因为自己几乎不会造出一个比业界共用的轮子还好的轮子, 造再多也是白费力. 这的确不错. 但我的目的只是为了提高</p>
        </div>
      </footer>
    </Fragment>
  );
}

function List() {
  useEffect(() => {
    console.log(`userEffect=>List`);
    return () => {
      console.log(`userEffect=>Return List`);
    };
  }, []);
  return <h2>List Page</h2>;
}

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <Router>
          <NavLink to="/">
            <span className="site-name">Youngming UI</span>
          </NavLink>
          <div className="navbar-right">
            <div className="search-box">
              <input />
            </div>
            <div className="nav-link">
              <div className="nav-item">
                <NavLink exact to="/" activeClassName="activeClass">
                  主页
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink to="/list" activeClassName="activeClass">
                  文档
                </NavLink>
              </div>
              <div className="nav-item">
                <a
                  target="_blank"
                  className="external"
                  rel="noopener noreferrer"
                  href="https://github.com/yangyongmingcomcn/yongming-react-ui"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/list" component={List} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
