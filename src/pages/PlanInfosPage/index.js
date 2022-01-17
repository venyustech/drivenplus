import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { FaMoneyBillWave } from 'react-icons/fa'



import { Button, ComeBackIcon, Container, FormWrapper, InfosPlanBox, Input, LinkStyled, LogoImg, LogoTitle, PlanBenefitsTitle, PlanBenefitsWrapper, PlanInfosWrapper, PlanPriceTitleWrapper, PlanPriceWrapper, ValidationInfos } from './styles';
import UserContext from '../../Providers/Auth';
import axios from 'axios';

function PlanInfosPage() {
    const { planId } = useParams();
    const { userToken } = useContext(UserContext);
    const [planInfo, setPlanInfo] = useState(null);
    const [planDetails, setPlanDetails] = useState(null);
    const [creditCardName, setCreditCardName] = useState('');
    const [creditCardDigits, setCreditCardDigits] = useState('');
    const [creditCardValidity, setCreditCardValidity] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => {
            setPlanDetails(response.data.perks)
            setPlanInfo(response.data);
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])



    function handleNewPlan(e) {
        e.preventDefault();
        console.log("novo plano:", e)
        // const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
        //     email: email,
        //     name: name,
        //     cpf: cpf,
        //     password: password,
        // });
        // promise.then(response => {
        //     console.log("novo plano:", response.data)

        // })
        // promise.catch(error => alert("deu ruim! tenta de novo."))
    }



    if (planInfo === null) {
        return <h1>loading...</h1>
    }

    return (
        <Container>
            <LinkStyled to={`/subscriptions`}>
                <ComeBackIcon><IoMdArrowRoundBack /></ComeBackIcon>
            </LinkStyled>

            <PlanInfosWrapper>
                <LogoImg src={planInfo.image} alt="logo-img" />
                <LogoTitle> {planInfo.name} </LogoTitle>
                <InfosPlanBox>

                    <PlanBenefitsWrapper>
                        <PlanBenefitsTitle>
                            <HiOutlineClipboardList />
                            <p>Benefícios:</p>
                        </PlanBenefitsTitle>
                        {planDetails.map((info, index) => (
                            <p key={info.id}> {index + 1}. {info.title}</p>
                        ))}
                    </PlanBenefitsWrapper>

                    <PlanPriceWrapper>
                        <PlanPriceTitleWrapper>
                            <FaMoneyBillWave />
                            <p>Preço:</p>
                        </PlanPriceTitleWrapper>
                        <p>R$ {planInfo.price} cobrados mensalmente</p>
                    </PlanPriceWrapper>

                    <FormWrapper>
                        <form onSubmit={handleNewPlan}>
                            <Input type="text"
                                onChange={(e) => setCreditCardName(e.target.value)}
                                value={creditCardName}
                                placeholder="Nome impresso no cartão"
                            />
                            <Input type="text"
                                onChange={(e) => setCreditCardDigits(e.target.value)}
                                value={creditCardDigits}
                                placeholder="Digitos do cartão"
                            />
                            <ValidationInfos>
                                <Input type="text"
                                    onChange={(e) => setSecurityCode(e.target.value)}
                                    value={securityCode}
                                    placeholder="Código de segurança"
                                />
                                <Input type="text"
                                    onChange={(e) => setCreditCardValidity(e.target.value)}
                                    value={creditCardValidity}
                                    placeholder="Validade"
                                />
                            </ValidationInfos>
                            <Button>{isLoading ?
                                ("loading...") : ("entrar")}
                            </Button>
                        </form>
                    </FormWrapper>

                </InfosPlanBox>
            </PlanInfosWrapper>
        </Container>
    );

}

export default PlanInfosPage;