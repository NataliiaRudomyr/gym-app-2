import React from 'react';

import { HomeMain, Container, LittleTitle, MainTitle, Button } from './style';

function Main() {
    return (
        <HomeMain>
            <Container>
                <LittleTitle>Shape your body</LittleTitle>
                <MainTitle>Be <span>strong</span></MainTitle>
                <MainTitle>training hard</MainTitle>
                <Button>Дізнатись більше</Button>
            </Container>
        </HomeMain>
    )
}

export default Main;
