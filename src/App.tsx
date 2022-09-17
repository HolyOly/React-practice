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
      <Card {...data[0]}></Card>
    </div>
  );
}

export default App;

// title={ data.title }
//         price={ data.price }
//         period={ data.period }
//         description={ data.description
