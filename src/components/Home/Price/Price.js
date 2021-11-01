import React from 'react';

import { PriceWrapper, Title, Subtitle, WrapperCard, Card, CardTitle, CardPrice, Additional, Button } from './style';

function Price() {

    const cards = [
        {title: '8 раз/міс', price: '200/250UAH', id: '8'},
        {title: '12 раз/міс', price: '250/300UAH', id: '12'},
        {title: 'безліміт', price: '350UAH', id: 'unlim'}
    ];

    const cardHandler = (e) => {
        console.log(e.target.id);
    }

    return (
        <PriceWrapper >
            <Title>Наш прайс</Title>
            <Subtitle>Оберіть абонемент для себе</Subtitle>
            <WrapperCard>
                {cards.map(item => {
                    return (
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardPrice>{item.price}</CardPrice>
                            <Additional>Роздягальня</Additional>
                            <Additional>Душ</Additional>
                            <Additional>Час тренування: до 2 годин</Additional>
                            <Button id={item.id} onClick={cardHandler}>Купити</Button>
                        </Card>
                    )
                })}
            </WrapperCard>
        </PriceWrapper>
    )
}

export default Price;
