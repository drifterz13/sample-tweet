import React from "react";

const boxStyle = {
  padding: "10px 0 10px 20px",
  borderRadius: "0px",
  marginBottom: "0px"
};

const navStyle = {
  borderBottom: "none",
  marginTop: "12px"
};

const Tweet = ({ tweet, username, profileImageUrl }) => {
  return (
    <div className="box" style={boxStyle}>
      <article className="media">
        <div style={{ paddingTop: "5px" }} className="media-left">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              style={{ width: "48px", height: "48px" }}
              src={
                profileImageUrl ? profileImageUrl : `assets/img/dummy-user.png`
              }
              alt={`img-${username}`}
            />
          </figure>
        </div>
        <div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{username}</strong> <small>@{username}</small>
                <br />
                {tweet}
              </p>
            </div>
          </div>
          <nav style={navStyle} className="level is-mobile">
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
  );
};

export default Tweet;
