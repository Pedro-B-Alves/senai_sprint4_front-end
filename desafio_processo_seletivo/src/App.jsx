import logo from './logo.svg';
import './App.css';

class Pesquisa extends Component{
  constructor(props){
    super(props);
    this.state = {
      usuario:''
    }
  }
}

FazerPesquisa = (usuario) => {
  fetch('https://api.github.com/'+usuario+'/repos')

  .then(resposta => resposta.json())

  .catch( erro => console.log(erro) )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form >
          <input type="text" placeholder="Nome Usuario"/>
          <button>Pesquisar</button>
        </form>
        
      </header>
    </div>
  );
}

export default App;
