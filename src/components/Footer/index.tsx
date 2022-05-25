import React from 'react';

import {Container} from './styles';

export function Footer(){
    return(
        <Container className="footer-container" >
           
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={require('../../assets/img/logo-footer.png')} />
                    </div>
                    <div className="footer-menu">
                        <ul className="footer-ul-menu">
                            <li><a href="#">Site</a></li>
                            <li><a href="#">Portal</a></li>
                            <li><a href="#">Moodle</a></li>
                        </ul>
                    </div>
                </div>
           
        </Container>
    )
}