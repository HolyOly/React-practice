import React, { useState } from "react";
import { ICard } from "../../types";
// import { Modal } from "../modal/Modal";
import './cards.css';

export function Card(data: ICard) {
  const [dscrtn, setDscrtn] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="card"
      onClick={ () => setModal( val => !val) }
    >
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
      {/* <Modal {...data}></Modal> modal-container*/}
      <div className={ modal ? 'modal-container modal-show' : 'modal-container modal-hidden' }>
        <div className="modal">
          <img className="modal-img" src={data.img} alt={data.title} />
          <h3 className="title"> {data.title} </h3>
          <p className="period"> {data.period} </p>
          <p className="price"> {data.price} </p>
          <p className="description"> {data.description} </p>
        </div>
      </div>
    </div>
  )
}
