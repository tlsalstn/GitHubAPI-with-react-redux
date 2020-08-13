import styled from "styled-components";

export const Modal = styled.div(props => ({
    left: "calc(50% - " + Math.floor(props.height/2) + "px)",
    borderRadius: "20px",
    padding: "20px",
    width: props.width + "px",
    height: props.height + "px",
    background: "#fff",
    position: "relative",
    textAlign: "center"
}));