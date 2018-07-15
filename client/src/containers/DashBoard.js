import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMessage } from '../store/actions/message'

class DashBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tweets: []
    }
  
  }

  componentDidMount() {
    const { info } = this.props.user
    if (info && Object.keys(info).length > 0) {
      this.props.fetchMessage(info.token).then(tweets => console.log('all tweets', this.props.messages))
    }
  }

  render() {
    return (
      <h1>DashBoard Page.</h1>
    )
  }

}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  }
}

DashBoard.propTypes = {
  fetchMessage: PropTypes.func.isRequired,
  messages: PropTypes.array
}

export default connect(mapStateToProps, {fetchMessage})(DashBoard)