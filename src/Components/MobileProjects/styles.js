import styled from 'styled-components';

import img from '../../Assets/bgMobile.png';

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    max-height: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3a3a3a;
    margin-bottom: 130px;
    @media screen and (max-width: 600px) {
        margin-bottom: 70px;
    }
`;
export const MobileName = styled.h1`
    font-size: min(45px, 10vw);
    width: 80%;
    max-width: 1024px;
    color: #FAB341;
`;
export const MobileItem = styled.div`

`;
export const InfoContainer = styled.div`
    width: min(80%, 50vw);
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    margin: auto;
`;
export const Title = styled.h1`
    width: 90%;
    font-size: min(35px, 5vw);
    color: #FAB341;
    margin: 0;
`;
export const SubTitle = styled.h6`
    width: 90%;
    font-size: min(14px, 3vw);
    font-weight: lighter;
    margin: 0 0 50px 0;
`;
export const H4 = styled.h4`
    width: 90%;
    font-size: min(24px, 4.5vw);
    color: #D3C09F;
    margin: 0;
`;
export const H6 = styled.h6`
    width: 90%;
    font-size: min(14px, 3vw);
    font-weight: lighter;
    margin: 0 0 50px 0;
`;
export const BtnGithub = styled.a`
    width: 90%;
    font-size: min(30px, 5vw);
    color: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAB341;
    border-radius: 5px;
    padding: 6px 0;
`;