import React from 'react';
// import { useParams } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io'

import { ComeBackIcon, Container, InfosPlanBox, LogoImg, LogoTitle, PlanInfosWrapper } from './styles';

function PlanInfosPage() {

    // const { planId } = useParams();


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