import styled from 'styled-components';
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    position: absolute;
    width: 100%;
    padding: 0 30px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
`;

export const Logo = styled.img`
    width: 200px;
`;

export const List = styled.ul`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    color: #fff;
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

export const Item = styled.li`
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    &:hover {
        color: #fad105;
        cursor: pointer;
        &:before {
            content: "";
            border-bottom: 2px solid #fad105;
            position: absolute;
            width: 100%;
            height: 50%;
            transform: rotate(-15deg);
        }
    }
`;

export const MyLink = styled(Link)`
    text-decoration: none;
`;

export const SocialWrapper = styled.div`
    display: flex;
`;

export const SocialLink = styled.a`
    text-decoration: none;
`;

export const Icons = styled(SVG)`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    & path {
        fill: #fff;
    }
    &:hover {
        & path {
            fill: #fad105;
        }
    }
`;

