import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import "./index.less";

function Index() {
  useEffect(() => {
    console.log(`userEffect=>Index`);
    return () => {
      console.log(`userEffect=>Return Index`);
    };
  }, []);
  return <h2>yangyongming.com</h2>;
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
