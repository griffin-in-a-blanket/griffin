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
      <div>
      <span role="img" aria-label="index-pointing-right- emoji">👉</span>
      <AniLink 
      cover
      to={"/facts"}
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
      `}
      >
        Griffin Facts 
      </AniLink>
      <span role="img" aria-label="index-pointing-right-emoji"> 👉</span>
      </div>
    </div>
  )
}
