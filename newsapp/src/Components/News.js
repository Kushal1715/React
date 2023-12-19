import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'

export class News extends Component {
  
  static defaultProps = {
    pageSize: 6,
    country: "us"
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38f8c30cb0b142a092f8c4c7356baba3&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  handlePrevPage = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38f8c30cb0b142a092f8c4c7356baba3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,
                  page: this.state.page - 1,
                loading: false});
  }

  handleNextPage = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38f8c30cb0b142a092f8c4c7356baba3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles,
                    page: this.state.page + 1,
                  loading: false});
    }
    
  }

  render() {
    return (
      <div className='container my-3'>
        <h3 className='text-center my-3'>NewsHero-Top Headlines</h3>
        {this.state.loading && <Loading/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} imageURL={element.urlToImage?element.urlToImage:"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-12/d73124fa-3632-4e93-9141-e5fa5b9ba660.jpg"} url={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page <=1} className="btn btn-primary" onClick={this.handlePrevPage}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News 