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

// Create img tags
//

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};
  }

  
  handleClick = () =>  {
    console.log('Click');
    this.setState({
      isClicked: true
    })
    console.log(this.props)
  }

  render() {
    return (
      <div className="container content">
        <div className="row">
          <div className="col s12 m3 l3 center">
            <img src={cloud} alt={cloud} onClick={this.handleClick} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={lara} alt={lara} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={dk} alt={dk} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={aloy} alt={aloy} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3 center">
            <img src={mario} alt={mario} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={dante} alt={dante} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={kratos} alt={kratos} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={link} alt={link} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3 l3 center">
            <img src={samus} alt={samus} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={drake} alt={drake} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={ryu} alt={ryu} />
          </div>
          <div className="col s12 m3 l3 center">
            <img src={sonic} alt={sonic} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
