import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: var(--main-color);
    font-family: var(--font-family);
    font-size: 14px;
    
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    gap: 16px;

    @media(max-width: 300px) {

            Img, Input, Button{
            width: 80%;
        }
    }
`;

const Img = styled.img`
    padding-bottom:100px ;

`
const Input = styled.input`
    height: 40px;
    width: 100%;

    background-color: #FFFFFF;
    color: #222222;
    font-size:20px;
    margin-bottom: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 8px; 

    ::placeholder {
      color: #DBDBDB;
      font-family: 'Lexend Deca', sans-serif;
    }
`;

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
    width: 100%;
    height: 17px;

    display: flex;
    justify-content: center;
    align-items: center;

    color:  #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

`;

export { Container, Input, Button, LinkStyled, Img };



