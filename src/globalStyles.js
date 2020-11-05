import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0;
        font-family: Roboto, Sans-Serif;
        font-weight: 400;
        // background-color: rgb(246, 248, 253);
        background-color: #FFFFFF;
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