import styled from 'styled-components';
import SVG from "react-inlinesvg";
import footer from '../../assets/footer.jpg';

export const FooterMain = styled.div`
    width: 100%;
    height: 350px;
    background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),  url(${footer}) center center/cover no-repeat;
    font-family: 'Roboto Condensed', sans-serif;
`;

export const FooterWrapper = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    padding-top: 50px;
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FooterBlock = styled.div`
    width: 33%;
    color: #fff;
    padding: 0 35px;
    text-align: center;
`;

export const FooterTitle = styled.h3`
    font-size: 22px;
`;

export const FooterRow = styled.div`
    margin-top: 10px;
    text-align: justify;
`;

export const IconDisplay = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const IconWrapper = styled.a`
    width: 42px;
    height: 42px;
    padding: 10px;
    border: 1px solid #FAD105;
    border-radius: 50%;
    margin-right: 20px;
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
`;

export const Icons = styled(SVG)`
    width: ${props => props.size};
    height: ${props => props.size};
    margin-right: ${props => props.mr};
    & path {
        fill: #FAD105;
    }
`;

export const InfoBlock = styled.div`
    margin: 20px 0 0 10px;
`;

export const InfoRow = styled.a`
    display: flex;
    margin-top: ${props => props.mt};
    text-decoration: none;
    color: #fff;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

export const Schedule = styled.p`
    font-size: 16px;
    color: ${props => props.color};
    margin-right: ${props => props.mr};
    width: ${props => props.width};
`;