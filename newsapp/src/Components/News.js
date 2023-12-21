import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export class News extends Component {
  
  static defaultProps = {
    pageSize: 6,
    country: "us"
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsHero`
  }

  async updateNews(){
    this.props.progress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38f8c30cb0b142a092f8c4c7356baba3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
        loading: false});
    this.props.progress(100)

  }

  async componentDidMount(){
    this.updateNews();
  }

  fetchMoreData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38f8c30cb0b142a092f8c4c7356baba3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults,
        loading: false,
      page: this.state.page + 1});
  }

  // handlePrevPage = async ()=>{
  //   this.setState({page: this.state.page -1})
  //   this.updateNews();
  // }

  // handleNextPage = async ()=>{
  //   this.setState({page: this.state.page +1})
  //   this.updateNews();
  // }

  capitalizeFirstLetter = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <>
        <h3 className='text-center my-3'>NewsHero-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
        {this.state.loading&&<Loading/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.articles.length }
          loader={<Loading/>}
        >
          <div className="container">
        <div className="row">
          {this.state.articles.map((element,index) => {
            return <div className="col-md-4" key={index}>
              <NewsItem title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} 
              imageURL={element.urlToImage?element.urlToImage:"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-12/d73124fa-3632-4e93-9141-e5fa5b9ba660.jpg"} 
              url={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page <=1} className="btn btn-primary" onClick={this.handlePrevPage}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextPage}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News 