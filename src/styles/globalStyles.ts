import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap') format('truetype');  
   
  }
  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap') format('truetype');  
   
  }

  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    -webkit-tap-highlight-color: transparent;
    height: 100vh;
  }

  .root{
    height: 100vh;
  }

  body {

    height: 100vh;
    width: 100%;

    background-color: #f2f3f5;

    font-family:'Poppins', 'Montserrat', 'sans-serif';
    font-size: 18px;

    padding: 0;
    margin: 0 auto !important;

  } 

  .wrapper {

    display: flex;
    align-items: center;

  }

@media (max-width: 768px){

  .header-container {
      
      padding: 25px 0;

  

      .header-content {
          
          width: 90% !important;

          .top-header {

              .logo-header {
                  width: 20%;
              }

              .access-header-link {
                  width: 80%;

                  a{
                      font-size: ${({theme}) => theme.fonts.font11};
                      font-weight: 500;

                      i{
                          font-size: ${({theme}) => theme.fonts.font16};
                          margin-right: 5px;
                      }
                  }
              }
          }

          .title-header {
              
              margin: 25px 0;

              h1 {

                  font-size: ${({theme}) => theme.fonts.font22};

              }

          }
      }
  }

  .cards-container {

      width: 90%;

      .cards-content {
          .card {
              .content-area {
                  width: 100%;
              }

              .icon-area {

                  display: none;

              }
          }
      }

  }

  .card-painel-container {

      width: 90%;

      .card-painel-content {
          
          padding: 25px;

          .header-painel {
              .content-area {
                  width: 100%;
                  margin-left: 0px;
              }

              .icon-area {

                  display: none;

              }
          }

          .ask {
              .content-area {
                  .details-area {
                      .articles-area {
                          .logo-sa {
                              display: none;
                          }

                          .informations-area {

                              margin-left: 0px;

                          }
                      }
                  }
              }
          }
      }
  }

  .tutorial-container {

      max-width: max-content;
      width: 90%;

      .tutorial-content {

          padding: 40px 30px;
      }
  }
}
 
`