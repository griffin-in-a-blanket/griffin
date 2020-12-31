import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-3.jpg'
import {questions} from '../constants'


export default class index extends Component {
  constructor() {
    super() 
    this.state = {
      questionsList: [],
      choice: '',
      answered: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({questionsList: [questions[0]]})
  }

  handleClick() {

  }

  handleSubmit() {

  }

  render() {
    const {questionsList} = this.state;
    return (
      <div className="quiz-container">
        <div className="title">Here's a quiz for no reason</div>
        <div className="subtitle">Now that you kinda know how Griffin is like, test your cat knowledge with this graded quiz</div>
        <div className="questions-container">
          {questionsList.map((q, i) => (
            <div className="question-container" key={q.id}>
              <div className="question">{i+1}. {q.question}</div>
              <div className="container">
                <div className="answers-container">
                  <div className="answer">A. {q["A"]}</div>
                  <div className="answer">B. {q["B"]}</div>
                  <div className="answer">C. {q["C"]}</div>
                  <div className="answer">D. {q["D"]}</div>
                </div>
                <img className="answer-img" src={q["img"]}/>
              </div>
            </div>
          ))}
        </div>
        <button className="btn">Submit</button>
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
        Start this journey over
      </AniLink>
    </div>
    )
  }
}
