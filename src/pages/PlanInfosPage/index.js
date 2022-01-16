import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io'

import { ComeBackIcon, Container, InfosPlanBox, LogoImg, LogoTitle, PlanInfosWrapper } from './styles';
import UserContext from '../../Providers/Auth';
import axios from 'axios';

function PlanInfosPage() {

    const { planId } = useParams();
    const { userToken } = useContext(UserContext);
    const [planInfo, setPlanInfo] = useState(null);
    console.log(planId)
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => {
            console.log("deu bom", response.data);
            setPlanInfo(response.data);
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    if (planInfo === null) {
        return <h1>loading...</h1>
    }
    return (
        <Container>
            <ComeBackIcon>   <IoMdArrowRoundBack /> </ComeBackIcon>
            <h1>oioi</h1>
            <PlanInfosWrapper>
                <LogoImg></LogoImg>
                <LogoTitle> </LogoTitle>
                <InfosPlanBox></InfosPlanBox>
            </PlanInfosWrapper>
        </Container>
    );
}

export default PlanInfosPage;