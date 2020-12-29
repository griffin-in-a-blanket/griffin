import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-2.jpg'


export default function Facts() {
  return (
    <div className="facts-container">
      <div className="title">Fun Griffin Facts</div>
      <div className="facts">
        <div>Hypoallergenic</div>
        <div>Needy & food driven</div>
        <div>Knows some neat tricks like giving you his paw</div>
        <div>Prefers being in a room with someone</div>
        <div>Has cat asthma</div>
        <div>Meows for food and then doesn't eat it and walk away</div>
      </div>
      <AniLink  cover
      to={"/quiz"}
      direction="up"
      duration={2}
      bg={`
        url(${griffin})
        center / contain 
        no-repeat        
        fixed            
        padding-box      
        content-box      
        #8abca2      
      `}>Go here for more fun</AniLink>
    </div>
  )
}
