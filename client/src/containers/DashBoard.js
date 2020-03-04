import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMessage, postMessage } from "../store/actions/message";
import Tweet from "../components/Tweet";
import TweetInput from "../components/TweetInput";
import "../assets/css/DashBoard.css";

class DashBoard extends React.Component {
  state = {
    tweets: [],
    isLoaded: false,
    error: null
  };

  handleTweet(text) {
    const { _id } = this.props.user.info;
    this.props.postMessage(_id, { text }).then(({ message }) => {
      const tweets = this.state.tweets.map(tweet => ({ ...tweet }));
      tweets.unshift(message);
      this.setState({
        ...this.state,
        tweets
      });
    });
  }

  componentDidMount() {
    this.props
      .fetchMessage()
      .then(() => {
        this.setState({ tweets: this.props.messages, isLoaded: true });
      })
      .catch(error => this.setState({ error, isLoaded: true }));
  }

  render() {
    const { error, isLoaded, tweets } = this.state;
    const { username, profileImageUrl } = this.props.user.info;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div className="dashboard">
          <div className="container" style={{ display: "flex" }}>
            <div className="aside-dashboard">
              <div className="media-content">
                <div className="box aside-top">
                  <span>
                    {profileImageUrl ? (
                      <img
                        className="profile_img"
                        src={profileImageUrl}
                        alt={`imgof${username}`}
                      />
                    ) : (
                      <i className="fas fa-camera"></i>
                    )}
                  </span>
                </div>
                <div className="box aside-btm">
                  <div className="aside-username">
                    <h6 className="title is-6">{username}</h6>
                    <p style={{ fontSize: "14px" }} className="subtitle is-6">
                      @{username}
                    </p>
                  </div>
                  <div className="wrap-btm">
                    <div className="aside-tweet">
                      <h6>tweet</h6>
                      <p>27</p>
                    </div>
                    <div className="aside-follow">
                      <h6>follow</h6>
                      <p>2500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-dashboard">
              <TweetInput
                profileImageUrl={profileImageUrl}
                tweet={tweet => this.handleTweet(tweet)}
              />
              {tweets.map(tweet => (
                <Tweet
                  key={tweet._id}
                  tweet={tweet.text}
                  username={tweet.user.username || username}
                  profileImageUrl={tweet.user.profileImageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  };
}

DashBoard.propTypes = {
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    info: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profileImageUrl: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      iat: PropTypes.number,
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  fetchMessage: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        profileImageUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  )
};

export default connect(mapStateToProps, { fetchMessage, postMessage })(
  DashBoard
);
