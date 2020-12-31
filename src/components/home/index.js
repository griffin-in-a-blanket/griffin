import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import raccoon from '../../images/raccoon.png'
import griffin from '../../images/griffin-0.jpg'
import {start} from '../../utils'

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">It's a website about Griffin!</div>
      <img className="home-image" alt="it's griffin the cat" src={raccoon} />
      <div className="subtitle">He's a cat, I think <span role="img" aria-label="thinking-emoji">🤔</span></div>
      <AniLink 
      className="home-link"
      cover
      to={"/makeup"}
      direction="up"
      onClick={start}
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
        <button className="learn-more">
          <span role="img" aria-label="index-pointing-up-emoji">☝️</span>
            Learn More
          <span role="img" aria-label="index-pointing-up- emoji"> ☝️</span>
        </button>
      </AniLink>
    </div>
  )
}
