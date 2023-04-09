import React, { useState } from 'react';
import './App.css';

const App = () => {
  // eslint-disable-next-line
  const [passwords, setPasswords] = useState(['senha secreta 123', 'marshmallow', 'mas que chulé', 'e.t. telefone casa', 'i believe i can fly', 'tu tu tu tu', 'eevee raboot gengar']);
  // eslint-disable-next-line
  const [hints, setHints] = useState([
    'DICA 1: Aqui vai a dica de onde encontrar a primeira senha: \n em duas partes: "o que o exército faz" do "veículo automotor"',
    'DICA 2: Muy bien mis queridos, ahora un consejo en español para calentar sus corazones: pastel en la cara',
    'DICA 3: очень хорошо узнал что это русский! пароль 3 внутри носка, удачи!',
    'DICA 4: Parabéns mais uma vez! Essa senha 3 não foi fácil né!? \n Espero que nossos segredos estejam bem guardados e seguros, porque a dica para a senha número 4 está escondida junto com uma história de extraterrestre. \n     Vamos lá! Boa sorte !!!',
    'DICA 5: Parabéns! Vocês são uma equipe e tanto!! Se eu pudesse emitir som agora mesmo seria a risada do Alf, se não conhecem, fica a dica para assistirem , há há ha !!! \n Para a dica da senha 5 eu vou dizer uma coisa, escondi na toca das lagartixas !!! Boa sorte !!! Podem pedir ajuda de alguém bem alto pq eu posso ter exagerado nesse esconderijo',
    'DICA 6: Incrível!!!! Mais uma senha desvendada!!! Garanto que não foi tão difícil assim para vocês, nosso segredo ainda está seguro, e vamos logo para a dica 6, atenção essa dica é a preparação para a senha final, então prestem muita atenção ! \n (🧠- REBRO) + (🐙 - LA) + 🏡 + ( 🎲 - da ) + 2x(👠- sa - to) + i \n Diquinha: essas imagens se chamam emojis e representam palavras',
    'DICA 7: Sensacional !!!! Vocês já desvendaram quase todas e estão prontas para a última e mais dificil de todas !!! Prestem atenção essa senha tem tres partes em uma só, Respirem fundo... e sigam .... Existe um universo cheio de criaturas mágicas catalogadas, que vivem tanto na natureza quanto com seus treinadores, a partir dos números de todas as dicas que vocês encontraram na jornada e um pouco de lógica vocês vão encontrar o número e depois a senha que estão procurando!!!! BOA SORTE !!!!',
  ]);
  const [correctPasswords, setCorrectPasswords] = useState(new Array(7).fill(false));
  const [message, setMessage] = useState(
    `Bem-vindos, Rhuan Vitor e Beatriz!!! \n
    Nossa aventura começa aqui, tragam sete senhas \n
    para eu saber que são vocês mesmos e eu conto \n
    se trouxe ovos para vocês! \n
    Se precisarem de dica escrevam dica, \n
    seguido do número da dica que precisam. \n
    Comecem pela dica1 !!! \n
      E BOA SORTE !!!
    `);
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
        setMessage(`OS OVOS ESTAO EMBAIXO DA CAMA DOS PAIS!!!!!! \n FELIZ PASCOAA !!!!`);
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
      <h1>{message}</h1>
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
