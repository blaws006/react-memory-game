import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from './components/Main/Main'
import "./index.css";

function App() {
  return (
    <div className="page-wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
