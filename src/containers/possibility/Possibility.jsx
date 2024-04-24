import React from 'react'
import './possibility.css'
import possibilityImage from '../../assests/possibility.jpg'



const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility' >
      <div className='gpt3__possibility-image' > 
          <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Pre-Order your  Subscription Now</h4>
        <h1 className='gradient__text'>"Unlock Tomorrow: AI-Powered Insights for Future Subscription"</h1>
        <p>"Embark on a transformative journey into the future of subscription services, where the power of AI revolutionizes your experience, providing personalized insights, seamless interactions, and innovative solutions tailored precisely to your preferences and needs</p>
          <h4>Subscirbe Now</h4>
      </div>
    </div>
  )
}

export default Possibility
