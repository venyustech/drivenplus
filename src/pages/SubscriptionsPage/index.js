import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Providers/Auth';
import { Container, LogoPLan, LogoPrice, PlansWrapper, Title } from './styles';


function SubscriptionsPage() {

    const { userToken } = useContext(UserContext);
    const [plansInfos, setPlansInfos] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => {
            setPlansInfos(response.data);
            console.log("deu bom", response.data);
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    if (plansInfos.length === 0) {
        return <h1>loading...</h1>
    }
    return (
        <Container>
            <Title>Escolha seu plano</Title>


            {plansInfos.map((info) => (
                <PlansWrapper key={info.id}>
                    <Link to={`/subscriptions/${info.id}`}>
                        <LogoPLan><img src={info.image} alt="logo-plan" /></LogoPLan>
                        <LogoPrice> R$ {info.price} </LogoPrice>
                    </Link>
                </PlansWrapper>
            ))}

        </Container>
    );
}

export default SubscriptionsPage;