import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import griffin from "../../images/griffin-1.JPG"
import diagram from "../../images/griff.png"
import { start } from "../../utils"

export default function Makeup() {
  return (
    <div className="makeup-container">
      <div className="title">Anatomy of Griffin</div>

      <img
        src={diagram}
        className="diagram"
        alt="what is griffin made out of"
      />
      <div>
        <span role="img" aria-label="index-pointing-right- emoji">
          👉
        </span>
        <AniLink
          cover
          to={"/quiz"}
          direction="down"
          duration={2}
          onClick={start}
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
        <span role="img" aria-label="index-pointing-right-emoji">
          {" "}
          👉
        </span>
      </div>
    </div>
  )
}
