import React from 'react'
import './Articlelist.scss'
import ArticleItem from './Article item/ArticleItem.jsx'

const Articlelist = () => {
    const articleItems = [
        {
            title: 'Massa eu in laoreet enim augue vulputate nunc.',
            author: 'Samatha Leuthex',
            date: 'May 5, 3 min read',
            image: './images/car.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.'
        },
        {
            title: 'Feugiat a euismod arcu feugiat posuere morbi.',
            author: 'Samatha Leuthex',
            date: 'May 5, 3 min read',
            image: './images/wall.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.'
        },
        {
            title: 'Sociis purus pellentesque faucibus vitae et felis.',
            author: 'Samatha Leuthex',
            date: 'May 5, 3 min read',
            image: './images/flora.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.'
        },
        {
            title: 'Cursus feugiat mi pellentesque mauris sed eu.',
            author: 'Samatha Leuthex',
            date: 'May 5, 3 min read',
            image: './images/sea.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.'
        },
        {
            title: 'A morbi arcu curabitur etiam fringilla augue.',
            author: 'Samatha Leuthex',
            date: 'May 5, 3 min read',
            image: './images/laptop.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.'
        }
    ]
    return (
        <>
            <section>
                <div className="wrap">
                    <div className="article-list">
                        {articleItems.map((item, index) => (
                            <ArticleItem key={index} img={item.image} title={item.title} description={item.text} author={item.author} date={item.date} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Articlelist
