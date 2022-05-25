import React from "react";

import {Container} from './styles';



export function Header(){
    return (
    <Container className='header-container' >
        <div className="header-content">
            <div className="top-header">
                <div className="logo-header">
                    <img src={require('../../assets/img/logo.png')} />
                </div>
                <div className="access-header-link"><a href="#" >
                <i className="bx bx-link-external"></i>Acesse Equipe de Suporte ao Aluno</a></div>
            </div>
            
            <div className="title-header"><h1>Dicas e respostas da Equipe de Suporte ao Aluno - FPM</h1></div>
            <input type="text" placeholder="Busque respostas"></input>
        </div>
    </Container>
    )
}

