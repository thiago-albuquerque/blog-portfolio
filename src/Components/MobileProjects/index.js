import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FaGithub } from 'react-icons/fa'; 

import { 
    Container,
    MobileName,
    MobileItem,
    InfoContainer,
    TitleContainer,
    Title,
    SubTitle,
    ActionContainer,
    H4,
    H6,
    BtnGithub,
} from './styles';

export default function MobileProjects(){

    const settings = {
        className: 'slides',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return(
        <Container>
            <MobileName>Projetos Mobile</MobileName>
                <Slider {...settings}>

                    <MobileItem>
                        <InfoContainer>
                            <TitleContainer>
                                <Title>Cinemando App</Title>
                                <SubTitle>Aplicativo com informações sobre filmes</SubTitle>
                            </TitleContainer>

                            <ActionContainer>
                                <H4>Tecnologias</H4>
                                <H6>
                                    Expo | Javascript | Styled Components | 
                                    React Native | Hook | Navigation | FlatList | 
                                    Dados Offline | Axios | API TMDB
                                </H6>

                                <BtnGithub href='https://github.com/thiago-albuquerque/cinemandoApp' target={'_blank'} rel='noopener noreferrer'>
                                    <FaGithub/>
                                </BtnGithub>
                            </ActionContainer>
                        </InfoContainer> 
                    </MobileItem>
                    
                    <MobileItem>
                        <InfoContainer>
                            <TitleContainer>
                                <Title>Short URL</Title>
                                <SubTitle>Aplicativo encurtador de links</SubTitle>
                            </TitleContainer>

                            <ActionContainer>
                                <H4>Tecnologias</H4>
                                <H6>Javascript | Styled Components | React Native | Clipboard | API Cuttly</H6>

                                <BtnGithub href='https://github.com/thiago-albuquerque/shortURL' target={'_blank'} rel='noopener noreferrer'>
                                    <FaGithub/>
                                </BtnGithub>
                            </ActionContainer>
                        </InfoContainer> 
                    </MobileItem>

                    <MobileItem>
                        <InfoContainer>
                            <Title style={{textAlign: 'center', margin: 'auto'}}>Breve</Title>
                        </InfoContainer> 
                    </MobileItem>

                    <MobileItem>
                        <InfoContainer>
                            <Title style={{textAlign: 'center', margin: 'auto'}}>Breve</Title>
                        </InfoContainer> 
                    </MobileItem>

                </Slider>
        </Container>
    );
}