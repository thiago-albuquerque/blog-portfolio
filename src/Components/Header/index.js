import React from 'react';

import { 
    Container,
    Content,
    AboutContainer,
    H1, 
    H4, 
    H6,
    ImagePerfil,
    SocialContainer,
    IconsContainer,
    Link
} from './styles';

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Header(){
     return(
        <Container>
            <Content>
                <AboutContainer>
                        <H1>Opa, beleza?!</H1>

                        <H4>Me chamo Thiago e sou apaixonado por</H4>

                        <H6>Café, programação, música, filmes e finanças</H6>
                </AboutContainer>

                <SocialContainer>
                    <ImagePerfil src={require('../../Assets/perfil.png')}/>

                    <IconsContainer>
                        <Link href='https://www.linkedin.com/in/progthiago/' target={'_blank'} rel='noopener noreferrer'>
                            <FaLinkedin/>
                        </Link>
                        
                        <Link href='https://github.com/thiago-albuquerque' target={'_blank'} rel='noopener noreferrer'>
                            <FaGithubSquare/>
                        </Link>
                    </IconsContainer>
                </SocialContainer>
            </Content>
        </Container>
     );
 }