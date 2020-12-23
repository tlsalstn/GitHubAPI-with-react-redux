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
html {
    min-height: 937px;
}
html, head, body, #root, .Container {
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
.Modal-Overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
    position: fixed;
}
.Modal {
    top: 50%;
    left: 50%;
    padding: 10px;
    border-radius: 10px;
    animation-duration: .2s;
    animation-name: modalShow;
    width: 400px;
    height: 150px;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
    position: fixed;
    transform: translate(-50%, -50%);
}
.Modal-Content {
    border-radius: 10px 10px 0 0;
    height: 70%;
    color: #000;
    display: grid;
    place-items: center;
}
.Modal-Content p {
    color: #000;
    font-size: 1.3vw;
}
.Modal-Button {
    height: 30%;
    color: #000;
    display: flex;
    align-content: center;
    justify-content: flex-end;
}
.Modal-Button button {
    padding: 0 15px;
    color: #fff;
    cursor: pointer;
    font-weight: 800;
}
.Modal-Button-Close {
    background: rgb(70, 70, 196);
}

@keyframes modalShow {
    from {
        width: 0px;
        height: 0px;
    }
    to {
        width: 400px;
        height: 150px;
    }
}
`

export default GlobalStyle