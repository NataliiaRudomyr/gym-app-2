import React from 'react';

import { FooterMain, FooterWrapper, FooterBlock, FooterTitle, FooterRow, Icons, IconWrapper, IconDisplay, InfoBlock, InfoRow, Schedule } from './style';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import location from '../../assets/icons/location.svg';
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/mail.svg';

function Footer() {
    return (
        <FooterMain>
            <FooterWrapper>
                <FooterBlock>
                    <FooterTitle>Про нас</FooterTitle>
                    <FooterRow>
                        Наш тренажерний зал - це ідеальне місце для всіх, хто захоплюється спортом, бодібілдингом та фітнесом. З нами ви зможете досягти свого найкращого фізичного стану!
                    </FooterRow>
                    <IconDisplay>
                        <IconWrapper href="https://uk-ua.facebook.com/people/%D0%A2%D1%80%D0%B5%D0%BD%D0%B0%D0%B6%D0%B5%D1%80%D0%BD%D0%B8%D0%B9-%D0%97%D0%B0%D0%BB-%D0%86%D0%BC%D0%BF%D1%83%D0%BB%D1%8C%D1%81/100027483275519/" target="_blank">
                            <Icons src={facebook} size="20px"/>
                        </IconWrapper>
                        <IconWrapper href="https://www.instagram.com/impuls_gym_/" target="_blank">
                            <Icons src={instagram} size="20px"/>
                        </IconWrapper>
                    </IconDisplay>
                </FooterBlock>
                <FooterBlock>
                    <FooterTitle>Контактна інформація</FooterTitle>
                    <InfoBlock>
                        <InfoRow href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%B0%D1%84%D0%B0%D1%80%D0%B8%D0%BA%D0%B0,+13,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.817821,24.0707656,17z/data=!3m1!4b1!4m5!3m4!1s0x473ac2a89320ddf9:0x2a652d30900d1f47!8m2!3d49.817821!4d24.0729543?hl=ru" mt="10px">
                            <Icons src={location} size="48px" mr="20px" />
                            <FooterRow>м.Львів, вул.Шафарика 13</FooterRow>
                        </InfoRow>
                        <InfoRow href="tel:+380962317527" mt="10px">
                            <Icons src={phone} size="48px" mr="20px" />
                            <FooterRow>+38 (096) 231 - 75 - 27</FooterRow>
                        </InfoRow>
                        <InfoRow href="mailto:ironxav205@gmail.com" mt="10px">
                            <Icons src={mail} size="48px" mr="20px" />
                            <FooterRow>ironxav205@gmail.com</FooterRow>
                        </InfoRow>
                    </InfoBlock>
                </FooterBlock>
                <FooterBlock>
                    <FooterTitle>Графік роботи</FooterTitle>
                    <InfoBlock>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">Понеділок</Schedule>
                            <Schedule>з 13:00 до 21:00</Schedule>
                        </InfoRow>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">Вівторок</Schedule>
                            <Schedule>з 13:00 до 21:00</Schedule>
                        </InfoRow>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">Середа</Schedule>
                            <Schedule>з 13:00 до 21:00</Schedule>
                        </InfoRow>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">Четвер</Schedule>
                            <Schedule>з 13:00 до 21:00</Schedule>
                        </InfoRow>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">П'ятниця</Schedule>
                            <Schedule>з 13:00 до 21:00</Schedule>
                        </InfoRow>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">Субота</Schedule>
                            <Schedule>з 11:00 до 14:00</Schedule>
                        </InfoRow>
                        <InfoRow mt="5px">
                            <Schedule color="grey" mr="50px" width="40px">Неділя</Schedule>
                            <Schedule>з 16:00 до 19:00</Schedule>
                        </InfoRow>
                    </InfoBlock>
                </FooterBlock>
            </FooterWrapper>
        </FooterMain>
    )
}

export default Footer;
