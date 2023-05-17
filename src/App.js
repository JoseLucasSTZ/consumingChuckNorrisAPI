import './App.css';
import React, { useState } from 'react';

function App() {

  const [piada, setPiada] = useState('');
  function pegaDadosApi(evento) {
    evento.preventDefault();
    fetch("https://api.chucknorris.io/jokes/random")
      .then(resposta => resposta.json())
      .then(data => {
        setPiada(data.value)
      })
      .catch(erro => {
        console.error('Erro ao buscar os dados de cabra:', erro)
      })
  }

  return (
    <div>
      <form onSubmit={pegaDadosApi}>
        <label htmlFor="ftext">Pesquise uma piada do chuck norris</label>
        
        <input type="submit"></input>
      </form>

      {piada && <p>{piada}</p>}

    </div>
  );
}

export default App;
