import { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      repositories: [],
      username: ''
    };
  };

  reposQuery = (e) => {
    e.preventDefault();

    fetch(`http://api.github.com/users/${this.state.username}/repos?sort=created&per_page=10`)
    .then(response => response.json())
    .then(data => this.setState({repositories: data}))
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <header>
          <h1>Github Repositories</h1>
        </header>
        
        <section id="input">
          <form onSubmit={this.reposQuery}>
            <input 
              type='text'
              value={this.state.username}
              onChange={e => this.setState({username: e.target.value})}
            />
            <button type='submit'>Buscar</button>
          </form>
        </section>

        <section>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Tamanho</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.repositories.map(r => {
                  return (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.name}</td>
                      <td>{r.description}</td>
                      <td>{r.created_at}</td>
                      <td>{r.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    )
  }
};
