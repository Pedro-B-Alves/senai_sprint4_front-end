import "../assets/CSS/Descricao.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../assets/Imagens/Logo.png"
import logoTexto from "../assets/Imagens/logoTexto.png"
import { sair } from "../services/auth"

export default function Descricao() {

    const [ idconsulta, setIdConsulta ] = useState( 0 );
    const [ idPaciente, setIdPaciente ] = useState( 0 );
    const [ idMedico, setIdMedico ] = useState( 0 );
    const [ data, setData ] = useState( new Date() );
    const [ situacao, setSituacao ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );

    function atualizarConsulta(event){
        event.preventDefault();

        setIsLoading( true );
        
        let urlGet = 'http://localhost:5000/api/consultums/' + {idconsulta};

        axios(urlGet, {
            idPaciente : idPaciente,
            idMedico : idMedico,
            dataAgendamento : data,
            situacao : situacao
        })

        .then(resposta => {
            if (resposta.status === 200) {
                setIdPaciente(resposta.data.idPaciente);
                setIdMedico(resposta.data.idMedico);
                setData(resposta.data.dataAgendamento);
                console.log('Obtendo dados');
            };
        })

        .catch(erro => console.log(erro));

        let urlPost = 'http://localhost:5000/api/consultums/'+{idconsulta};

        axios.post(urlPost, {
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

    }

    return (
        <div>
            <div>
                <section>
                    <div className="parteSuperiorDescricao">
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
                    <div className="medicoDescricao">
                        <div className="blocoDescricao">
                            <form className="form" onSubmit={atualizarConsulta}>
                                <div className="posicaoDescricao">
                                    <p className="textoDescricao">Inserir uma nova descrição na consulta</p>
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        <p className="textoDaDescricao">Id da Consulta</p>
                                    </div>
                                    <input className="inputDescricao" type="number" value={idconsulta} onChange={(event) => setIdConsulta(event.target.value)}></input>
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        <p className="textoDaDescricao">Situação</p>
                                    </div>
                                    <input className="inputDescricao" type="text" value={situacao} onChange={(event) => setSituacao(event.target.value)}></input>
                                </div>
                                <br/>
                                <div className="posicaoBotao">
                                    {
                                        isLoading === false &&
                                        <button className="botao" type="submit">Inserir</button>
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