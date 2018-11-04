import React, { Component } from "react";
import { TimelineMax } from "gsap/TweenMax";
import ReactSplitText from "./ReactSplitText";

class Title extends Component {
  constructor(props) {
    super();
    this.textTween = null;
    this.charItems = [];
  }

  getTextChars = chars => {
    this.charItems = chars;
  };

  componentDidMount() {
    this.textTween = new TimelineMax().staggerFrom(
      this.charItems,
      0.3,
      { autoAlpha: 0 },
      0.1
    );
  }

  render() {
    return (
      <div>
        <h1>
          <ReactSplitText
            text="React Split Text"
            getTextChars={this.getTextChars}
          />
        </h1>
      </div>
    );
  }
}

export default Title;
