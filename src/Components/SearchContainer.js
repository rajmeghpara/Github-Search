import React, { Component } from "react";
import { style } from "typestyle";

const styleInput = style({
  fontSize: "22px",
  width: "350px",
  padding: "10px",
  border: "1px solid rgba(39,41,50,0.15)",
  borderRadius: "3px"
});

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.search.bind(this)}>
          <input
            className={styleInput}
            type="text"
            placeholder="Type here..."
            value={this.props.input}
            onChange={this.props.handleInput.bind(this)}
            autoFocus
          />
          <button className={this.props.styleButton}>Search</button>
          <br />
        </form>
      </div>
    );
  }
}
export default SearchContainer;
