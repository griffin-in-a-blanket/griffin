import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import griffin from "../../images/griffin1.jpg"
import { start } from "../../utils"

export default function Schedule() {
  const data = useStaticQuery(graphql`
    query {
      clock: file(relativePath: { eq: "clock.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const clock = data.clock.childImageSharp.fluid

  return (
    <div className="schedule-container">
      <div className="title">Griffin's Important Daily Schedule</div>
      <Img
        className="diagram"
        fluid={clock}
        alt="contemporary cat clock"
      />
      <div className="subtitle">{`24 Hour Clocks > 12 Hour Clocks`}</div>
      <ul className="schedule">
        <li><span className="time gray">00:00 - 02:00</span> nap; i wonder what he's dreaming about</li>
        <li><span className="time play">02:00 - 03:30</span> zoomies; play with bottle cap</li>
        <li><span className="time gray">03:30 - 08:00</span> nap with sparse trips to food & water</li>
        <li><span className="time">08:00 - 09:00</span> vocal exercises; sit next to you sleeping; paw at you for attention; give up</li>
        <li><span className="time">09:00 - 10:30</span> wait for the first person to wake up; gimme attention jerks</li>
        <li><span className="time food">10:30 - 11:00</span> keep meowing and follow them around until fed</li>
        <li><span className="time food">11:00 - 12:00</span> stare at you until he gives up and knows that you're not giving him wet food so he goes to eat his dry food</li>
        <li><span className="time food">12:00 - 12:30</span> follow you around while you make food; otherwise known as tippy taps</li>
        <li><span className="time gray">12:30 - 16:00</span> nap; i wonder what he's dreaming about</li>
        <li><span className="time food">16:00 - 16:05</span> get up for water & food</li>
        <li><span className="time gray">16:05 - 18:00</span> nap; i wonder what he's dreaming about</li>
        <li><span className="time food">18:00 - 18:05</span> get up for water & food</li>
        <li><span className="time food">18:05 - 20:00</span> sit around while you make dinner and snack some more; gimme people food</li>
        <li><span className="time play">20:00 - 21:00</span> occasional play time (keep those hunting skillz sharp) and snoozes</li>
        <li><span className="time">21:00 - 21:30</span> sit on trash can and look outside at other cat in next building</li>
        <li><span className="time play">21:30 - 23:30</span> occasional play time and snoozes</li>
        <li><span className="time">23:30 - 00:00</span> looks out window for some relaxing raccoon watching</li>
      </ul>
      <div>
        <span role="img" aria-label="index-pointing-left- emoji">
        👈
        </span>
        <AniLink
          cover
          to={"/quiz"}
          direction="left"
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
          Griffin Quiz
        </AniLink>
        <span role="img" aria-label="index-pointing-left-emoji">
          {" "}
          👈
        </span>
      </div>
    </div>
  )
}
