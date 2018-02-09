import React, { Component } from "react";
class User extends Component {
  render() {
    return (
      <div className="panel panel-default col-md-6">
        <div className="panel-heading">
          <h1> {this.props.data.login} </h1>
        </div>
        <div className="panel-body">
          <div id="profile">
            <img
              src={this.props.data.avatar_url}
              alt={this.props.data.login}
              height="120"
              width="120"
            />
            <br />
            <br />
            <a href={this.props.data.html_url} target="_blank">
              <button className={this.props.styleButton}>Visit Profile</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
