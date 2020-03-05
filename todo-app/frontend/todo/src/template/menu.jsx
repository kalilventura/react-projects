import React from "react";

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      <i className="fa fa-calendar-check-o"></i> TodoApp
    </a>
    <div className="navbar-collapse collapse show" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#/todos">
            Todo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/about">
            Sobre
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
