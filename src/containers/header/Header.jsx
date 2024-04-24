import React from 'react'
import people from '../../assests/people.png'
import ai from '../../assests/ai.jpg'
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>"Unleash the Power of AI with GPT-3: Transforming Ideas into Reality"</h1>
        <p>Experience the future with our GPT-3 website! Powered by artificial intelligence, GPT-3 transforms your ideas into reality effortlessly. Say goodbye to mundane tasks and hello to innovation. From writing captivating content to generating creative solutions, GPT-3 opens doors to endless possibilities. Join us as we embark on an exciting journey into the world of AI.</p>
        
        
        <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Email Address'/>
            <button type="button">Get Started</button>

        </div>
        
      <div className='gpt3__header-content__people'>
        <img src={people} alt='people'  />
        <p>2,500 People used in last 24 Hours</p>
      </div>

      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
        </div>
      
    </div>
  )
}

export default Header