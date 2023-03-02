import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 85.5%;
        }
    }

    body{
        -webkit-font-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    h2, h3, h4, p, button, a, label, div {
        font-family: 'Roboto', sans-serif;
    }
`;