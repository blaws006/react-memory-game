import React from "react";
import cloud from "../img/220px-Cloud_Strife.png";
import lara from "../img/220px-Lara_Croft_(2013).png";
import dk from "../img/250px-SuperMarioParty_DonkeyKong.png";
import aloy from "../img/aloy.jpg";
import mario from "../img/char-mario-action.png";
import dante from "../img/dante.jpg";
import kratos from "../img/kratos.jpg";
import link from "../img/lozbotw-link-and-bow.jpg";
import samus from "../img/Metroidprime3_1.png";
import drake from "../img/NathanDrake-U4.jpg";
import ryu from "../img/Ryu_TvC.png";
import sonic from "../img/sonic.jpg";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

// Create a list
// Shuffle the list
// Make images shuffle onClick

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        cloud,
        lara,
        dk,
        aloy,
        mario,
        dante,
        kratos,
        link,
        samus,
        drake,
        ryu,
        sonic
      ],
      clickedList: [],
      currentScore: 0,
      topScore: 0
    };
  }

  componentDidMount() {
    this.imageShuffle();
  }

  componentDidUpdate() {
    if (this.state.currentScore === 12) {
      alert("You win");
      this.updateTopScore();
      this.reset();
    }
  }

  updateCurrentScore() {
    this.setState(state => {
      state.currentScore++;
      console.log(state.currentScore);
    });
  }

  updateTopScore() {
    if (
      this.state.topScore === 0 ||
      this.state.topScore <= this.state.currentScore
    ) {
      this.setState(state => {
        state.topScore = state.currentScore;
      });
    }
  }

  reset() {
    this.setState({
      currentScore: 0
    });
    this.setState({
      clickedList: []
    });
    this.imageShuffle();
  }

  imageShuffle = () => {
    var list = this.state.list;
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    this.setState(state => ({
      list: state.list
    }));
  };

  gameController = props => {
    const clickedList = this.state.clickedList;
    const clickedImg = props.target.src;
    if (!clickedList.includes(clickedImg)) {
      this.imageShuffle();
      this.updateCurrentScore();
      clickedList.push(clickedImg);
    } else {
      alert("You lost");
      this.updateTopScore();
      this.reset();
    }
  };

  render() {
    return (
      <div className="page-wrapper">
        <Header current={this.state.currentScore} high={this.state.topScore} />
        <Banner />
        <div className="container content">
          <div className="row">
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[0]}
                alt={this.state.list[0]}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[1]}
                alt={lara}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[2]}
                alt={dk}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[3]}
                alt={aloy}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[4]}
                alt={mario}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[5]}
                alt={dante}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[6]}
                alt={kratos}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[7]}
                alt={link}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
          </div>

          <div className="row">
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[8]}
                alt={samus}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[9]}
                alt={drake}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[10]}
                alt={ryu}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
            <div className="col s6 m3 l3 center">
              <img
                src={this.state.list[11]}
                alt={sonic}
                className="responsive-img"
                onClick={this.gameController}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Body;
