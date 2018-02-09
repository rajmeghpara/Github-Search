import React, { Component } from "react";
class UserProfile extends Component {
  render() {
    return (
      <div className="panel panel-default " style={this.props.tableHeadStyle}>
        <div className="panel-heading">
          <h3>{this.props.data.login}</h3>
        </div>
        <div className="panel-body">
          <div id="profile">
            <img
              src={this.props.data.avatar_url}
              alt={this.props.data.login}
              height="120"
              width="120"
            />
            <h3>{this.props.data.name}</h3>
            <h4>
              followers: {this.props.data.followers} following:
              {this.props.data.following}{" "}
            </h4>
            <h4>
              {this.props.data.email ? <p>{this.props.data.email} </p> : null}
            </h4>
            <h4>
              {this.props.data.bio ? (
                <p>
                  <b>Bio:</b> {this.props.data.bio}
                </p>
              ) : null}
            </h4>
            <a href={this.props.data.html_url} target="_blank">
              <button className={this.props.styleButton}>Visit Profile</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
