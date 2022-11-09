import React from "react";

import {
  Container,
  SoftContainer,
  ImgSoftContainer,
  SoftImg,
  TextSoftContainer,
  SoftH1,
  SoftP,
  HardContainer,
  ImgHardContainer,
  HardImg,
  TextHardContainer,
  HardH1,
  HardP,
} from "./styles";

export default function Skills() {
  return (
    <Container>
      <SoftContainer>
        <ImgSoftContainer>
          <SoftImg src={require("../../Assets/soft1.png")} />
          <SoftImg src={require("../../Assets/soft2.png")} />
        </ImgSoftContainer>

        <TextSoftContainer>
          <SoftH1>Soft Skills</SoftH1>
          <SoftP>
            Boa comunicação, resiliência, criatividade, pontualidade, constante
            busca pelo desenvolvimento profissional e pessoal.
          </SoftP>
        </TextSoftContainer>
      </SoftContainer>

      <HardContainer>
        <TextHardContainer>
          <HardH1>Hard Skills</HardH1>
          <HardP>
            HTML | CSS | Styled Components | Sass | Scss | Javascript | ReactJs
            | NextJs | React Native | Push Notification (FCM) | i18next | Git |
            Figma | Canva
          </HardP>
        </TextHardContainer>

        <ImgHardContainer>
          <HardImg src={require("../../Assets/hard1.png")} />
          <HardImg src={require("../../Assets/hard2.png")} />
        </ImgHardContainer>
      </HardContainer>
    </Container>
  );
}
