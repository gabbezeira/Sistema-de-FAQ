import styled from 'styled-components';


export const Image = styled.img.attrs({})``;

export const Container = styled.div`
  
    padding: 40px 0;
    width: 60%;
   
    margin: 0 auto;

    .cards-content {
        
        width: 100%;
        height: auto;

        a{
            text-decoration: none;
        }

        .card {

            width: 100%;
            height: 30%;
            border-radius: 4px;
            background-color: ${({theme}) => theme.colors.whiteColor}; 
            padding: 20px;
            border: 1px solid ${({theme}) => theme.colors.whiteColor};
            box-shadow: ${({theme}) => theme.colors.boxShadowTwo};

            transition: .4s all !important;
            cursor: pointer;

            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-bottom: 20px;
            }
            
            &:hover {
                
                background-color: ${({theme}) => theme.colors.whiteOpacity};
                border: 1px solid #e4e4e4;
            }

            .icon-area {

                border-radius: 4px 0 0 4px;

                width: 15%;
                height: 100%;

                float: left;

                display: flex;
                align-items: center;
                justify-content: center;

                img {

                    width: 80px;
                    height: 80px;

                }
            }

            .content-area {

                width: auto;
                height: 80%;
                max-height: max-content !important;

                font-family: 'Poppins', 'Montserrat', 'sans-serif';
                padding: 10px 0;
                margin-left: 20px;

                display: grid;
                align-items: center;

                font-family: 'Poppins', 'Montserrat', 'sans-serif';

                h1{
                    font-size: ${({theme}) => theme.fonts.font16};
                    color: #0F6FFF;
                    font-weight: normal;
                }

                .text-area {
                    padding: 10px 0;
                    font-size: ${({theme}) => theme.fonts.font14};
                    color: ${({theme}) => theme.colors.greyColor};
                 }

                 .details-area {

                     width: 100%;
                     height: auto;
                     max-height: max-content;
                     display: flex;
                     align-items: center;
                     justify-content: space-around;

                     .articles-area {

                        height: 100%;
                        max-height: max-content !important;
                        width: 100%;

                        display: flex;
                        align-items: center;

                        .logo-sa {

                            width: 38px;
                            height: 38px;
                            border-radius: 50%;
                            background-color: ${({theme}) => theme.colors.primaryColor};
    
                            display: flex;
                            justify-content: center;
                            align-items: center;
    
                            h2 {
                                font-size: ${({theme}) => theme.fonts.font16};
                                font-weight: 500;
                                color: ${({theme}) => theme.colors.whiteColor};
                            }
                         }

                         .informations-area {

                             float: right;
                             margin-left: 10px;

                            p { 
                                color: #4F5E6B;
                                font-size: ${({theme}) => theme.fonts.font14};
                                font-weight: normal;

                                span {

                                    color: #adadad;
                                    font-size: ${({theme}) => theme.fonts.font13};
                                    font-weight: normal;
                                }
                            }
                         }
                     }
                }
            }
        }
    }


`;
