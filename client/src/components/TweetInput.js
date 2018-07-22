import React from 'react'
import '../assets/css/TweetInput.css'

const TweetInput = () => (
  <div className='input-wrap'>
    <div class='field'>
      <div class='control'>
        <span className='icon-wrap'>
          <i class='fas fa-user'></i>
        </span>
        <input
          class='input is-info'
          type='text'
          placeholder="what's happening?" />
      </div>
    </div>
  </div>
)

export default TweetInput