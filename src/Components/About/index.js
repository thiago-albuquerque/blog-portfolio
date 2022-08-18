import React from 'react';

import { Container, H1, P, PColor } from './styles';

export default function About(){
    return(
        <Container>
            <H1>Sobre</H1>

            <P>Sou Desenvolvedor de Software, Produtor de música e adepto a estar sempre aprendendo e me aperfeiçoando.
            </P>

            <P>Hoje tenho um projeto de música eletrônica chamado Gárek, onde atuo nas horas vagas. É muito gratificante saber que minhas músicas são ouvidas no mundo todo através das plataformas de streaming de música como Spotify, Deezer, Shazam e do YouTube, mas tenho isso apenas como hobby.
            </P>

            <PColor>
            Vi no mundo do desenvolvimento de software uma oportunidade de encontrar soluções para problemas do dia a dia e que afetam as empresas, assim percebo que é possível, junto à outras pessoas, criar estratégias e planos de negócio para diminuir contratempos e agregar valor como programador.
            </PColor>

            <P>
            Entendo que um bom profissional se desenvolve com o tempo, com muito planejamento, resiliência, trabalho em equipe e paciência.</P>

            <P>Se você chegou até aqui, agradeço pela sua visita e te desejo uma ótima semana!</P>

            <P>Abraços.</P>
        </Container>
    );
}