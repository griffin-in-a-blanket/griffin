import React, { Component } from 'react'
import Modal from 'react-modal';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import griffin from '../../images/griffin-3.jpg'
import {questions} from '../constants'
import {start} from '../../utils'


export default class index extends Component {
  constructor() {
    super() 
    this.state = {
      questionsList: [],
      choice: '',
      correct: [],
      answered: [],
      modalIsOpen: false,
      currentIdx: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({questionsList: [questions[0]]})
  }

  handleClick(choice, q) {
    this.setState({choice, currentIdx: q.id});
  }

  handleSubmit() {
    const {currentIdx, questionsList, choice, correct, answered} = this.state;
    const q = questionsList[currentIdx];
    choice === q.answer ? correct.push(true) : correct.push(false);
    answered.push(true);
    if (questionsList.length < questions.length) {
      questionsList.push(questions[questionsList.length]);
      this.setState({questionsList, correct})
    } 
    this.setState({answered});
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, answered: true });
  }

  goBack() {
    this.setState({ modalIsOpen: false });
  }


  render() {
    const {questionsList, modalIsOpen, answered, } = this.state;
    return (
      <div className="quiz-container">
        <div className="title">Here's a quiz for no reason</div>
        <div className="subtitle">Now that you kinda know how Griffin is like, test your cat knowledge with this 3 question quiz</div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => this.closeModal()}
          contentLabel="You Sure? Modal"
          ariaHideApp={false}
          shouldCloseOnEsc={false}
        >
          <div className="modalHeader" style={{fontSize: '1.3em', fontWeight: '600', textAlign: 'center', paddingBottom: '20px'}}>Is that your final answer?</div>
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#652b27', fontSize: '1.188em', lineHeigh: '1.5em', padding: '5px'}} onClick={() => {this.closeModal(); this.handleSubmit()}}>Yes</button>
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#652b27', fontSize: '1.188em', lineHeigh: '1.5em', padding: '5px'}} onClick={() => {this.goBack()}}>No</button>

        </Modal>
        <div className="questions-container">
          {questionsList.map((q, i) => (
            <div className="question-container" key={q.id}>
              <div className="question">
                {i+1}. {q.question}
              </div>
              <div className="container">
                <div className="answers-container">
                  <button disabled={answered[q.id] ? 'disabled' : ''} className="answer" onClick={() => {this.handleClick(q["A"], q); this.openModal()}} style={{opacity: answered[q.id] && q.answer !== "A" ? '0.5' : ''}}>A. {q["A"]}</button>
                  <button disabled={answered[q.id] ? 'disabled' : ''} className="answer" onClick={() => {this.handleClick(q["B"], q); this.openModal()}} style={{opacity: answered[q.id] && q.answer !== "B" ? '0.5' : ''}}>B. {q["B"]}</button>
                  <button disabled={answered[q.id] ? 'disabled' : ''} className="answer" onClick={() => {this.handleClick(q["C"], q); this.openModal()}} style={{opacity: answered[q.id] && q.answer !== "C" ? '0.5' : ''}}>C. {q["C"]}</button>
                  <button disabled={answered[q.id] ? 'disabled' : ''} className="answer" onClick={() => {this.handleClick(q["D"], q); this.openModal()}} style={{opacity: answered[q.id] && q.answer !== "D" ? '0.5' : ''}}>D. {q["D"]}</button>
                </div>
                {answered[q.id] ? 
                <img className="answer-img" src={q["img"]} alt={q.alt}/>
                :
                <div className="answer-img" />
                }
              </div>
              <div className="excerpt">
                {answered[q.id] ? `${q.excerpt}` : ''}
              </div>
            </div>
          ))}
           
        </div>
        <div>
        <span role="img" aria-label="index-pointing-left- emoji">👈</span>
        <AniLink 
        cover
        to={"/"}
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
        Start this journey over
      </AniLink>
      <span role="img" aria-label="index-pointing-left-emoji"> 👈</span>
      </div>
    </div>
    )
  }
}

const customStyles = {
  content: {
    background: '#8abca2',
    width: '250px',
    height: '150px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: 'none',
    boxShadow: '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)'
  },

};
