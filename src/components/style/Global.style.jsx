import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  /* font-family: 'Poppins', sans-serif; FIXME*/ 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*  hsl(167, 75%, 15%) 
 hsl(106, 65%, 90%) TODO */
`

export default GlobalStyle
