import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-0.jpg'
import Griffin from '../griffin'

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">It's a website about Griffin!</div>
      <Griffin />
      <div className="subtitle">He's a cat, I think 🤔</div>
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
