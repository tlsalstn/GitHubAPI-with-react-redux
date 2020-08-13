import styled from "styled-components";

export const Repository = styled.div({
    borderTop: "1px solid #fff",
    padding: "20px",
    height: "150px",
    background: "inherit",
    color: "#fff",
    justifyContent: "space-between",
    position: "relative",

    "&:last-child": {
        borderBottom: "1px solid #fff"
    },
    "&:hover": {
        cursor: "pointer"
    }
});

export const Detail = styled.div({
    bottom: "20px",
    display: "flex",
    position: "absolute"
});

export const Title = styled.p({
    padding: "3px 0",
    color: "inherit",
    fontSize: "30px",
    fontWeight: "bold"
});

export const SubTitle = styled.p({
    padding: "2px 0",
    fontSize: "16px"
});