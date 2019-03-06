import React from "react";

function Header(props) {
  return (
    <nav className="light-blue darken-3">
      <div className="container-wide">
        <div className="row">
          <div className="col s12 m6">
            <a href="/" className="logo">
              Memory Game
            </a>
          </div>
          <div className="col s12 m6">
            <div className="right">
              <ul>
                <li>Your Score: {props.current}</li>
                <li>&nbsp; | &nbsp;</li>
                <li>High Score: {props.high}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
