import styled from "styled-components";

export const Container = styled.footer`
    
    width: 100%;
    height: 250px;
    background-color: ${({theme}) => theme.colors.whiteColor};

    .footer-content {

        width: 30%;
        height: 80%;
        margin: 0 auto;

        display: grid;
        justify-content: center;
        align-items: center;
        
        .footer-logo {

            margin: 0 auto;

            img{
            
                opacity: .6;
                margin-top: 20px;
                width: 120px;
                height: 100px;

            }
        }

        .footer-menu {

            height: 30px;
            width: 100%;
            
            ul, li {

                display: inline-flex;
                list-style: none;

                &:not(:first-child){

                    margin-left: 25px;

                }
            }

            .footer-ul-menu li > a{

                text-decoration: none;
                color: ${({theme}) => theme.colors.midGreyColor};
                font-weight: 300;

                &:hover {

                    text-decoration: underline;

                }
            }
        }
    }

`;