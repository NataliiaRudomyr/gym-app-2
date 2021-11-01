import React from 'react';

import { HeaderWrapper, Logo, List, Item, SocialWrapper, Icons, SocialLink, MyLink } from './style';

import logo from '../../assets/logo.png';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

function Header() {
    return (
        <HeaderWrapper>
            <MyLink to="/"><Logo src={logo} alt="logo" /></MyLink>
            <List>
                <MyLink to="/"><Item>Головна</Item></MyLink>
                <MyLink to="/about"><Item>Про нас</Item></MyLink>
                <MyLink><Item>Тренування</Item></MyLink>
                <MyLink><Item>Команда</Item></MyLink>
                <MyLink><Item>Новини</Item></MyLink>
                <MyLink><Item>Контакти</Item></MyLink>
            </List>
            <SocialWrapper>
                <SocialLink href="https://uk-ua.facebook.com/people/%D0%A2%D1%80%D0%B5%D0%BD%D0%B0%D0%B6%D0%B5%D1%80%D0%BD%D0%B8%D0%B9-%D0%97%D0%B0%D0%BB-%D0%86%D0%BC%D0%BF%D1%83%D0%BB%D1%8C%D1%81/100027483275519/" target="_blank">
                    <Icons src={facebook} />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/impuls_gym_/" target="_blank">
                <Icons src={instagram} />
                </SocialLink>
            </SocialWrapper>
        </HeaderWrapper>
    )
}

export default Header;
