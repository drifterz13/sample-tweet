import React from 'react'

const Tweet = ({ tweet, username, profileImageUrl }) => {
  return (
    <div className='box' style={{padding: '10px 0 10px 20px', borderRadius: '0px', marginBottom: '0px'}}>
      <article className='media'>
        <div style={{paddingTop: '5px'}} className='media-left'>
          <figure className='image is-48x48'>
            <img 
              className='is-rounded' 
              // src='assets/img/dummy-user.png'
              src={profileImageUrl ? profileImageUrl : `assets/img/dummy-user.png`} 
              alt={`img-${username}`} />
          </figure>
        </div>
        <div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{username}</strong> <small>@{username}</small>
                <br />
                {tweet}
              </p>
            </div>
          </div>
          <nav style={{borderBottom: 'none', marginTop: '12px'}} className="level is-mobile">
            <div className="level-left">
              <a className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <i className="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="retweet">
                <span className="icon is-small">
                  <i className="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="like">
                <span className="icon is-small">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  )
}

export default Tweet