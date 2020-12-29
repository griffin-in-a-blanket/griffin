import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-3.jpg'


export default function Quiz() {
  return (
    <div className="quiz-container">
      <div className="title">Here's a quiz for no reason</div>
      <AniLink 
      cover
      to={"/"}
      direction="down"
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
        <a className="learn-more">Start this journey over</a>
      </AniLink>
    </div>
  )
}
