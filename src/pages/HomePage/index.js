import React, { useContext } from 'react';
import { CancelPlan, ChangePlan, Container, Footer, LogoPlan, LogoUser, NavBar, PlanBenefitsBox, PlanBenefitsCard, UserTitle } from './styles';
import { FaUserCircle } from 'react-icons/fa'
import UserContext from '../../Providers/Auth';
import { useNavigate } from 'react-router';
import axios from 'axios';


function HomePage() {
    const { userToken, memberShipID, userPlanImage, userPlanPerks, userName } = useContext(UserContext);
    const navigate = useNavigate();


    console.log("MemberID", memberShipID)
    console.log("image", userPlanImage)
    console.log("perks", userPlanPerks)

    function changePlan() {
        console.log("mudar")
        navigate('/subscriptions');
    }
    function cancelPlan() {
        console.log("cancelar")
        const promise = axios.delete(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );
        promise.then((response) => {
            console.log("removeu", response.data)
            navigate('/');
        });

        promise.catch((error) => {
            alert("Algo deu errado, tente novamente mais tarde");
            console.log(error.response);
        });

    }

    return (
        <Container>
            <NavBar>
                <LogoPlan src={userPlanImage} alt="logo-plan" />
                <LogoUser><FaUserCircle /></LogoUser>
            </NavBar>
            <UserTitle>
                <p>Olá, {userName}</p>
            </UserTitle>
            <PlanBenefitsBox>
                {userPlanPerks.map((info) => (
                    <PlanBenefitsCard>
                        <p key={info.id}> {info.title}</p>
                    </PlanBenefitsCard>
                ))}
            </PlanBenefitsBox>

            <Footer>
                <ChangePlan onClick={() => changePlan()}>Mudar Plano</ChangePlan>
                <CancelPlan onClick={() => cancelPlan()}>Cancelar Plano</CancelPlan>
            </Footer>
        </Container>


    )
}

export default HomePage;