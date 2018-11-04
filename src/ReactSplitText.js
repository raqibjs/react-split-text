import React, { Component } from "react";
import PropTypes from "prop-types";

//Important styles for GSAP animation
const spanStyles = {
  position: "relative",
  display: "inline-block"
};

class ReactSplitText extends Component {
  constructor(props) {
    super();
    this.charItems = [];
  }

  getTextCharsHandler = () => {
    this.props.getTextChars(this.charItems);
  };

  componentDidMount() {
    this.getTextCharsHandler();
  }

  render() {
    const { text } = this.props;
    return text.split("").map((item, i) => {
      if (item === " ") {
        return (
          <span
            style={spanStyles}
            key={i}
            ref={span => (this.charItems[i] = span)}
          >
            &nbsp;
          </span>
        );
      } else {
        return (
          <span
            style={spanStyles}
            key={i}
            ref={span => (this.charItems[i] = span)}
          >
            {item}
          </span>
        );
      }
    });
  }
}

ReactSplitText.propTypes = {
  text: PropTypes.string.isRequired,
  getTextChars: PropTypes.func.isRequired
};

export default ReactSplitText;
