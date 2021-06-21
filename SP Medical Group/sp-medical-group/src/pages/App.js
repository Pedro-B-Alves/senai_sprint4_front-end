import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import "../assets/CSS/Login.css";
import { parseJwt, usuarioAutenticado } from "../services/auth";
import logo from "../assets/Imagens/Logo.png"
import logoTexto from "../assets/Imagens/logoTexto.png"
import usuario from "../assets/Imagens/usuario.png"

export default function App() {

  const [ email, setEmail ] = useState( '' );
  const [ senha, setSenha ] = useState( '' );
  const [ erroMensagem, setErroMensagem ] = useState( '' );
  const [ isLoading, setIsLoading ] = useState( false );

  let history = useHistory();

  // Função que faz a chamada para a API para realizar o login
    const efetuaLogin = (event) => {
        // Ignora o comportamento padrão do navegador (recarregar a página, por exemplo)
        event.preventDefault();

        // Remove a frase de erro do state erroMensagem e define que a requisição está em andamento
        setErroMensagem('') 
        setIsLoading(true)

        // Define a URL e o corpo da requisição
        axios.post('http://localhost:5000/api/login', {
            email : email,
            senha : senha})

        // Verifica o retorno da requisição
        .then(resposta => {
            // Caso o status code seja 200,
            if (resposta.status === 200) {
                // salva o token no localStorage,
                localStorage.setItem('usuario-login', resposta.data.token);
                // exibe o token no console do navegador
                console.log('Meu token é: ' + resposta.data.token);
                // e define que a requisição terminou
                setIsLoading(false)

                // Define a variável base64 que vai receber o payload do token
                let base64 = localStorage.getItem('usuario-login').split('.')[1];
                // Exibe no console o valor presente na variável base64
                console.log(base64);
                // Exibe no console o valor convertido de base64 para string
                console.log(window.atob(base64));
                // Exibe no console o valor convertido da string para JSON
                console.log(JSON.parse(window.atob(base64)));

                // Exibe no console apenas o tipo de usuário logado
                console.log(parseJwt().role);

                // Verifica se o tipo de usuário logado é Administrador ou Médico ou Paciente
                // Se for, redireciona para a página de Tipos Eventos
                if (parseJwt().role === '1' || parseJwt().role === '2' || parseJwt().role === '3') {
                    history.push('/listagem');
                    console.log('estou logado: ' + usuarioAutenticado());
                }

                // Se não for, redireciona para a página home
                else {
                    history.push('/')
                }
            }
        })

        // Caso haja um erro,
        .catch(() => {
            // define o state erroMensagem com uma mensagem personalizada e que a requisição terminou
            setErroMensagem('E-mail ou senha inválidos! Tente novamente.') 
            setIsLoading(false)
        })
    }

    // Função genérica que atualiza o state de acordo com o input
    // pode ser reutilizada em vários inputs diferentes
    const atualizaStateCampoEmail = (campo) => {
        setEmail(campo.target.value)
    };

    const atualizaStateCampoSenha = (campo) => {
      setSenha(campo.target.value)
    };

  return (
    <div>
      <div>
          <section>
                <div className="parteSuperior">
                    <Link to="/"><img class="imgLogo" src={logo} alt="Logo SP Medical Group"/></Link>
                    <Link to="/"><img class="imgTexto" src={logoTexto} alt="SP Medical Group"/></Link>
                </div>
          </section>
      </div>
      <div>
          <section>
            <div className="medicoLogin">
              <div className="blocoLogin">
                <form className="form" onSubmit={efetuaLogin}>
                  <div className="posicaoLogin">
                    <img src={usuario} alt="Usuário"/>
                    <p className="textoLogin">Login</p>
                  </div>
                  <br/>
                  <div>
                    <p className="textoDoLogin">Email</p>
                    <input className="inputLogin" type="text" id="login__email" name="email" value={email} onChange={atualizaStateCampoEmail}/>
                  </div>
                  <br/>
                  <div>
                    <div class="posicaoSenha">
                      <p className="textoDoLogin">Senha</p>
                      <Link to="/" className="textoDoLogin">Esqueceu?</Link>
                    </div>
                    <input className="inputLogin" type="password" id="login__password" name="senha" value={senha} onChange={atualizaStateCampoSenha}/>
                  </div>
                  <p style={{ color : 'red', textAlign : 'center'}}>{erroMensagem}</p>
                  <br/>                  
                  {
                    // Caso seja true, renderiza o botão desabilitado com o texto 'Loading...'
                    isLoading === true &&
                    <div className="item">
                      <button className="botao" id="btn__login" type="submit" disabled>Loading...</button>
                    </div>
                  }

                  {
                  isLoading === false &&
                  <div>
                    <button className="botao" id="btn__login" type="submit" disabled={email === '' || senha === '' ? 'none' : ''}>
                      Entrar
                    </button>
                  </div>
                  }
                </form>
              </div>
            </div>
          </section>
      </div>
    </div>
    
  );
}

