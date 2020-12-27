import React from 'react'
import { Link } from "gatsby"

export default function Makeup() {
  return (
    <div className="makeup-container">
      <div className="title">What is he made out of?</div>
      <div className="ingredients">
        <div>50% floof</div>
        <div>Raccoon</div>
        <div>beans</div>
        <div>sass</div>
      </div>
      <Link to={'/facts'} >
        <a className="learn-more">Griffin Facts</a>
      </Link>
    </div>
  )
}
