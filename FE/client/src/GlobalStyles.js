import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif ;
}

h1 {
    font-size: 24px ;
    font-weight:normal ;
}

@media screen and (max-width: 1200px) {
    body {
        background-color: white;
    }
}

@media screen and (max-width: 768px) {
    body {
        background-color: #a0d6b4;
    }
}

@media screen and (max-width: 480px) {
    body {
        background-color: white;
    }
}


`;

/*
turquoise green : #a0d6b4;
light green: #DCE4D1
light pink: #FFEFE&;
darker pink: #F4BCB8;


color palette:
https://www.sirahmora.com/our-work
*/
