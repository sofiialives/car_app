import { createGlobalStyle } from "styled-components";
import ManropeBold from "../assets/fonts/Manrope-Bold.ttf";
import ManropeSemiBold from "../assets/fonts/Manrope-SemiBold.ttf";
import ManropeMedium from "../assets/fonts/Manrope-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
:root{
     /* FONTS */
     --font-size: 12px;
     --line-height: 1.5;
     --main-font-semi: ${ManropeSemiBold};
     --main-font-medium: ${ManropeMedium};
     --main-font-bold: ${ManropeBold};


     @font-face {
         font-family: 'Manrope-Bold', sans-serif;
         src: url(${ManropeBold}) format('truetype'),
     }
     @font-face {
         font-family: 'Manrope-SemiBold', sans-serif;
         src: url(${ManropeSemiBold}) format('truetype'),
     }
     @font-face {
         font-family: 'Manrope-Medium', sans-serif;
         src: url(${ManropeMedium}) format('truetype'),
     }

      /* COLORS */
      --text-color: #12141780;
      --text-black: #121417;
      --text-blue: #3470FF;
      --text-white: #FFFFFF;
      --text-grey: #8A8A89;
      --violet-bg: #0B44CD;
      --input-color: #F7F7FB;
}
/* RESET STYLES */
a {
  text-decoration: none;
  color: inherit;
}


button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

p {
  margin: 0;
}

 /* STANDART STYLES */
body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: var(--font-size);
    line-height: var(--line-height);
    
    color: var(--text-color);
    background-color: var(--text-white);   
}

.main-container{
  margin: 150px 128px;
}
`;
