import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { Button, Container, Input, LinkStyled } from './styles';


function SingUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();


    function handleSignUp(e) {
        e.preventDefault();

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
            email: email,
            name: name,
            cpf: cpf,
            password: password,
        });
        promise.then(response => handleSuccess(response.data))
        promise.catch(error => alert("deu ruim! tenta de novo."))
    }
    function handleSuccess(answer) {
        alert("Usuário cadastrado. Faça Login agora")
        navigate('/');
    }
    return (
        <Container>
            <form onSubmit={handleSignUp}>

                <Input type="name"
                    placeholder="nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input type="text"
                    name="cpf"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    placeholder="cpf 000.000.000-0"
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                />
                <Input type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}

                />
                <Input type="password"
                    placeholder="senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <Button >Entrar</Button>
            </form>
            <LinkStyled to="/">Já possui conta? Faça login.</LinkStyled>
        </Container>

    );
}

export default SingUpPage;