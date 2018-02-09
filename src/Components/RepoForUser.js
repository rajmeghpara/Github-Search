import React, { Component } from "react";
import { style } from "typestyle";

const styleDescription = style({
  fontSize: "16px"
});

class RepoForUser extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{this.props.data.name}</h3>
        </div>
        <div className="panel-body">
          <div className={styleDescription}>
            <i>{this.props.data.description}</i>{" "}
          </div>
          <br />
          <div className="Language">
            <h4>Language: {this.props.data.language}</h4>
          </div>
          <h4>
            <i className="fa fa-code-fork" aria-hidden="true" /> {"\u00A0"}:{" "}
            {this.props.data.forks}
          </h4>
          <h4>
            <i className="fa fa-eye" aria-hidden="true" /> {"\u00A0"}:{" "}
            {this.props.data.watchers}
          </h4>
          <br />
          <a href={this.props.data.html_url} target="_blank">
            <button className={this.props.styleButton}>Visit Repo</button>
          </a>
        </div>
      </div>
    );
  }
}
export default RepoForUser;
