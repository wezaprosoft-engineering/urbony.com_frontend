import React from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper } from "../Popular/Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import House1 from '../../assets/images/house1.png'
import HomeCard from "../HomeCards";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Properties = props =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>{props.lineTitle}</h3>
                    </Head>
                    <Head style={{
                        color: "rgba(217,11,66,1)",
                        cursor: "pointer"
                        }} onClick={() => navigate('/add-property')}>
                        <h3>{t('myProperties.add')}</h3>
                        <Arrow src={arrow}/>
                    </Head>
                </Title>
                <Home>
                    <HomeCard housePicture={House1} buttonText={t('myProperties.edit')} buttonColor="rgba(46,15,89,1)"/>
                    <HomeCard housePicture={House1} buttonText={t('myProperties.edit')} buttonColor="rgba(46,15,89,1)"/>
                    <HomeCard housePicture={House1} buttonText={t('myProperties.edit')} buttonColor="rgba(46,15,89,1)"/>
                </Home>
            </Content>
        </Wrapper>
    )
}

export default Properties;