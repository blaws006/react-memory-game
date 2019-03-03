import React from "react";
import Image from "../Image/Image";
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

// Create image tags
//

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    return (
      <div className="container content">
        <div className="row">
          <div className="col s12 m3 l3 center">
            <Image image={cloud} name={cloud} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={lara} name={lara} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={dk} name={dk} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={aloy} name={aloy} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3 center">
            <Image image={mario} name={mario} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={dante} name={dante} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={kratos} name={kratos} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={link} name={link} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3 l3 center">
            <Image image={samus} name={samus} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={drake} name={drake} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={ryu} name={ryu} />
          </div>
          <div className="col s12 m3 l3 center">
            <Image image={sonic} name={sonic} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
