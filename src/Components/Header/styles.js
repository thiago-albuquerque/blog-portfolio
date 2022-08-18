import  styled from 'styled-components';

import img from '../../Assets/bgHeader.png'

export const Container = styled.header`
    width: 100%;
    max-height: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 10% 0;
`;
export const Content = styled.div`
    width: 80%;
    max-width: 1024px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
`;
export const AboutContainer = styled.div`
    margin-bottom: 70px;
    z-index: 2;
    @media screen and (max-width: 1024px) {
        margin-bottom: 30px;
    }
`;
export const H1 = styled.h1`
    font-size: min(45px, 10vw);
    color: #FAB341;
    padding: 0;
    margin: 0;
`;
export const H4 = styled.h4`
    font-size: min(30px, 6vw);
    padding: 0;
    margin: 0 0 5px 0;
`;
export const H6 = styled.h6`
    font-size: min(20px, 4vw);
    color: #FAB341;
    padding: 0;
    margin: 0;
`;
export const ImagePerfil = styled.img`
    width: min(200px, 35vw);
    border-radius: 10px;
`;
export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;
export const IconsContainer = styled.div`
    width: min(200px, 35vw);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;
export const Link = styled.a`
    font-size: min(35px, 7vw);
    color: #FAB341;
`;