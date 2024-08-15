import React from 'react'

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source, style } = props;
    return (
        <div className='my-3'>
            <div className="card" style={style}>

                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    <span className=" badge rounded-pill bg-danger"> {source} </span>
                </div>

                <img src={!imageUrl ? "https://images.news18.com/ibnlive/uploads/2023/09/electronics-169502133416x9.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text" ><small>By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
