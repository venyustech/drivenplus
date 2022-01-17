import styled from 'styled-components';


const Container = styled.div`
    min-height: 100vh;
    background-color: var(--main-color);
    color: var(--font-color);
    font-family: var(--font-family);
`
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
`
const UserTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
`

const LogoPlan = styled.img`
    height: 50.8px;
    width: 74.5;
    margin: 22px 38px;
`
const LogoUser = styled.div`
    height: 50.8px;
    width: 74.5;
    margin: 22px 38px;
    svg{
        width:34px; 
        height: 34px;
        background-color: none;
        color: #fff;
    }

`
const PlanBenefitsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PlanBenefitsCard = styled.div`
    width: 299px;
    height: 52px;

    background-color: #FF4791;
    border-radius: 8px;
    margin-bottom: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
`
const Footer = styled.div`  
    position: fixed;
    bottom: 0;
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChangePlan = styled.button`
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    color: #FFFFFF;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
`
const CancelPlan = styled.button`
    width: 299px;
    height: 52px;
    background-color:#FF4747;
    color: #FFFFFF;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;

`


export {
    Container, NavBar, LogoPlan, LogoUser, PlanBenefitsCard, Footer, PlanBenefitsBox,
    CancelPlan, ChangePlan, UserTitle
}