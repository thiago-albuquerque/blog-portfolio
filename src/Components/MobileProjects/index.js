import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaGithub } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
} from "./styles";

export default function MobileProjects() {
  const settings = {
    className: "slides",
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <MobileName>Projetos Mobile</MobileName>
      <Slider {...settings}>
        {/* Medite */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Medite</Title>
              <SubTitle>Aplicativo de meditação</SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                Javascript | Styled Components | React Native | React Native
                Sound | React Navigation | NetInfo | Firebase | i18next | AdMob
              </H6>

              <BtnGithub
                href="https://play.google.com/store/apps/details?id=com.medite"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <IoLogoGooglePlaystore />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* Cinemando */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Cinemando App</Title>
              <SubTitle>Aplicativo com informações sobre filmes</SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                Expo | Javascript | Styled Components | React Native | Hook |
                Navigation | FlatList | Dados Offline | Axios | API TMDB
              </H6>

              <BtnGithub
                href="https://github.com/thiago-albuquerque/cinemandoApp"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* Coin */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Coin</Title>
              <SubTitle>Aplicativo com informações sobre criptomoedas</SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                RN CLI | Javascript | Styled Components | React Native | Hooks |
                FlatList | Modal | Push Notification (FCM) | Axios | API
                CoinStats
              </H6>

              <BtnGithub
                href="https://github.com/thiago-albuquerque/coin.git"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* Interval */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Interval</Title>
              <SubTitle>
                Aplicativo para gerenciamento de intervalos de tempo
              </SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                Javascript | Styled Components | React Native | React Native
                Sound | NetInfo | AdMob
              </H6>

              <BtnGithub
                href="https://play.google.com/store/apps/details?id=com.intervalwork"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <IoLogoGooglePlaystore />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* Maria Bonita */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Maria Bonita</Title>
              <SubTitle>Aplicativo de moda feminina</SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                Expo | Javascript | Styled Components | React Native | Hook |
                Stack Navigator
              </H6>

              <BtnGithub
                href="https://github.com/thiago-albuquerque/mariabonita"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* Short URL */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Short URL</Title>
              <SubTitle>Aplicativo encurtador de links</SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                Javascript | Styled Components | React Native | Clipboard | API
                Cuttly
              </H6>

              <BtnGithub
                href="https://github.com/thiago-albuquerque/shortURL"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* DevCam */}
        <MobileItem>
          <InfoContainer>
            <TitleContainer>
              <Title>Dev Cam</Title>
              <SubTitle>Aplicativo de captura de câmera</SubTitle>
            </TitleContainer>

            <ActionContainer>
              <H4>Tecnologias</H4>
              <H6>
                RN CLI | Javascript | Styled Components | React Native | React
                Native Camera | React Native Camera Roll | React Native Image
                Picker | React Native Vector Icons
              </H6>

              <BtnGithub
                href="https://github.com/thiago-albuquerque/devcam.git"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </BtnGithub>
            </ActionContainer>
          </InfoContainer>
        </MobileItem>

        {/* Breve */}
        <MobileItem>
          <InfoContainer>
            <Title style={{ textAlign: "center", margin: "auto" }}>Breve</Title>
          </InfoContainer>
        </MobileItem>
      </Slider>
    </Container>
  );
}
