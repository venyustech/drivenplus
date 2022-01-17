
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = styled.div`
    min-height: 100vh;
    background-color: var(--main-color);
    font-family: var(--font-family);
    color: var(--font-color);
    padding-bottom: 36px;

     @media(max-width: 360px){
        Input,Button{
            height: 36px;
        }
    }
    @media(max-width: 300px) {
        Input{
            font-size: 12px;
            ::placeholder {
                padding-left: 1px;
            }
        }
    }

`
const ComeBackIcon = styled.div`
    svg{
        width: 28px;
        height: 32px;
        margin: 22px;
    }
`
const PlanInfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoImg = styled.img`
    height: 95px;
    width: 140px;
    margin-bottom: 16px;
`
const LogoTitle = styled.h1`
    font-size: 32px;
    line-height: 37px;
    font-weight: 700;

`
const InfosPlanBox = styled.div`
    width: 80%;
    margin:16px 0;
    
    @media(max-width: 300px){
        width: 90%;
    }
`
const PlanBenefitsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin:16px 0;

    p{
        font-size: 14px;
        line-height: 16px;
    }

`
const PlanPriceTitleWrapper = styled.div`
    display: flex;
    p{
        font-size: 16px;
        line-height: 19px;
        margin-left: 5px;
        margin-bottom: 8px;

    }
    svg{
        width: 18px;
        height: 18px;
        color: #FF4791;
    }

`
const PlanPriceWrapper = styled.div`
    margin-bottom: 36px;
    p{
        font-size: 14px;
        line-height: 16px;
    }

`
const FormWrapper = styled.div`
    width: 100%;
    form{
        width: 100%;
    }

`

const PlanBenefitsTitle = styled.div`
    display: flex;
    p{
        font-size: 16px;
        line-height: 19px;
        margin-left: 5px;
        margin-bottom: 8px;
    }
    svg{
        height: 20px;
        width: 20px;
        color: #FF4791;

    }

`
const Input = styled.input`
    height: 52px;
    width: 100%;

    background-color: #FFFFFF;
    color: #222222;
    font-size:20px;
    margin-bottom: 10px;
    border-radius: 8px; 
    font-size: 14px;
    padding: 0;
    ::placeholder {
      color: #7E7E7E;
      font-family: var(--font-family);
      padding-left: 8px;
    }
`;

const ValidationInfos = styled.div`
    width: 100%;
    display: flex;
    gap:5px;
`

const Button = styled.button`
    height: 52px;
    width: 100%;
    background-color: var(--botton-color); 
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    padding: 14px;
    /* ${(props) => !props.noMargin && "margin-bottom: 10px;"} */
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const LinkStyled = styled(Link)`
    color: #FFFFFF;
`;
export {
    Container, ComeBackIcon, PlanInfosWrapper, LogoImg, LogoTitle, InfosPlanBox,
    PlanBenefitsWrapper, PlanPriceTitleWrapper, PlanPriceWrapper, FormWrapper,
    PlanBenefitsTitle, Input, ValidationInfos, Button, LinkStyled
};