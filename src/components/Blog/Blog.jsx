import React from 'react'
import './Blog.scss'
import Popular from './Popular/Popular'
import Articlelist from './All Article/Articlelist.jsx'

const Blog = () => {
    return (
        <>
            <section className='blog'>

                <div className="wrap">
                    <h2>Blog Afrianska</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

            </section>
            <section className='blog__search'>
                <div className="wrap">
                    <input type="text" placeholder="Search Article" />
                </div>
            </section>
            <Popular />
            <Articlelist />
        </>
    )
}

export default Blog
