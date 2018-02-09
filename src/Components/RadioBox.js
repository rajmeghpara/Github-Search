import React, { Component } from "react";
import { style } from "typestyle";

const styleRadioForm = style({
  color: "white",
  fontSize: "18px"
});
class RadioBox extends Component {
  render() {
    return (
      <div>
        <form className={styleRadioForm}>

            <input
              type="radio"
              name="Choice"
              onChange={this.props.handleRadioChange2.bind(this)}
              checked={this.props.checked2}
            />
            Repos{"\u00A0"}

            <input
              type="radio"
              name="Choice"
              onChange={this.props.handleRadioChange1.bind(this)}
              checked={this.props.checked1}
            />
            User Profile{"\u00A0"}

            <input
              type="radio"
              name="Choice"
              onChange={this.props.handleRadioChange3.bind(this)}
              checked={this.props.checked3}
            />
            Users<br />

        </form>
      </div>
    );
  }
}
export default RadioBox;
