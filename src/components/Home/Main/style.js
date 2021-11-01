import styled from 'styled-components';

import bg1 from '../../../assets/bg_1.jpg';

export const HomeMain = styled.div`
    width: 100%;
    height: 900px;
    background: url(${bg1}) center center/cover no-repeat;
`;

export const Container = styled.div`
    width: 40%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    color: #fff;
`;

export const LittleTitle = styled.h3`
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 9px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 66px;
    text-transform: uppercase;
    span {
        color: #fad105;
    }
`;

export const Button = styled.button`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    width: 200px;
    height: 60px;
    background-color: #fad105;
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
    }
`;