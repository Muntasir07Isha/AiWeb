import React from 'react'
import { Feature } from '../../Components'
import './whatGpt3.css'



const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT3" text="GPT-3 represents a leap into the future of AI, where machines comprehend and generate human-like text with unprecedented fluency and creativity. Its vast neural network simulates human intelligence on a scale never seen before, offering limitless possibilities for innovation across industries. " />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Take the world to whole new level which is beyond our imagination</h1>
          <p>Explore More</p>
          <div className='gpt3__whatgpt3-container'></div>
              <Feature title="Chatbot" text="Chatbots herald a future where conversations with machines are seamless and indistinguishable from human interaction. Empowered by advanced natural language processing, they anticipate needs, offer personalized assistance, and elevate user experiences across various platforms. In this future, chatbots become indispensable companions"/>
              <Feature title="Machine Learing" text="Machine learning, the backbone of AI, enables systems to learn from data, adapt, and improve performance autonomously. With its ability to uncover patterns and make predictions, machine learning reshapes industries and drives innovation. From personalized recommendations to autonomous vehicles, its applications are diverse and transformative. As algorithms become more refined, the potential for revolutionizing our lives grows exponentially"/>
              <Feature title="Education" text="AI education is essential for equipping individuals with the skills to navigate the evolving digital landscape. By offering insights into machine learning, data analysis, and AI ethics, it empowers learners to leverage AI responsibly and innovatively. With AI education, individuals can actively contribute to shaping a future where technology serves humanity's best interests."/>

      </div>
    </div>
  )
}

export default WhatGPT3