import React from 'react'
import './styles.css'

const NewsArticles = ({ articles, activeArticle }) => {
    return (
        <div className='container'>
            {
                articles.map((article, idx) => (
                    <div key={article.url} id={idx + 1}>
                        <a href={article.url} target='_blank' rel="noreferrer" className={activeArticle === idx ? 'active-article article' : 'article'}>
                            <img src={article.urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} alt='' className='article-image' />
                            <div className='article-title'>
                                {article.title}
                            </div>
                            <hr className='line' />
                            <div className='article-description'>
                                {article.description}
                            </div>
                            <p className='pageNumber'>
                                {idx + 1}
                            </p>
                        </a>
                    </div>
                ))
            }
        </div >
    )
}

export default NewsArticles