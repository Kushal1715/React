import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, desc, imageURL, url, time, author, source } = this.props;
    return (
      <div className='my-3'>
        <span className="badge badge-pill badge-primary" style={{right: "100%"}}>{source}</span>
        <div className="card">
          <img className="card-img-top" style={{height: "200px"}}src={imageURL} alt='' />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">By -{author?author:"Unknown"} at {new Date(time).toUTCString()}</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem 