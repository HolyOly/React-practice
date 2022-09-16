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
      <Card
        title={data[0].title}
        price={data[0].price}
        period={data[0].period}
        description={data[0].description} img={ data[0].img}></Card>
    </div>
  );
}

export default App;

// title={ data.title }
//         price={ data.price }
//         period={ data.period }
//         description={ data.description
