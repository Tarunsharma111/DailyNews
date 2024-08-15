import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

    const [articles, setArticles] =  useState([])
    const [loading, setLoading] =  useState(true)
    const [page, setPage] =  useState(1)
    const [totalResult, setTotalResult] =  useState(0)
 
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }



   const updateNews =  async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc1cae0bbf514f2faa00df0d7fac8206&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResult(parseData.totalResult)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() =>{
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`
        // eslint-disable-next-line 
    }, [])
 


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc1cae0bbf514f2faa00df0d7fac8206&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResult(parseData.totalResult)
    }



        return (
            <>
                <h1 className='text-center' style={{ margin: '35px 0px',marginTop: '90px', color: props.mode === 'dark' ? 'white' : 'black'}}>DailyNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Loader />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResult}
                    loader={<Loader />}
                >

                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url} >
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} style={{color: props.mode === 'dark' ? 'white' : 'black',backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
}

News.defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'sports'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News
