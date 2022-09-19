import React, { useState } from "react";
import { ICard } from "../../types";
import './cards.css';

export function Card(data: ICard) {
  const [dscrtn, setDscrtn] = useState(false);
  return (
    <div className="card">
      <img src={data.img} alt={data.title} />
      <h3 className="title"> {data.title} </h3>
      <p className="period"> {data.period} </p>
      <p className="price"> {data.price} </p>
      <p className={ dscrtn ? 'show-description description' : 'description' }> {data.description} </p>
      <button 
        className="card-btn"
        type="button"
        onClick={ () => setDscrtn( val => !val) }
      >
      { dscrtn ? 'hide' : 'more...'}
      </button>
      { dscrtn && true}
    </div>
  )
}
