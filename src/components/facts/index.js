import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import {answer, griffinTraits, traits} from '../constants';
import griffin from '../../images/griffin-2.jpg'

export default class index extends Component {
  constructor() {
    super() 
    this.state = {
      desired: [],
      submit: false,
      score: 0,
      positives: [],
      negatives: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(trait) {
    let {desired} = this.state;
    if (desired.lastIndexOf(trait) < 0) {
      desired = desired.concat(trait)
      this.setState({desired});
    } else {
      desired.splice(desired.lastIndexOf(trait), 1)
      this.setState({desired});
    }
  }

  handleSubmit() {
    const {desired, submit} = this.state;
    if (submit) return;
    let score = 0;
    if (desired.lastIndexOf("i don't like cats") > -1) {
      score = 0;
      this.setState({submit: true, score});
      return;
    }
    for (let i = 0; i < desired.length; i++ ) {
      const trait = desired[i];
      if (griffinTraits.lastIndexOf(trait) > -1) score++;
      else score--;
    }
    if (score <= 0) score = 0;
    else if (score <= 4) score = 1;
    else if (score <= 8) score = 2;
    else score = 3;
    this.setState({submit: true, score})
  }

  render() {
    const {desired, submit, score} = this.state;

    return (
      <div className="facts-container">
      <div className="title">Will I like Griffin?</div>
      <div className="subtitle">Let's find out! What's your ideal cat companion?</div>
      <div className="traits-container">
        {traits.map((trait, i) => (
          <button className="trait" key={i} onClick={() => this.handleClick(trait)} style={{background: desired.lastIndexOf(trait) > -1 ? '#276544': '', color: desired.lastIndexOf(trait) > -1 ? '#fff' : '', opacity: submit && griffinTraits.lastIndexOf(trait) < 0 ? '0.5' : ''}}>
            {trait}
          </button>
        ))}
      </div>
      <button className="btn" onClick={()=> {this.handleSubmit()}}>Submit</button>
      {submit ? 
        <div className="result">
          <div className="subtitle">
            {answer[score]}
          </div>
        </div> 
        :
        <span />
      }
      <div>
      <span role="img" aria-label="index-pointing-down- emoji">👇</span>
      <AniLink  
        className="link"
        cover
        to={"/quiz"}
        direction="down"
        duration={2}
        bg= 
          {`
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
      <span role="img" aria-label="index-pointing-down- emoji"> 👇</span>
      </div>

    </div>
    )
  }
}

