import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Tenor Sans', sans-serif;
}

h1 {
    font-size: 24px ;
    font-weight:normal ;
}

ul {
    text-decoration:none ;
    list-style-type:none ;
    /* padding:10px ; */
    
}

li {
    text-decoration:none ;
    list-style-type:none ;
    font-size: 18px ;
}


@media screen and (max-width: 1200px) {
    body {
/* background-color: #e8a995; */
    }
}

/* @media screen and (max-width: 768px) {
    /* body {
        background-color: white;
    }
} */


/* @media screen and (max-width: 480px) {
    body {
        background-color: #e8a995;
    } */


::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }


`;

/*
turquoise green : #a0d6b4;
light grren: #ddfada
light green: #DCE4D1
light pink: #FFEFE&;
darker pink: #F4BCB8;
cute grey: #ffe0cf; 

color palette:
https://www.sirahmora.com/our-work
*/

/* 
grey: #888
beige: #fff8e7
*/
