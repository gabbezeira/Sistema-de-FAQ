import React,{useEffect} from 'react';

import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { cards } from '../../dummyData';

import { Container } from './styles';


export function Home() {
    return (
              
        
           
            <Container className='cards-container '>

           
                <div className="cards-content">
                    {cards.map(card => (
                        
                                <Link  className='card' state={{cardID:card.id,}} to='/filter'>
                                <div className="icon-area">
                                <img src={card.icon} />
                                </div>
                                    <div className="content-area">
                                        <h1>{card.title}</h1>
                                        <p className="text-area">{card.description}</p>
                                        <div className="details-area">
                                            <div className="articles-area">
                                                <div className="logo-sa">
                                                    <h2>SA</h2>
                                                </div>
                                                <div className="informations-area">
                                                    <p>{card.articlesNumber} artigos nesta coleção <br />
                                                    <span>Escritos por</span> Suporte ao Aluno.</p>
                                                </div>
                                            </div>  
                                    </div>
                                    
                                </div>
                                </Link>
                          
                    
                    ))}
                
                </div>
        
            </Container>
         
       
    )
}


