import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
// import Loader from "react-loader-spinner";

import logo from '../../assets/drivenLogo.png'
import UserContext from '../../Providers/Auth';
import { Container, Input, Button, LinkStyled, Img } from './styles';

function LoginPage() {

    const { setUserToken, setUserInfos, setMenberShipID, setUserName, setUserPlanImage, setUserPlanPerks } = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");


    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled")

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: password,
        });
        promise.then(response => {
            setUserToken(response.data.token);
            setUserInfos(response.data)
            setIsLoading(false);
            setInputLoading("");
            setUserName(response.data.name)
            if (response.data.membership === null) {
                navigate('/subscriptions');
            }
            else {
                setMenberShipID(response.data.membership.id)
                setUserPlanImage(response.data.membership.image)
                setUserPlanPerks(response.data.membership.perks)
                console.log("membeshipID: ", response.data.id)
                navigate('/home')
            }

        })
        promise.catch((error) => {
            console.log(error.response);
            alert("Tenta de novo. Dados incorretos");
            setIsLoading(false)
            setInputLoading("")
        })
    }
    return (
        <Container>
            <Img src={logo} alt="logo TrackIt" />
            <form onSubmit={handleLogin}>
                <Input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="email"
                    disabled={inputLoading}
                />

                <Input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="senha"
                    disabled={inputLoading}
                />

                <Button>{isLoading ?
                    ("loading...") : ("entrar")}
                </Button>
            </form>

            <LinkStyled to="/sign-up">Não tem uma conta? Cadastre-se!</LinkStyled>
        </Container>
    );
}



export default LoginPage;