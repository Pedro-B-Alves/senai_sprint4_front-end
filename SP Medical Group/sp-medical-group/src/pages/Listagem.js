import "../assets/CSS/Listagem.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../assets/Imagens/Logo.png"
import logoTexto from "../assets/Imagens/logoTexto.png"

export default function Listagem() {

    const [ consulta, setConsulta ] = useState( [] );

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

    useEffect( buscarConsulta, [] );

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
                    <div className="medicoListagem">
                        <div className="blocoListagem">
                            <div className="tamanhoBloco">
                                <div className="posicaoListagem">
                                    <p className="textoListagem">Listagem de consultas</p>
                                </div>
                                <br/>
                                <div>
                                    <p className="textoDoListagem">Lorem ipsum ad mauris nullam augue bibendum torquent tincidunt, curae rutrum nostra quam maecenas phasellus quis tempor, elementum a vel mauris orci eros nulla. accumsan molestie ultricies nullam viverra tristique nec justo dictum elit, quis curabitur gravida cras consequat at suscipit nisl placerat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>       
    )
}