import React, { Component } from 'react';

class NewsArticle extends Component {
  render() {
    const article = this.props.article;
    
    return (
      <div className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <a href={article.url} target="_blank">
                <strong>{article.title}</strong>
              </a>
              <small><i> by {article.author}</i></small>
              <br/>
              
              {article.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticle;