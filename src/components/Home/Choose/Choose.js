import React from 'react';

import bicycle from '../../../assets/icons/bicycle.svg';
import food from '../../../assets/icons/food.svg';
import gym from '../../../assets/icons/gym.svg';
import heart from '../../../assets/icons/heart.svg';

import { ChooseWrapper, Title, SubTitle, WrapperIcon, Wraps, Icons, IconTitle, WrapBlock, Description } from './style';

function Choose() {
    return (
        <ChooseWrapper>
            <Title>Чому ми?</Title>
            <SubTitle>Покращуйте свої можливості!</SubTitle>
            <WrapperIcon>
                <WrapBlock>
                    <Wraps>
                        <Icons src={bicycle} alt="bicycle" />
                    </Wraps>
                    <IconTitle>Сучасне обладнання</IconTitle>
                    <Description>Багатофункціональне та сучасне обладнання для виконання всіх вправ.</Description>
                </WrapBlock>
                <WrapBlock>
                    <Wraps>
                        <Icons src={food} alt="food" />
                    </Wraps>
                    <IconTitle>План здорового харчування</IconTitle>
                    <Description>Індивідуальний план здорового харчування згідно з вашими даними та цілями.</Description>
                </WrapBlock>
                <WrapBlock>
                    <Wraps>
                        <Icons src={gym} alt="gym" />
                    </Wraps>
                    <IconTitle>Професійний план тренування</IconTitle>
                    <Description>Програма тренувань складається згідно до вимог та бажань кожного клієнта.</Description>
                </WrapBlock>
                <WrapBlock>
                    <Wraps>
                        <Icons src={heart} alt="heart" />
                    </Wraps>
                    <IconTitle>Індивідуальний підхід</IconTitle>
                    <Description>Працюємо з кожною людиною індивіуально, враховуючи всі фізіологічні параметри.</Description>
                </WrapBlock>
            </WrapperIcon>
        </ChooseWrapper>
    )
}

export default Choose;
