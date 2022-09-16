import { ICard } from "../../types";
import './cards.css';

export function Card(data: ICard) {
  return (
    <div className="card">
      <img src={data.img} alt={data.title} />
      <h3> {data.title} </h3>
      <p> {data.period} </p>
      <p> {data.price} </p>
      <p> {data.description} </p>
    </div>
  )
}
