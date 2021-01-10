import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { answer, griffinTraits, traits } from "../constants"
import { start } from "../../utils"

import griffin from "../../images/griffin2.jpg"

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      desired: [],
      submit: false,
      score: 0,
      positives: [],
      negatives: [],
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(trait) {
    let { desired } = this.state
    if (desired.lastIndexOf(trait) < 0) {
      desired = desired.concat(trait)
      this.setState({ desired })
    } else {
      desired.splice(desired.lastIndexOf(trait), 1)
      this.setState({ desired })
    }
  }

  handleSubmit() {
    const { desired, submit } = this.state
    if (submit) return
    let score = 0
    if (desired.lastIndexOf("i don't like cats") > -1) {
      score = 0
      this.setState({ submit: true, score })
      return
    }
    for (let i = 0; i < desired.length; i++) {
      const trait = desired[i]
      if (griffinTraits.lastIndexOf(trait) > -1) score++
      else score--
    }
    if (score <= 0) score = 0
    else if (score <= 4) score = 1
    else if (score <= 8) score = 2
    else score = 3
    this.setState({ submit: true, score })
  }

  render() {
    const { desired, submit, score } = this.state

    return (
      <div className="facts-container">
        <div className="title">Will I like Griffin?</div>
        <div className="subtitle">
          Let's find out! What's your ideal cat companion?
        </div>
        <div className="traits-container">
          {traits.map((trait, i) => (
            <button
              className="trait"
              key={i}
              onClick={() => this.handleClick(trait)}
              style={{
                background: desired.lastIndexOf(trait) > -1 ? "#276544" : "",
                color: desired.lastIndexOf(trait) > -1 ? "#fff" : "",
                opacity:
                  submit && griffinTraits.lastIndexOf(trait) < 0 ? "0.5" : "",
              }}
            >
              {trait}
            </button>
          ))}
        </div>
        <button
          className="btn learn-more"
          onClick={() => {
            this.handleSubmit()
          }}
        >
          Submit
        </button>
        {submit ? (
          <div className="result">
            <div className="subtitle">{answer[score]}</div>
            <div className="context">
              Let me tell you about Griffin. He is a{" "}
              <span className="keyword">affectionate</span> boi who prefers to
              be in a room with someone. After getting his head scritches, he
              goes to sleep for hours (gotta conserve energy for those 4AM
              runs). He loves new visitors, although there is a limit of 2 or he
              will be overwhelmed. He will poke you in the morning with his paw
              to get attention and after he is satisfied, he goes to sleep
              again. At night, he runs to every window to look at the raccoons
              outside. Tis the simple life of Griffin.
            </div>
          </div>
        ) : (
          <span />
        )}
        <div>
          <span role="img" aria-label="index-pointing-right- emoji">
          👉
          </span>
          <AniLink
            className="link"
            cover
            to={"/makeup"}
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
            Go here for more fun
          </AniLink>
          <span role="img" aria-label="index-pointing-right- emoji">
            {" "}
            👉
          </span>
        </div>
      </div>
    )
  }
}
