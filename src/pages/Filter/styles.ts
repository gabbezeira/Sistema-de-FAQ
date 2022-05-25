import styled from 'styled-components';

export const Container = styled.div`
  

padding: 40px 0px;
width: 60%;
height: auto;
margin: 0 auto;

.card-painel-content {

    background-color: ${({theme}) => theme.colors.painelGrey};
    width: 100%;
    padding: 30px;
    height: auto;

    .header-painel {

        width: 100%;
        height: 30%;
        border-radius: 4px;
        margin-bottom: 25px;

        transition: .4s all !important;
        cursor: pointer;

        display: flex;
        align-items: center;

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
                font-size: 33px;
                color: ${({theme}) => theme.colors.darkGrey};
                font-weight: normal;
            }

            .text-area {
                padding: 10px 0;
                font-size: ${({theme}) => theme.fonts.font16};
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
                            font-size: ${({theme}) => theme.fonts.font13};
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

    .title-painel {

        width: 100%;
        float: left;
        padding-bottom: 5px;

        h1 {

            font-size: ${({theme}) => theme.fonts.font18};
            color: ${({theme}) => theme.colors.darkGrey};
            font-weight: 500;
        }
    }

    .ask {

        width: 100%;
        height: 30%;
        border-radius: 4px;
        padding: 20px;
        background-color: ${({theme}) => theme.colors.whiteColor};
        border: 1px solid #e4e4e4;
        transition: .4s all !important;
        cursor: pointer;

        display: flex;
        align-items: center;

        &:hover {

            background-color: ${({theme}) => theme.colors.whiteOpacity};

        }

        .content-area {

            width: auto;
            height: 100%;
            max-height: max-content !important;
            
            font-family: 'Poppins', 'Montserrat', 'sans-serif';
            padding: 10px 0;
            margin-left: 10px;

            display: grid;
            align-items: center;

            font-family: 'Poppins', 'Montserrat', 'sans-serif';

            h1{
                font-size: ${({theme}) => theme.fonts.font16};
                color: ${({theme}) => theme.colors.primaryColor};
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
                                font-size: ${({theme}) => theme.fonts.font16};;
                                font-weight: 500;
                                color: ${({theme}) => theme.colors.whiteColor};
                            }
                            }

                        .informations-area {

                            float: right;
                            margin-left: 10px;

                        p { 
                            color: #4F5E6B;
                            font-size: ${({theme}) => theme.fonts.font12};
                            font-weight: normal;

                            span {

                                color: #adadad;
                                font-size: ${({theme}) => theme.fonts.font12};
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
