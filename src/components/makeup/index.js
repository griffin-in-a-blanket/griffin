import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import griffin from "../../images/griffin-1.jpg";
import { start } from "../../utils"


export default function Makeup() {
  const data = useStaticQuery(graphql`
        query {
            griff: file(relativePath: { eq: "griff.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1023) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
  const griff = data.griff.childImageSharp.fluid;

  return (
    <div className="makeup-container">
      <div className="title">Anatomy of Griffin</div>
      <Img className="diagram" fluid={griff} alt="what griffin is made out of. floof and boops." />
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
