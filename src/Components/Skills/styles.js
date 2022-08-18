import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    margin: 130px auto;
    @media screen and (max-width: 600px) {
        margin: 80px auto;
    }
`;
export const SoftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        gap: 0;
        align-items: flex-start;
    }
`;
export const ImgSoftContainer = styled.div`
    display: flex;
    margin: 0 0 130px 0;
    gap: min(25px, 2vw); 
    @media screen and (max-width: 600px) {
        margin: 0 0 80px 0;
    }   
`;
export const SoftImg = styled.img`
    width: min(250px, 30vw);
`;
export const TextSoftContainer = styled.div`
    
`;
export const SoftH1 = styled.h1`
    font-size: min(45px, 6vw);
    border-bottom: 2px solid #D3C09F;
    background: #606060;
    padding: 0 10px;
    margin-left: -25%;
    @media screen and (max-width: 1024px) {
        margin: 0;
    }
`;
export const SoftP = styled.p`
    font-size: min(20px, 3.5vw);
`;
export const HardContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-end;
    }
`;
export const ImgHardContainer = styled.div`
    display: flex;
    gap: min(25px, 2vw);
    z-index: 1;
`;
export const HardImg = styled.img`
    width: min(250px, 30vw);
`;
export const TextHardContainer = styled.div`
    padding-right: 25px;
    z-index: 2;
    @media screen and (max-width: 1024px) {
        padding: 0;
    }
`;
export const HardH1 = styled.h1`
    font-size: min(45px, 6vw);
    text-align: end;
    border-bottom: 2px solid #D3C09F;
    background: #606060;
    padding: 0 10px;
    margin-right: -25%;
    @media screen and (max-width: 1024px) {
        margin: 0;
    }
`;
export const HardP = styled.p`
    font-size: min(20px, 3.5vw);
`;
