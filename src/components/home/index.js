import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import raccoon from '../../images/raccoon.png'
import griffin from '../../images/griffin-0.jpg'

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">It's a website about Griffin!</div>
      <img className="home-image" alt="it's griffin the cat" src={raccoon} />
      <div className="subtitle">He's a cat, I think <span role="img" aria-label="thinking-emoji">🤔</span></div>
      <AniLink 
      cover
      to={"/makeup"}
      direction="left"
      duration={2}
      bg={`
        url(${griffin})
        center / contain 
        no-repeat        
        fixed            
        padding-box      
        content-box      
        #8abca2      
      `}>
        <button className="learn-more">Learn More</button>
      </AniLink>
    </div>
  )
}
