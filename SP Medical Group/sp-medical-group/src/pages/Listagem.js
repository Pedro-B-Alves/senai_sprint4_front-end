import "../assets/CSS/Listagem.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../assets/Imagens/Logo.png"
import logoTexto from "../assets/Imagens/logoTexto.png"
import { linkPermissao, parseJwt, sair } from "../services/auth";

export default function Listagem() {

    const [ consulta, setConsulta ] = useState( [] );
    const [ textoLink, setTextoLink ] = useState( '' );

    function buscarConsulta(){
        // Faz a chamada para a API usando axios
        axios('http://localhost:5000/api/consultums')

        .then(resposta => {
            if (resposta.status === 200) {
                setConsulta(resposta.data);
            };
        })

        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro));
    };

    const textoPermissao = () => {
        if (parseJwt().role === '1') {
            setTextoLink('Cadastro');
        }
    
        else if(parseJwt().role === '3'){
          setTextoLink('Descrição');
        }
    }

    useEffect( buscarConsulta, [] );
    useEffect( linkPermissao, []);
    useEffect( textoPermissao, []);

    return (
        <div>
            <div>
                <section>
                    <div className="parteSuperiorListagem">
                        <div className="ajuste">
                            <Link to="/"><img class="imgLogo" src={logo} alt="Logo SP Medical Group"/></Link>
                            <Link to="/"><img class="imgTexto" src={logoTexto} alt="SP Medical Group"/></Link>
                        </div>
                        <div className="parteSuperiorDireita">
                            <div>
                                <Link className="edicaoLink" to={linkPermissao}>{textoLink}</Link>
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
                    <div className="medicoListagem">
                        <div className="blocoListagem">
                            <div className="tamanhoBloco">
                                <div className="posicaoListagem">
                                    <p className="textoListagem">Listagem de consultas</p>
                                </div>
                                <br/>
                                <div>
                                    <table className="textoDoListagem">
                                        <thead>
                                            <tr>
                                                <th>Id Consulta</th>
                                                <th>Id Paciente</th>
                                                <th>Id Medico</th>
                                                <th>Data Agendamento</th>
                                                <th>Situação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                consulta.map( (itensConsulta) => {
                                                    return (
                                                        <tr key={itensConsulta.IdConsulta}>
                                                            <td>{itensConsulta.IdPaciente}</td>
                                                            <td>{itensConsulta.IdMedico}</td>
                                                            <td>{itensConsulta.DataAgendamento}</td>
                                                            <td>{itensConsulta.Situacao}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>       
    )
}