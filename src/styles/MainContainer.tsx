import styled from "styled-components";
import { color } from "./theme/color";

export const Container = styled.div`
    display: inline-block;
`;

export const Header = styled.div({
    height: "130px",
    background: color.subColor
});

export const Search = styled.div({
    margin: "0 auto",
    padding: "35px 0",
    width: "30%",
    height: "120px",
    color: "#fff",
    fontSize: "20px"
});

export const Wrap = styled.div({
    minHeight: "807px",
    background: color.mainColor
});

export const Content = styled.div({
    margin: "0 auto",
    width: "60%"
});

export const Info = styled.div({
    paddingTop: "20px",
    color: "#fff",
    display: "flex"
});