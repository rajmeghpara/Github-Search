import React, { Component } from "react";
import FilterContainer from "./FilterContainer.js";
import Repo from "./Repo.js";
import RepoForUser from "./RepoForUser.js";
import User from "./User.js";
import UserProfile from "./UserProfile";
import { style } from "typestyle";

const white = style({
  color: "white",
  fontSize: "25px"
});

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JavaScript: false,
      CPP: false,
      Python: false,
      Ruby: false,
      C: false,
      CSS: false,
      Php: false,
      Go: false,
      Perl: false,
      Rust: false
    };
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleCheckChange(event) {
    var result = [];
    switch (event.target.value) {
      case "JavaScript": {
        this.setState({ JavaScript: !this.state.JavaScript });

        break;
      }
      case "Java":
        this.setState({ Java: !this.state.Java });
        break;
      case "CPP":
        this.setState({ CPP: !this.state.CPP });
        break;

      case "Python":
        this.setState({ Python: !this.state.Python });
        break;

      case "Ruby":
        this.setState({ Ruby: !this.state.Ruby });
        break;

      case "C":
        this.setState({ C: !this.state.C });
        break;

      case "CSS":
        this.setState({ CSS: !this.state.CSS });
        break;

      case "Php":
        this.setState({ Php: !this.state.Php });
        break;

      case "Go":
        this.setState({ Go: !this.state.Go });
        break;

      case "Perl":
        this.setState({ Perl: !this.state.Perl });
        break;

      case "Rust":
        this.setState({ Rust: !this.state.Rust });
        break;
      default:
    }
  }

  openLink(value) {
    window.open(value);
  }

  render() {
    const tableHeadStyle = {
      display: this.props.tableDisplay
    };

    if (this.props.user_profile) {
      return (
        <div>
          {this.props.userProfileData.login ||
          this.props.userProfileData.message ? (
            <div>
              {this.props.userProfileData.message ? (
                <h1 className={white}>No user found...</h1>
              ) : (
                <div>
                  <UserProfile
                    data={this.props.userProfileData}
                    tableHeadStyle={tableHeadStyle}
                    styleButton={this.props.styleButton}
                  />
                  <hr />
                  <div className={white}>
                    <h2>Repositories</h2>
                  </div>
                  <hr />
                  <h3 className={white}>
                    total results:{this.props.userRepoData.length}
                  </h3>
                  {this.props.userRepoData && !this.props.userRepoData.message
                    ? this.props.userRepoData.map(repo => (
                        <div key={repo.name}>
                          <RepoForUser
                            data={repo}
                            styleButton={this.props.styleButton}
                          />
                        </div>
                      ))
                    : null}
                </div>
              )}
            </div>
          ) : null}
        </div>
      );
    } else if (this.props.repos) {
      var result = [];
      if (this.state.JavaScript === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "JavaScript") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Java === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Java") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.CPP === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "CPP") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Python === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Python") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Ruby === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Ruby") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.C === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "C") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.CSS === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "CSS") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Php === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Php") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Go === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Go") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Perl === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Perl") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (this.state.Rust === true) {
        this.props.reposData.items.map(repo => {
          if (repo.language === "Rust") {
            result.push(repo);
          }
          return repo;
        });
      }
      if (
        (this.state.JavaScript ||
          this.state.Java ||
          this.state.CPP ||
          this.state.Python ||
          this.state.Ruby ||
          this.state.C ||
          this.state.CSS ||
          this.state.Php ||
          this.state.Go ||
          this.state.Perl ||
          this.state.Rust) === false
      ) {
        result = this.props.reposData.items;
      }

      if (this.props.reposData.length !== 0) {
        return (
          <div>
            <FilterContainer
              handleCheckChange={this.handleCheckChange}
              array={this.state.array}
            />
            <p className={white}>Total Results:{result.length} </p>
            <div>
              {" "}
              {!this.props.reposData.total_count ? (
                <h1 className={white}>No Repos found...</h1>
              ) : (
                result.map(repo => (
                  <div key={repo.full_name}>
                    <Repo data={repo} styleButton={this.props.styleButton} />
                  </div>
                ))
              )}
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else if (this.props.users) {
      if (this.props.usersData.length !== 0) {
        return (
          <div>
            {!this.props.usersData.total_count ? (
              <h1 className={white}>No Users found...</h1>
            ) : (
              this.props.usersData.items.map(user => (
                <div key={user.login}>
                  <User data={user} styleButton={this.props.styleButton} />
                </div>
              ))
            )}
          </div>
        );
      } else {
        return null;
      }
    }
  }
}
export default ResultContainer;
