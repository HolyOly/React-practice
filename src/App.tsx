import React from 'react';
import { Card } from './components/cards/card';
import { Footer } from './components/footer/Footer';
import { NavEl } from './components/navigaton/Navigation';
import { data } from './data/data';

function App() {
  return (
    <div className='class-root'>
      <NavEl></NavEl>
      <div className="cards">
        <Card {...data[0]}></Card>
        <Card {...data[1]}></Card>
        <Card {...data[2]}></Card>
        <Card {...data[3]}></Card>
        <Card {...data[4]}></Card>
        <Card {...data[5]}></Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
