import "../assets/CSS/Cadastro.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../assets/Imagens/Logo.png"
import logoTexto from "../assets/Imagens/logoTexto.png"
import { sair } from "../services/auth"

export default function Cadastro() {

    const [ idPaciente, setIdPaciente ] = useState( 0 );
    const [ idMedico, setIdMedico ] = useState( 0 );
    const [ data, setData ] = useState( new Date() );
    const [ situacao , setSituacao ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );

    function cadastrarConsulta(event){
        event.preventDefault();

        setIsLoading( true );

        axios.post('http://localhost:5000/api/consultums', {
            idPaciente : idPaciente,
            idMedico : idMedico,
            dataAgendamento : data,
            situacao : situacao
        })
        .then(resposta => {
            if (resposta.status === 201) {
                console.log('Consulta cadastrada!');
                setIsLoading( false );
            }
        })

        .catch(erro => console.log(erro));
    };

    return (
        <div>
            <div>
                <section>
                    <div className="parteSuperiorCadastro">
                        <div className="parteSuperiorEsquerda">
                            <Link to="/"><img class="imgLogo" src={logo} alt="Logo SP Medical Group"/></Link>
                            <Link to="/"><img class="imgTexto" src={logoTexto} alt="SP Medical Group"/></Link>
                        </div>
                        <div className="parteSuperiorDireita">
                            <div>
                                <Link className="edicaoLink" to="/listagem">Listagem</Link>
                            </div>
                            <div>
                                <Link className="edicaoLink" onClick={() => sair()} to="/">Sair</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section>
                    <div className="medicoCadastro">
                        <div className="blocoCadastro">
                            <form className="form" onSubmit={cadastrarConsulta}>
                                <div className="posicaoCadastro">
                                    <p className="textoCadastro">Cadastrar nova consulta</p>
                                </div>
                                <br/>
                                <div>
                                    <p className="textoDoCadastro">Id Paciente</p>
                                    <input className="inputCadastro" type="number" value={idPaciente} onChange={(event) => setIdPaciente(event.target.value)}/>
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        <p className="textoDoCadastro">Id Médico</p>
                                    </div>
                                    <input className="inputCadastro" type="number" value={idMedico} onChange={(event) => setIdMedico(event.target.value)}></input>
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        <p className="textoDoCadastro">Data Agendamento</p>
                                    </div>
                                    <input className="inputCadastro" type="date" value={data} onChange={(event) => setData(event.target.value)}></input>
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        <p className="textoDoCadastro">Situação</p>
                                    </div>
                                    <input className="inputCadastro" type="text" value={situacao} onChange={(event) => setSituacao(event.target.value)}></input>
                                </div>
                                <div>
                                    <br/>
                                    {
                                        isLoading === false &&
                                        <button className="botao" type="submit">Cadastrar</button>
                                    }

                                    {
                                        isLoading === true &&
                                        <button className="botao" type="submit" disabled>Carregando...</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>    
    )
}