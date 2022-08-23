import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FaGithub } from 'react-icons/fa'; 

import { 
    Container,
    WebName,
    WebItem,
    InfoContainer,
    Title,
    SubTitle,
    H4,
    H6,
    BtnAccess,
    TextAccess,
    BtnGithub,
} from './styles';

import './webCarousel.css';

export default function WebProjects(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    }

    return(
        <Container>
            <WebName>Projetos Web</WebName>
                <Slider {...settings}>

                    <WebItem>
                        <InfoContainer>
                            <Title>Cinemando Web</Title>
                            <SubTitle>Site com informações sobre filmes</SubTitle>
                            <H4>Tecnologias</H4>
                            <H6>HTML | CSS | React | Axios | API TMDB</H6>

                            <BtnAccess href='https://cinemando-trailer.netlify.app/' target={'_blank'} rel='noopener noreferrer'>
                                <TextAccess>Acessar</TextAccess>
                            </BtnAccess>

                            <BtnGithub href='https://github.com/thiago-albuquerque/Cinemando' target={'_blank'} rel='noopener noreferrer'>
                                <FaGithub/>
                            </BtnGithub>
                        </InfoContainer> 
                    </WebItem>

                    <WebItem>
                        <InfoContainer>
                            <Title>Travel</Title>
                            <SubTitle>Site de hotelaria</SubTitle>
                            <H4>Tecnologias</H4>
                            <H6>HTML | CSS | Javascript | React</H6>

                            <BtnAccess href='https://travelhotel.vercel.app/' target={'_blank'} rel='noopener noreferrer'>
                                <TextAccess>Acessar</TextAccess>
                            </BtnAccess>

                            <BtnGithub href='https://github.com/thiago-albuquerque/travel' target={'_blank'} rel='noopener noreferrer'>
                                <FaGithub size={30} color='#262626'/>
                            </BtnGithub>
                        </InfoContainer>
                    </WebItem>

                    <WebItem>
                        <InfoContainer>
                            <Title>Minhas Tarefas</Title>
                            <SubTitle>Site Crud de Tarefas</SubTitle>
                            <H4>Tecnologias</H4>
                            <H6>HTML | CSS | Javascript</H6>

                            <BtnAccess href='https://minhastarefass.vercel.app/' target={'_blank'} rel='noopener noreferrer'>
                                <TextAccess>Acessar</TextAccess>
                            </BtnAccess>

                            <BtnGithub href='https://github.com/thiago-albuquerque/minhastarefas' target={'_blank'} rel='noopener noreferrer'>
                                <FaGithub size={30} color='#262626'/>
                            </BtnGithub>
                        </InfoContainer>
                    </WebItem>

                    <WebItem>
                        <InfoContainer>
                            <Title>Electric</Title>
                            <SubTitle>Site de aluguel de carros elétricos</SubTitle>
                            <H4>Tecnologias</H4>
                            <H6>HTML | CSS | Javascript | Google Maps Api</H6>

                            <BtnAccess href='https://electric-car-rentals.vercel.app/' target={'_blank'} rel='noopener noreferrer'>
                                <TextAccess>Acessar</TextAccess>
                            </BtnAccess>

                            <BtnGithub href='https://github.com/thiago-albuquerque/electric' target={'_blank'} rel='noopener noreferrer'>
                                <FaGithub size={30} color='#262626'/>
                            </BtnGithub>
                        </InfoContainer>
                    </WebItem>

                    <WebItem>
                        <InfoContainer>
                            <Title style={{textAlign: 'center'}}>Breve</Title>

                        </InfoContainer>
                    </WebItem>

                </Slider>
        </Container>
    );
}