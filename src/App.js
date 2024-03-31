import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Confetes from './Draw.js';

const App = () => {
  // eslint-disable-next-line
  const [passwords, setPasswords] = useState(['dinamarca', 'neblina', 'circunferência', 'dezenove', 'tengam', 'junge', 'noveottosevenseiscinqvier']);
  // eslint-disable-next-line
  const [hints, setHints] = useState([
    'DICA 1: Aqui vai a dica de onde encontrar a primeira senha: \n Esse "golden material" é bege',
    'DICA 2: Agora vocês precisam encontrar nesta casa o componente químico NaCl 0,9%, vão, vão vão !!!',
    'DICA 3: Obrigado pelo Cloreto de Sódio! Já descobriram para que serve? Vamos continuar essa aventura no mundo da matemática? Em que situação, dentro dessa casa, foi necessário calcular as divisões de um círculo? ',
    'DICA 4: Essa foi tranquila, em !!! Depois brinquem com diferente divisões de círculos, vocês vão gostar! Usem um compasso! Agora vamos aprender um pouco de português: Já ouviram falar do estilo de poema chamado soneto? Vinícius de Moraes é um famoso escritor brasileiro, autor do poema chamado Soneto da Felicidade! Para ser considerado um soneto, o poema é escrito seguinto à risca uma métrica onde cada verso, cada linha, possui dez sílabas tonais. Tem mais alguma coisa nessa casa que tem dez lados? ',
    'DICA 5: Oxente, que vocês são feras! já chegaram até aqui! Vamos simplificar um pouco e falar de pokemon! Eu gosto muito do 0081, que tal essa dica?',
    'DICA 6: Hallo, ich habe ein Duolingo in dieser Sprache gefunden',
    'DICA 7: Sensacional !!!! Vocês já desvendaram quase todas e estão prontas para a última e mais dificil de todas !!! Prestem atenção essa senha tem diversas partes. Mas as dicas já foram dadas, a única coisa que eu posso dizer é que é tudo junto e minúsculas!!!! BOA SORTE !!!!',
  ]);
  const [correctPasswords, setCorrectPasswords] = useState(new Array(7).fill(false));
  const [message, setMessage] = useState(
    <>
    <div id='h2'>

      Bem-vindos, Rhuan Vitor e Beatriz!!!
      <br />
      Nossa aventura começa aqui, tragam sete senhas
      para desbloquearem a localização dos chocolates.
      <br /> 
      Será que vão conseguir?
      <br /> 
      Se não liberarem a localização até 12h ...
      Existe um dispositivo que ira derreter todo o chocolate!!!
      CORRAM !!!
      <br /> 
      Se precisarem de dica escrevam dica,
      seguido do número da dica que precisam.
      Comecem pela "dica1" !!!
      <br /> 
      E BOA SORTE !!!
    </div>
    </>
  );
  const [hintMessage, setHintMessage] = useState('');

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    const inputPassword = event.target.password.value;
    const index = passwords.indexOf(inputPassword);
    if (index !== -1) {
      
      setCorrectPasswords((prev) => {
        const newCorrectPasswords = [...prev];
        newCorrectPasswords[index] = true;
        return newCorrectPasswords;
      });
      if (index === 6) {
        setMessage(`A ÚLTIMA PISTA ESTÁ EM UM INSTRUMENTO!!!!!! \n FELIZ PASCOAA !!!!`);
        setHintMessage('');
      }else{
        setMessage(`Parabéns, vocês acertaram a senha da dica ${index + 1}!`);
        setHintMessage('');
      }
    } else if (inputPassword.startsWith('dica')) {
      const hintNumber = parseInt(inputPassword.substr(4)) - 1;
      if (hintNumber >= 0 && hintNumber < 7) {
        setHintMessage(hints[hintNumber]);
      }
    } else {
      setMessage(`Senha incorreta. Tente novamente.`);
    }
    event.target.reset();
  };

  const renderFlag = (index, correct) => {
    const flag = correct ? `flag${index + 1}.jpg` : `bw${index + 1}.jpg`;
    return <img src={(`./${flag}`)} alt={`Flag ${index + 1}`} />;
  };

  const renderFlags = () => {
    return (
      <div className="flags-container">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="flag-container">
            {renderFlag(index, correctPasswords[index])}
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="container">
      <h2>{message}</h2>
      {hintMessage && <p className="hint">{hintMessage}</p>}
      {renderFlags()}
      <form onSubmit={handlePasswordSubmit}>
        <label htmlFor="password">Digite a senha:</label>
        <input type="text" name="password" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default App;
