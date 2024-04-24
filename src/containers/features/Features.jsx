import React from 'react'
import { Feature } from '../../Components'
import './features.css'
const featuresData = [
  {
  title: 'Improve yourself in the age of Data ',
  text:'Data is the lifeblood of the digital age, driving insights, innovation, and decision-making across industries. ',

  },
  {
    title:'Assitant for Data and Software Engineers',
    text:'AI serves as a vital assistant to both data and software engineers.',

  },
  {
    title:'Unleashing the Power of AI',
    text:'Harnessing the capabilities of AI enables businesses to unlock unprecedented potential, revolutionizing industries through intelligent automation, predictive analytics, and personalized experiences. By leveraging AI-driven insights and innovations, organizations can optimize processes.'
  },
  {
    title:'The Future of AI',
    text:'The future of AI promises groundbreaking advancements, including enhanced human-machine collaboration, autonomous systems.'
  }

]

const Features = () => {
  return (
<div className='gpt3__features section__padding' id='features' >
  <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Here and It is you whow need to step into it.</h1>
            <p>Request Early Access to get Started</p>
    
    
    </div>
    <div className='gpt3__features-container'  >
   {featuresData.map((item,index)=>(
    <Feature title={item.title} text={item.text} key={item.text + index}/>

   ))}
  </div>

</div>
  )
}

export default Features