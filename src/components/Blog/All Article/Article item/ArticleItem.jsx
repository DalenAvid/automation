import React from 'react'
import './ArticleItem.scss'

const ArticleItem = ({img, title, description, author, date}) => {
    return (
        <>

            <div className="article-item">
                <img className='article-item__img' src={img} alt="titile" />
                <div className="article-item__content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="article-item__meta">
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ArticleItem
