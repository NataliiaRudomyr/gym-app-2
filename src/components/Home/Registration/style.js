import styled from 'styled-components';

import bg_2 from '../../../assets/bg_2.jpg';

export const RegistrationWrapper = styled.div`
    width: 100%;
    height: 500px;
    background: url(${bg_2}) center center/cover no-repeat;
    padding-top: 130px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 40px;
    text-align: center;
`;

export const Subtitle = styled.p`
    color: #C4C4C4;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
`;

export const Button = styled.button`
    width: 240px;
    height: 70px;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    background: transparent;
    border: 3px solid #fad105;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 18px;
    &:hover {
        cursor: pointer;
        background: #fad105;
        color: #000;
    }
`;