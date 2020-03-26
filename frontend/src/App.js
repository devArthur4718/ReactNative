import React, { useState} from 'react';

import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  //Retorna um array com duas posicoes com [valor, funcDeAtualizacao]

  function increment(){
    setCounter(counter + 1); 
   
  }


  return (
    <div>
         <Header > Semana Omnistack {counter} </Header>
         <button onClick={increment}>Incrementar</button>
    </div>
 
  );
}
 
export default App;
 