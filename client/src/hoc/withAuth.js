import React from 'react'
import { connect } from 'react-redux'

export const withAuth = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    state = {
      isAuthenticated: this.props.user.isAuthenticated
    }

    render() {
      if (this.state.isAuthenticated) {
        return <WrappedComponent {...this.props} />
      } else {
        return <div className='title is-3'>Please Login First.</div>
      }
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(EnhancedComponent)
}
