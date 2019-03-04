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

// Create a list

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
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
      ]
    };
  }
  shuffleArray = () => {
    var list = this.state.list;
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    this.setState(state => ({
      list: state.list
    }))
    console.log(list)
  };

  handleClick = () => {
    console.log("Click");
    this.setState({
      isClicked: true
    });
  };

  render() {
    return (
      <div className="container content">
        <div className="row">
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[0]}
              alt={this.state.list[0]}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[1]}
              alt={lara}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[2]}
              alt={dk}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[3]}
              alt={aloy}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[4]}
              alt={mario}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[5]}
              alt={dante}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[6]}
              alt={kratos}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[7]}
              alt={link}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[8]}
              alt={samus}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[9]}
              alt={drake}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[10]}
              alt={ryu}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
          <div className="col s3 m3 l3 center">
            <img
              src={this.state.list[11]}
              alt={sonic}
              className="responsive-img"
              onClick={this.shuffleArray}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
