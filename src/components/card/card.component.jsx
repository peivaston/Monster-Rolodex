import React from "react";
import '../card/card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${props.pilot.id}?set=set2`} alt="pilot" />
    <h2>{props.pilot.name}</h2>
    <p>{props.pilot.email}</p>
    <p2>{props.pilot.website}</p2>
  </div>
)