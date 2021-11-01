import styled from 'styled-components';

export const PriceWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 800px;
    background-color: #000;
    padding-top: 100px;
`;

export const Title = styled.h3`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: #fad105;
    text-transform: uppercase;
    letter-spacing: 5px;
`;

export const Subtitle = styled.p`
    font-size: 32px;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    text-transform: uppercase;
    margin-top: 30px;
`;

export const WrapperCard = styled.div`
    width: 60%;
    height: 500px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.h4`
    font-size: 32px;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    transform: skew(7deg);
    text-align: center;
`;

export const CardPrice = styled.p`
    text-align: center;
    transform: skew(7deg);
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 50px;
    color: #fad105;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 60px;
`;

export const Additional = styled.p`
    font-size: 14px;
    color: #C4C4C4;
    text-align: center;
    transform: skew(7deg);
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 70%;
    height: 60px;
    transform: skew(7deg);
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    text-transform: uppercase;
    background-color: #333333;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    &:hover {
        cursor: pointer;
    }
`;

export const Card = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid #fad105;
    transform: skew(-7deg);
    padding-top: 40px;
    &:hover {
        border: 1px solid #fff;
        background: #fff;
        transform: skew(-7deg) scale(1.1);
        transition: 0.5s;
    }
    &:hover ${CardTitle} {
        color: #000;
    }
    &:hover ${CardPrice} {
        color: #D0AD00;
    }
    &:hover ${Additional} {
        color: #000;
    }
    &:hover ${Button} {
        background-color: #fad105;
        color: #000;
    }
`;