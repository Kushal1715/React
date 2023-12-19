import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, desc, imageURL, url } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img style={{width:"286px", height: "200px"}}className="card-img-top" src={imageURL} alt='' />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem 