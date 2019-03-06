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
import Image from '../Image/Image'
import Footer from "../Footer/Footer";

// Create a list
// Shuffle the list
// Make images shuffle onClick

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.gameController = this.gameController.bind(this)
    this.state = {
      list: [
        { name: "Cloud Strife", url: cloud },
        { name: "Lara Croft", url: lara },
        { name: "Donkey Kong", url: dk },
        { name: "Aloy", url: aloy },
        { name: "Mario", url: mario },
        { name: "Dante", url: dante },
        { name: "Kratos", url: kratos },
        { name: "Link", url: link },
        { name: "Samus Aran", url: samus },
        { name: "Nathan Drake", url: drake },
        { name: "Ryu", url: ryu },
        { name: "Sonic the Hedgehog", url: sonic }
      ],
      clickedList: [],
      currentScore: 0,
      topScore: 0,
      
    };
  }

  // Body's images shuffle around once the component mounts
  componentDidMount() {
    this.imageShuffle();
  }

  // Every time the Body component updates, it checks if you gain the high score
  componentDidUpdate() {
    if (this.state.currentScore === 12) {
      alert("You win");
      this.updateTopScore();
      this.reset();
    }
  }

  // Update's the progress of game if user has guessed correctly
  updateCurrentScore() {
    this.setState(state => {
      state.currentScore++;
    });
  }

  // Once the game's over, this function checks to see if you topped the previous high score
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

  // This function resets the Game settings if the game ends
  reset() {
    this.setState({
      currentScore: 0
    });
    this.setState({
      clickedList: []
    });
    this.imageShuffle();
  }

  // Shuffles the images in the array which does the same on screen.
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

  // Controlls the win loss logic and pushes correctly guessed images to evaluate against
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
    // Made three rows worth of images .slice takes 4 images out of the array .map lays out the 4 picked
    const rowOne = this.state.list.slice(0, 4).map(image =>
      <Image key={image.name} name={image.name} url={image.url} alt={image.name} title={image.name} gameController={this.gameController} /> 
      )
    const rowTwo = this.state.list.slice(4, 8).map(image =>
      <Image key={image.name} name={image.name} url={image.url} alt={image.name} title={image.name} gameController={this.gameController} /> 
    )
    const rowThree = this.state.list.slice(8, 12).map(image =>
      <Image key={image.name} name={image.name} url={image.url} alt={image.name} title={image.name} gameController={this.gameController} /> 
    )
    return (
      <div className="page-wrapper">
        <Header current={this.state.currentScore} high={this.state.topScore} />
        <Banner />
        <div className="container content">
          <div className="row">{rowOne}</div>
          <div className="row">
            {rowTwo}
          </div>
          <div className="row">
            {rowThree}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Body;
