import React from 'react'
import './footer.css'
import gpt3Logo from '../../assests/logo.svg'


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Wait No More! Invest a small amount and step into future</h1>
      
      
      </div>
    
          <div className='gpt3__footer-btn' >
              <p> Subscribe Early</p>

          </div>
        <div className='gpt3__footer-links'>
              <div className='gpt3__footer-links-logo'>
                <img src={gpt3Logo} alt='logo'/>
                <p>All Rights Reserved</p>
              </div>

                <div className='gpt3__footer-links_div'>
                  <h4>Links</h4>
                  <p>History</p>
                  <p>Social Media</p>
                  <p>Data</p>
                  <p>Contact</p>

                </div>

                <div className='gpt3__footer-links_div'>
                  <h4>Industry</h4>
                  <p>Terms and Condition</p>
                  <p>Social Media</p>
                  <p>Privacy & Policy</p>
                  <p>Contact</p>

                </div>

                <div className='gpt3__footer-links_div'>
                  <h4>Get in Touch</h4>
                  <p>Email</p>
                  <p>GPT3-HeadQuarer@email.com</p>
                  <p>Privacy & Policy</p>
                  <p>Contact</p>

                </div>

                <div className='gpt3__footer-links_div'>
                  <h4>2024 GPT-3@. All rights Reserved</h4>
               

                </div>





        </div>

    </div>
  )
}

export default Footer