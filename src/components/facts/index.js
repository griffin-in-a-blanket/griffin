import React from 'react'
import { Link } from "gatsby"


export default function Facts() {
  return (
    <div className="facts-container">
      <div className="title">Fun Griffin Facts</div>
      <div className="facts">
        <div>Hypoallergenic</div>
        <div>Needy & food driven</div>
        <div>Knows some neat tricks like giving you his paw</div>
        <div>Prefers being in a room with someone</div>
        <div>Has cat asthma</div>
        <div>Meows for food and then doesn't eat it and walk away</div>
      </div>
      <Link to="/quiz">Go here for more fun</Link>
    </div>
  )
}
