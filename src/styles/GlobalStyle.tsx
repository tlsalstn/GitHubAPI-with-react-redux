import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #fff;
    outline: none;
    user-select: none;
    -webkit-user-select: none;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
}
button, span {
    width: auto;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
button {
    background: inherit;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.notice {
    font-size: 2.5vw;
    font-weight: 800;
}
`

export default GlobalStyle