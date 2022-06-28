import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body, :root{
    width: 100%;
    height: 100vh;
  }

  body{
    background-color: #f2f2f2;

  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 5px rgba(0,0,0,.8);
    height: 100%;
    flex-direction: column;

   

    .container{
      width: 400px;
      height: 150px;
      padding: 10px 15px;
      border-radius: 10px;
      background: linear-gradient(134deg, rgba(252,198,198,1) 46%, rgba(140,40,40,1) 100%, rgba(255,255,255,1) 100%);

      
    }

    select{
    
      background-color: azure;
      padding: 5px 8px;
      width: 80%;

    }
  }

`;
