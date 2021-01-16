import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import griffin from "../../images/griffin0.jpg"
import { start } from "../../utils"

export default function NotFound() {
  const data = useStaticQuery(graphql`
    query {
      griff: file(relativePath: { eq: "business-cat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1023) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const griff = data.griff.childImageSharp.fluid
  return (
    <div className="whoops-container">
      <div className="title">404  /ᐠ ̞  ‸  ̞ᐟ\ﾉ</div>
      <div className="subtitle">
        Whoa! What are you doing here?? Can't a business cat get some privacy.
      </div>
      <Img className="whoops-image" fluid={griff} alt="business cat filling out spreadsheets"/>
      <div className="subtitle margin">You owe Griffin a treat.</div>
      <AniLink
        className="home-link"
        cover
        to={"/"}
        direction="up"
        onClick={start}
        duration={2}
        bg={`
        url(${griffin})
        center / contain 
        no-repeat        
        padding-box      
        content-box      
        #8abca2      
      `}
      >
        <button className="learn-more">
          <span role="img" aria-label="index-pointing-up-emoji">
            ☝️
          </span>
          Sorry
          <span role="img" aria-label="index-pointing-up-emoji">
            {" "}
            ☝️
          </span>
        </button>
      </AniLink>
    </div>
  )
}
