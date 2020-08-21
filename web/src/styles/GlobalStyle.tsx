import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
    border: 0;
    width: 100%;
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
a, button, p, span {
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
html, body, #root, .Container {
    height: 100%;
}
.Wait {
    margin: 0 auto;
    width: auto;
    svg {
        width: 45px;
        height: 45px;
    }
}
.logo {
    fill: rgba(255, 255, 255, .8);
    &:hover {
        fill: rgba(255, 255, 255, .2)
    }
}
.Card {
    border-radius: 20px;
    padding: 20px;
    background: #363b42;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
}
`

export default GlobalStyle