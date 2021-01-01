import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-0.jpg'
import Griffin from '../griffin'
import {start} from '../../utils'

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">It's a website about Griffin!</div>
      <Griffin />
      <div className="subtitle">Chonky cat or just floof? <span role="img" aria-label="thinking-emoji">🤔</span></div>
      <AniLink 
      className="home-link"
      cover
      to={"/facts"}
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
          <span role="img" aria-label="index-pointing-up-emoji"> ☝️</span>
        </button>
      </AniLink>
    </div>
  )
}
