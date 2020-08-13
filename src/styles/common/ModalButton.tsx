import styled from "styled-components";

export const ModalButton = styled.button({
    border: "none",
    padding: 0,
    width: "auto",
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
        color: "rgb(40, 120, 241)",
        cursor: "pointer",
        textDecoration: "underline"
    }
});