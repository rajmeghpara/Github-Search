import React, { Component } from "react";
import { style } from "typestyle";

const styleFilter = style({
  color: "white",
  fontSize: "18px"
});
class FilterContainer extends Component {
  render() {
    return (
      <div id="formcheck" className={styleFilter}>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="JavaScript"
            onChange={this.props.handleCheckChange}
          />
          JavaScript{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Java"
            onChange={this.props.handleCheckChange}
          />
          Java{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="CPP"
            onChange={this.props.handleCheckChange}
          />
          CPP{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Python"
            onChange={this.props.handleCheckChange}
          />
          Python{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Ruby"
            onChange={this.props.handleCheckChange}
          />
          Ruby{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="C"
            onChange={this.props.handleCheckChange}
          />
          C{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="CSS"
            onChange={this.props.handleCheckChange}
          />
          CSS{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Php"
            onChange={this.props.handleCheckChange}
          />
          Php{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Go"
            onChange={this.props.handleCheckChange}
          />
          Go{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Perl"
            onChange={this.props.handleCheckChange}
          />
          Perl{"\u00A0"}
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="language"
            value="Rust"
            onChange={this.props.handleCheckChange}
          />
          Rust{"\u00A0"}
        </label>
      </div>
    );
  }
}

export default FilterContainer;
