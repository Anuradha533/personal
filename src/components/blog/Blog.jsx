import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7315813419155181571/"><span className="blog__category">Hackathon CSU</span></a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7315813419155181571/"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Hackathon</h3>
                        <div className="blog__meta">
                            <span className="blog__dot">Team MAYA</span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog