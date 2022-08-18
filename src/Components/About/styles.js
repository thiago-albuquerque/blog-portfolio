import styled from 'styled-components';

export const Container = styled.footer`
    width: 80%;
    max-width: 1024px;
    max-height: 1024px;
    margin: 0 auto;
    padding-bottom: 100px;
    @media screen and (max-width: 600px) {
        padding-bottom: 70px;
    }
`;
export const H1 = styled.h1`
    font-size: min(45px, 8vw);
    border-bottom: 2px solid #D3C09F;
    padding: 0 10px;
`;
export const P = styled.p`
    font-size: min(18px, 3vw);
    text-align: justify;
`;
export const PColor = styled.p`
    font-size: min(18px, 3vw);
    text-align: justify;
    color: #D3C09F;
`;