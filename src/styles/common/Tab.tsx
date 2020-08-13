import styled from "styled-components";

export const TabUl = styled.ul({
    margin: 0,
    borderBottom: "1px solid #fff",
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none"
});

export const TabLi = styled.li({
    borderBottom: "2px solid transparent",
    width: "100%",
    padding: "20px",
    textAlign: "center",
    "&:hover": {
        borderBottom: "2px solid #fff",
        cursor: "pointer"
    }
});