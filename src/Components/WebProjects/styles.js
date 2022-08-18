import styled from 'styled-components';

import img from '../../Assets/bgWeb.png';

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    max-height: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D3C09F;
    padding: 50px 0;
    margin-bottom: 130px;
    @media screen and (max-width: 600px) {
        margin-bottom: 80px;
    }
`;
export const WebName = styled.h1`
    font-size: min(45px, 10vw);
    width: 80%;
    max-width: 1024px;
    color: #606060;
`;
export const WebItem = styled.div`
    height: 350px;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
`;
export const InfoContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    @media screen and (max-width: 600px) {
        width: 90%;
    }
`;
export const Title = styled.h1`
    width: 70%;
    font-size: min(35px, 5vw);
    color: #FAB341;
    margin: 0;
`;
export const SubTitle = styled.h6`
    width: 70%;
    font-size: min(14px, 3vw);
    font-weight: lighter;
    margin: 5px 0 30px 0;
`;
export const H4 = styled.h4`
    width: 70%;
    font-size: min(24px, 4.5vw);
    color: #D3C09F;
    margin: 0 0 5px 0;
`;
export const H6 = styled.h6`
    width: 70%;
    font-size: min(14px, 3vw);
    font-weight: lighter;
    margin: 5px 0 30px 0;
`;
export const BtnAccess = styled.a`
    width: 70%;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAB341;
    border-radius: 5px;
    text-decoration: none;
    padding: 10px 0;
    margin-bottom: 10px;
`;
export const TextAccess = styled.h6`
    font-size: min(16px, 2.5vw);
    color: #fff;
    margin: 0;    
`;
export const BtnGithub = styled.a`
    width: 70%;
    font-size: min(30px, 5vw);
    color: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAB341;
    border-radius: 5px;
    padding: 6px 0;
`;