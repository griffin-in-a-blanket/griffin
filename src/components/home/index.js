import React from 'react'
import { Link } from 'gatsby'
import raccoon from '../../images/raccoon.png'

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">It's a website about Griffin!</div>
      <img className="home-image" alt="it's griffin the cat" src={raccoon} />
      <div className="subtitle">He's a cat, I think 🤔</div>
      <Link to={'/makeup'} >
        <button className="learn-more">Learn More</button>
      </Link>
    </div>
  )
}
