import React from 'react'
import Article from '../../Components/Article/Article'
import {blog01,blog02,blog03,blog04,blog05} from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'>Visit our Blogs</h1>
      </div>


          <div className='gpt3__blog-container'>
            <div className='gpt3__blog-container_groupA'>
              <Article imgUrl={blog01} date="Feb 07, 2021"  title="Unveiling the Future: Exploring the Transformative Power of Artificial Intelligence"/>
            </div>
          <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} date="Aug 22, 2022" title="Tomorrow's Promise: Navigating the Horizon of Artificial Intelligence's Future" />
            <Article imgUrl={blog03} date="Apr 19, 2022" title="Unlocking Productivity: The Power of AI Efficiency in Today's Industries" />
            <Article imgUrl={blog04}date="Nov 04, 2022" title="Navigating the Perils: Understanding the Potential Dangers of AI in Modern Society" />
            <Article imgUrl={blog05} date="July 16, 2023" title="Beyond Binary: Why AI Will Never Replace the Artistry of Developers" />

           </div>
          </div>
    </div>
  )
}

export default Blog