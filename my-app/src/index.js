import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from './components/Main/Main'
import Banner from './components/Banner/Banner'
import "./index.css";

function App() {
  return (
    <div className="page-wrap">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
