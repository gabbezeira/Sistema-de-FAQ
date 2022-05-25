import React from 'react';

import { useLocation} from "react-router-dom";

import { cards } from '../../dummyData';

import {Container } from './styles';

export function Filter() {
    const location:any = useLocation();
    const ID: number = location.state.cardID;
    const card = cards[ID];

    return (
        <>
       <Container>
        <div className="card-painel-container">
            <div className="card-painel-content">
                <div className="header-painel">
                    <div className="icon-area">
                        <img src={require('../../assets/img/icons/Key.png')}/></div>
                    <div className="content-area">
                        <h1>{card.title}</h1>
                        <p className="text-area">{card.description}</p>
                        <div className="details-area">
                            <div className="articles-area">
                                <div className="logo-sa">
                                    <h2>SA</h2>
                                </div>
                                <div className="informations-area">
                                    <p>{card.articlesNumber} artigo nesta coleção <br />
                                    <span>Escritos por</span> Suporte ao Aluno.</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="title-painel">
                    <h1>Outro</h1>
                </div>
                <div className="ask" id="ask" data-url="pages/como-mudar-senha" >
                    <div className="content-area">
                        <h1>Como mudar minha senha do potal do aluno?</h1>
                        <p className="text-area">Nesse tutorial você aprenderá como mudar sua senha do portal do aluno.</p>
                        <div className="details-area">
                            <div className="articles-area">
                                <div className="logo-sa">
                                    <h2>SA</h2>
                                </div>
                                <div className="informations-area">
                                    <p><span>Escrito por</span> Suporte ao Aluno. <br />
                                    <span>Atualizado há mais de uma semana</span></p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </Container>
        </> 
    )
}