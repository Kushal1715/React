import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props)=> {
  


    

    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(true);
    const [totalResults,setTotalResults] = useState(0);
  

   const updateNews= async ()=>{
    props.progress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    props.progress(100)
  }

  useEffect(() => {
    updateNews();
    document.title = `${capitalizeFirstLetter(props.category)} - NewsHero`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  

 const fetchMoreData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setPage(page + 1);
  }

  // handlePrevPage = async ()=>{
  //   this.setState({page: page -1})
  //   this.updateNews();
  // }

  // handleNextPage = async ()=>{
  //   this.setState({page: page +1})
  //   this.updateNews();
  // }

  const capitalizeFirstLetter = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    return (
      <>
        <h3 style={{marginTop: '80px'}} className='text-center'>NewsHero-Top {capitalizeFirstLetter(props.category)} Headlines</h3>
        {loading&&<Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalResults !== articles.length }
          loader={<Loading/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element,index) => {
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
        <button type="button" disabled={page <=1} className="btn btn-primary" onClick={this.handlePrevPage}>&larr; Previous</button>
        <button type="button" disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-primary" onClick={this.handleNextPage}>Next &rarr;</button>
        </div> */}
      </>
    )
  
}
News.defaultProps = {
  pageSize: 6,
  country: "us"
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string
};

export default News 