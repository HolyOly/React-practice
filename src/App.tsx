import React from 'react';
import { Card } from './components/cards/card';
// import { Cards } from './components/cards/cards';
// import { InputText } from './components/inputText.ts/inputText';
import { NavEl } from './components/navigaton/navigation';
import { data } from './data/data';

function App() {
  return (
    <div className='class-root'>
      <NavEl></NavEl>
      <div className="cards">
        <Card {...data[0]}></Card>
        <Card {...data[1]}></Card>
        <Card {...data[2]}></Card>
      </div>
    </div>
  );
}

export default App;

// title={ data.title }
//         price={ data.price }
//         period={ data.period }
//         description={ data.description
