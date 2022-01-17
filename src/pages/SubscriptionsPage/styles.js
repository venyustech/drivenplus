import styled from 'styled-components';


const Container = styled.div`
    background-color: var(--main-color);
    font-family: var(--font-family);
    color: var(--font-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    padding-bottom: 36px;
`;
const Title = styled.h1`
    padding: 30px 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;

    color: var(--font-color);
`
const PlansWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 290px;
    height: 180px;

    background: #0E0E13;
    border: 3px solid #7E7E7E;
    box-sizing: border-box;
    border-radius: 12px;
    cursor: pointer;
    
`
const LogoPLan = styled.div`
    width: 139.38px;
    height: 95.13px;
`

const LogoPrice = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

color: #FFFFFF;
`
export { Container, Title, PlansWrapper, LogoPLan, LogoPrice };
