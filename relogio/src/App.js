import React from 'react';
import './App.css';

// Função que formata a data. Retorna apenas a hora
function FormattedDate(props) {
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

// Define a classe Clock que será renderizada dentro do App
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define o estado date pegado a data atual
      date: new Date()
    };
  }

  // Clico de vida que ocorre quando o Clock é inserido na DOM
  // Através do setInterval o relógio é atualizada a cada segundo
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  // Cliclo de vida que ocorre quando o Clock é removido da DOM
  // A função clearInterval limpa o relógio criado pelo setInterval
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // Define no state date a data atual toda vez que é chamda
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Pausa o relógio
  Pause() {
    clearInterval(this.timerId);
  }

  // Atualiza o relógio para hora atual
  Continue() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }
  
  // Renderiza o h1 e a função FormattedDate com o valor atual do state
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        {/* Chama a função FormattedDate e passa a date como prop */}
        <FormattedDate date = {this.state.date} />
        <button className="btn-Pause" onClick={() => this.Pause()}>Pause</button>
        <button className="btn-Continue" onClick={() => this.Continue()}>Continue</button>
      </div>
    )
  }
}

// Função principal invocada no index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Chama dois Clock's para mostrar suas independências */}
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

// Declara que a função App pode ser usada fora do seu escopo
export default App;
