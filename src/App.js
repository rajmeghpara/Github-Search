import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { style } from "typestyle";
import RadioBox from "./Components/RadioBox.js";
import ResultsContainer from "./Components/ResultContainer.js";
import SearchContainer from "./Components/SearchContainer.js";
require("dotenv").config();

const styleButton = style({
  fontSize: "22px",
  padding: "10px 15px 10px 15px",
  border: "none",
  borderRadius: "3px",
  background: "rgba(39,41,50,0.95)",
  color: "white",
  marginLeft: "8px"
});

const styleHeading = style({
  color: "white",
  fontSize: "45px"
});

class Root extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      userProfileData: [],
      userRepoData: [],
      reposData: [],
      usersData: [],
      display: "none",
      user_profile: false,
      repos: true,
      users: false,
      flag: false
    };
    this.handleRadioChange1 = this.handleRadioChange1.bind(this);
    this.handleRadioChange2 = this.handleRadioChange2.bind(this);
    this.handleRadioChange3 = this.handleRadioChange3.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleRadioChange1(event) {
    this.setState({
      user_profile: true,
      repos: false,
      users: false,
      userProfileData: [],
      userRepoData: [],
      reposData: [],
      usersData: []
    });
  }
  handleRadioChange2(event) {
    this.setState({
      user_profile: false,
      repos: true,
      users: false,
      userProfileData: [],
      userRepoData: [],
      reposData: [],
      usersData: []
    });
  }
  handleRadioChange3(event) {
    this.setState({
      users: true,
      user_profile: false,
      repos: false,
      userProfileData: [],
      userRepoData: [],
      reposData: [],
      usersData: []
    });
  }
  handleSearch(event) {
    event.preventDefault();
    if (this.state.input !== "") {
      if (this.state.user_profile) {
        $.ajax({
          url:
            "https://api.github.com/users/" +
            this.state.input +
            "?client_id=" +
            process.env.REACT_APP_CLIENT_ID +
            "&client_secret=" +
            process.env.REACT_APP_CLIENT_SECRET,
          type: "GET",
          dataType: "jsonp",
          success: function(response) {
            this.setState({
              input: "",
              userProfileData: response.data,
              display: "block"
            });
          }.bind(this)
        });

        $.ajax({
          url:
            "https://api.github.com/users/" +
            this.state.input +
            "/repos" +
            "?client_id=" +
            process.env.REACT_APP_CLIENT_ID +
            "&client_secret=" +
            process.env.REACT_APP_CLIENT_SECRET,
          type: "GET",
          dataType: "jsonp",
          success: function(response) {
            this.setState({ userRepoData: response.data, flag: true });
          }.bind(this)
        });
      } else if (this.state.repos) {
        $.ajax({
          url:
            "https://api.github.com/search/repositories?q=" +
            this.state.input +
            "&sort=stars&per_page=50&" +
            "?client_id=" +
            process.env.REACT_APP_CLIENT_ID +
            "&client_secret=" +
            process.env.REACT_APP_CLIENT_SECRET,
          type: "GET",
          dataType: "jsonp",
          success: function(response) {
            this.setState({ input: "", reposData: response.data, flag: true });
          }.bind(this)
        });
      } else if (this.state.users) {
        $.ajax({
          url:
            "https://api.github.com/search/users?q=" +
            this.state.input +
            "&client_id=" +
            process.env.REACT_APP_CLIENT_ID +
            "&client_secret=" +
            process.env.REACT_APP_CLIENT_SECRET,
          type: "GET",
          dataType: "jsonp",
          success: function(response) {
            this.setState({ input: "", usersData: response.data, flag: true });
          }.bind(this)
        });
      }
    }
  }
  render() {
    return (
      <div>
        <div className={styleHeading}>Github Search</div>
        <RadioBox
          handleRadioChange1={this.handleRadioChange1}
          handleRadioChange2={this.handleRadioChange2}
          handleRadioChange3={this.handleRadioChange3}
          checked1={this.state.user_profile}
          checked2={this.state.repos}
          checked3={this.state.users}
        />

        <SearchContainer
          input={this.state.input}
          handleInput={this.handleInput.bind(this)}
          search={this.handleSearch.bind(this)}
          styleButton={styleButton}
        />
        <div>
          <br />
        </div>

        {this.state.flag ? (
          <ResultsContainer
            userProfileData={this.state.userProfileData}
            userRepoData={this.state.userRepoData}
            reposData={this.state.reposData}
            usersData={this.state.usersData}
            users={this.state.users}
            repos={this.state.repos}
            user_profile={this.state.user_profile}
            display={this.state.display}
            styleButton={styleButton}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
export default Root;
