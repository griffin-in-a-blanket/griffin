import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-1.jpg'

export default function Makeup() {
  return (
    <div className="makeup-container">
      <div className="title">What is he made out of?</div>
      <div className="ingredients">
        <div>50% floof</div>
        <div>Raccoon</div>
        <div>beans</div>
        <div>sass</div>
      </div>
      <AniLink 
      cover
      to={"/facts"}
      direction="right"
      duration={2}
      bg={`
        url(${griffin})
        center / contain 
        no-repeat        
        fixed            
        padding-box      
        content-box      
        #8abca2      
      `}
      >
        <a className="learn-more">Griffin Facts</a>
      </AniLink>
    </div>
  )
}
