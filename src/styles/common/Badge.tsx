import styled from "styled-components";

export const Badge = styled.span(props => ({
    margin: "11px",
    padding: "0 10px",
    borderRadius: "5px",
    width: "auto",
    height: "25px",
    background: "#cacaca",
    color: props.color,
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
}));