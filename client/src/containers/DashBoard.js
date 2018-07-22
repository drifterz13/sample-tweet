import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMessage } from '../store/actions/message'
import Tweet from '../components/Tweet'
import TweetInput from '../components/TweetInput'
import '../assets/css/DashBoard.css'

class DashBoard extends React.Component {

  state = {
    tweets: [],
    isLoaded: false,
    error: null
  }

  componentDidMount() {
    const { info } = this.props.user
    this.props.fetchMessage(info.token)
      .then(() => {
        this.setState({ tweets: this.props.messages, isLoaded: true })
      })
      .catch(error => this.setState({ error, isLoaded: true }));
  }

  render() {
    const { error, isLoaded, tweets } = this.state
    const { username } = this.props.user.info
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div className='dashboard'>
          <div className='container' style={{display: 'flex'}}>
            <div className='aside-dashboard'>
              <div className='media-content'>
                <div className='box aside-top'>
                  <span>
                    <i className='fas fa-camera'></i>
                  </span>
                </div>
                <div className='box aside-btm'>
                  <div className='aside-username'>
                    <h6 className='title is-6'>{username}</h6>
                    <p style={{fontSize: '14px'}} className='subtitle is-6'>@{username}</p>
                  </div>
                  <div className='wrap-btm'>
                    <div className='aside-tweet'>
                      <h6>tweet</h6>
                      <p>27</p>
                    </div>
                    <div className='aside-follow'>
                      <h6>follow</h6>
                      <p>2500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-dashboard'>
              <TweetInput />
              {tweets.map(tweet => (
                <Tweet key={tweet._id} tweet={tweet.text} username={username} />
              ))}
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  }
}

DashBoard.propTypes = {
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    info: PropTypes.object.isRequired
  }).isRequired,
  fetchMessage: PropTypes.func.isRequired,
  messages: PropTypes.array
}

export default connect(mapStateToProps, { fetchMessage })(DashBoard)