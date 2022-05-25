import styled from 'styled-components';

export const Container = styled.header`

    font-family:'Poppins', 'Montserrat', 'sans-serif';
    display: flex;
    justify-items: center;

    width: 100%;
    height: auto;

    background-color: ${({ theme }) => theme.colors.primaryColor};
    box-shadow: ${({ theme }) =>  theme.colors.boxShadowOne};

    padding: 30px 0;


    
    .header-content {

        height: 100%;
        width: 60%;

        max-height: max-content;
        margin: 0 auto;

        .top-header {

            width: 100%;
            height: 20%;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            .logo-header {

                width: 50%;
                height: 100%;
                float: left;

                img {

                    cursor: pointer;
                    width: 90px;

                }
            }

            .access-header-link {

                width: 50%;
                height: 100%;
                float: right;

                display: flex;
                justify-content: right;
                align-items: center;

                a {

                    text-decoration: none;
                    font-weight: 500;
                    font-size: ${({theme}) => theme.fonts.font13};
                    letter-spacing: normal;
                    color: ${({theme}) => theme.colors.whiteColor};

                    
                    

                    display: flex;
                    justify-content: right;
                    align-items: center;

                    &:hover {

                        transition: .2s all;
                        opacity: .8;

                    }

                    i {

                        font-size: ${({theme}) => theme.fonts.font22};
                        color: ${({theme}) => theme.colors.whiteColor};
                        margin-right: 10px;

                    }
                } 
            }
        }

        .title-header {

            width: 100%;
            margin: 10px 0 20px 0;

            h1 {

                font-size: ${({theme}) => theme.fonts.font26};
                font-weight: 400 !important;
                color: ${({theme}) => theme.colors.whiteColor};
                font-size:26px;
            }
        }
        
        input {

            background-color: ${({theme}) => theme.colors.secundaryBlue};
            box-shadow:  ${({theme}) => theme.colors.boxShadowTwo};

           

            color: ${({theme}) => theme.colors.whiteColor};
            font-size: ${({theme}) => theme.fonts.font18};

            width: 100%;
            height: 65px;

            padding: 30px;

            border: none;
            outline: none;
            border-radius: 4px;

            transition: .4s all;
            opacity: .6;

            cursor: pointer;

            &::-webkit-input-placeholder {

                color: ${({theme}) => theme.colors.whiteOpacity};
                font-family:'Poppins', 'Montserrat', 'sans-serif';
                font-size: ${({theme}) => theme.fonts.font18};
                font-weight: medium;

            }

            &:hover {

                opacity: 1;

            }

            &:focus {

                background-color: #f2f3f5;
                opacity: 1;
                color:${({theme}) => theme.colors.greyColor};
                font-size: ${({theme}) => theme.fonts.font18};
   

                &::-webkit-input-placeholder {

                    color:${({theme}) => theme.colors.greyColor};
                    font-family:'Poppins', 'Montserrat', 'sans-serif';
                    font-size: ${({theme}) => theme.fonts.font18};
                    font-weight: medium;

                }
            }
        }      
    }


`;
