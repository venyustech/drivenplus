import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { FaMoneyBillWave, FaWindowClose } from 'react-icons/fa'

import { Button, Cancel, CheckAnswer, ComeBackIcon, ConfirmBox, ConfirmCard, Container, FormsContainer, FormWrapper, InfosPlanBox, Input, LinkStyled, LogoImg, LogoTitle, PlanBenefitsTitle, PlanBenefitsWrapper, PlanInfosWrapper, PlanPriceTitleWrapper, PlanPriceWrapper, ValidationInfos } from './styles';
import UserContext from '../../Providers/Auth';
import axios from 'axios';

function PlanInfosPage() {
    const { planId } = useParams();
    const {
        userToken, memberShipID, setMenberShipID, setUserPlanImage, setUserPlanPerks
    } = useContext(UserContext);

    const navigate = useNavigate();


    const [planInfo, setPlanInfo] = useState(null);
    const [planDetails, setPlanDetails] = useState(null);

    const [creditCardName, setCreditCardName] = useState('');
    const [creditCardDigits, setCreditCardDigits] = useState('');
    const [creditCardValidity, setCreditCardValidity] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");




    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => {
            setPlanDetails(response.data.perks)
            setPlanInfo(response.data);
            setMenberShipID(response.data.id)
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    function confirmSubscription(e) {
        e.preventDefault();
        setIsLoading(true);
        setInputLoading("disabled")
    }
    function handleNewPlan() {
        setIsLoading(false);
        setInputLoading("");

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
            membershipId: memberShipID,
            cardName: creditCardName,
            cardNumber: creditCardDigits,
            securityNumber: securityCode,
            expirationDate: creditCardValidity

        },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );
        promise.then(response => {
            setUserPlanImage(response.data.membership.image)
            setUserPlanPerks(response.data.membership.perks)
            navigate('/home');

        })
        promise.catch(error => alert("cartão inválido! tenta de novo."))
    }

    if (planInfo === null) {
        return <h1>loading...</h1>
    }
    return (
        <Container>
            {isLoading ?
                (
                    <ConfirmBox>
                        <FaWindowClose onClick={() => {
                            setIsLoading(false)
                            setInputLoading("")
                        }} />
                        <ConfirmCard>

                            <p>
                                Tem certeza que deseja assinar o plano {planInfo.name} (R${planInfo.price})?
                            </p>
                            <CheckAnswer>
                                <Cancel onClick={() => {
                                    setIsLoading(false)
                                    setInputLoading("")
                                }}>Não
                                </Cancel>
                                <Button onClick={() => handleNewPlan()}> SIM </Button>
                            </CheckAnswer>
                        </ConfirmCard>
                    </ConfirmBox>

                ) : ("")}
            <FormsContainer isLoading={isLoading}>
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
                            <form onSubmit={confirmSubscription}>
                                <Input type="text"
                                    onChange={(e) => setCreditCardName(e.target.value)}
                                    value={creditCardName}
                                    placeholder="Nome impresso no cartão"
                                    disabled={inputLoading}

                                />
                                <Input type="text"
                                    onChange={(e) => setCreditCardDigits(e.target.value)}
                                    value={creditCardDigits}
                                    placeholder="Digitos do cartão"
                                    disabled={inputLoading}

                                />
                                <ValidationInfos>
                                    <Input type="text"
                                        onChange={(e) => setSecurityCode(e.target.value)}
                                        value={securityCode}
                                        placeholder="Código de segurança"
                                        disabled={inputLoading}

                                    />
                                    <Input type="text"
                                        onChange={(e) => setCreditCardValidity(e.target.value)}
                                        value={creditCardValidity}
                                        placeholder="Validade"
                                        disabled={inputLoading}

                                    />
                                </ValidationInfos>
                                <Button>{isLoading ?
                                    ("loading...") : ("ASSINAR")}
                                </Button>
                            </form>
                        </FormWrapper>
                    </InfosPlanBox>
                </PlanInfosWrapper>
            </FormsContainer>
        </Container>
    );

}

export default PlanInfosPage;