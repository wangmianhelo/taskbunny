import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Roboto, Sans-Serif;
        font-weight: 400;
    }
    ul{
        margin:0;
        padding:0;
    }
    li{
        list-style : none;
    }
`;

export default GlobalStyle;