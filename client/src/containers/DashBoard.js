import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMessage } from '../store/actions/message'
import Tweet from '../components/Tweet'
import './DashBoard.css'

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
        <div className='container'>
          <div className='dashboard'>
            <div className='aside-dashboard'>
              <div className='media-content'>
                <div className='box' style={{borderRadius: '0px'}}>
                  aside
                </div>
              </div>
            </div>
            <div className='main-dashboard'>
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