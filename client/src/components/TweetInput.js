import React from 'react'
import '../assets/css/TweetInput.css'

class TweetInput extends React.Component {
  state = {
    tweet: ''
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.props.tweet(this.state.tweet)
      this.setState({ tweet: '' })
    }
  }

  handleChange = e => this.setState({ tweet: e.target.value })

  render() {
    return (
      <div className='input-wrap'>
        <div className='field'>
          <div className='control'>
            <span className='icon-wrap'>
              {this.props.profileImageUrl ?
                <img src={this.props.profileImageUrl} alt='profile-input' /> :
                <i className='fas fa-user'></i>
              }
            </span>
            <input
              className='input is-info'
              type='text'
              value={this.state.tweet}
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
              placeholder="what's happening?" />
          </div>
        </div>
      </div>
    )
  }
}

export default TweetInput