import styled from 'styled-components';
import SVG from "react-inlinesvg";

export const ChooseWrapper = styled.div`
    width: 100%;
    height: 550px;
    background-color: #000;
    padding-top: 100px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: #fad105;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    letter-spacing: 5px;
    text-align: center;
`;

export const SubTitle = styled.h4`
    font-family: 'Roboto Condensed', sans-serif;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-size: 28px;
    margin-top: 15px;
`;

export const WrapperIcon = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
`;

export const Wraps = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: #232323;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icons = styled(SVG)`
    width: 50px;
    height: 50px;
    & path {
        fill: #fad105;
    }
`;

export const IconTitle = styled.h3`
    width: 100%;
    font-family: 'Roboto Condensed', sans-serif;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
`;

export const WrapBlock = styled.div`
    width: 25%;
`;

export const Description = styled.p`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    color: #A9A9A9;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    line-height: 24px;
`;