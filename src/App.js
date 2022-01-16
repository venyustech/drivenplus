import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import UserContext from "./Providers/auth";
import GlobalStyles from "./assets/GlobalStyles";
import { useState } from "react";
import SingUpPage from "./pages/SingUpPage";
import UserContext from "./Providers/Auth";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import HomePage from "./pages/HomePage";
import PlanInfosPage from "./pages/PlanInfosPage";

export default function App() {
    const [userToken, setUserToken] = useState(null);
    const [userInfos, setUserInfos] = useState('');

    return (
        <>
            <UserContext.Provider value={{ userToken, setUserToken, userInfos, setUserInfos }}>

                <BrowserRouter>
                    <GlobalStyles />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/sign-up" element={<SingUpPage />} />
                        <Route path="/subscriptions" element={<SubscriptionsPage />} />
                        <Route path="/subscriptions/:planId" element={<PlanInfosPage />} />
                        <Route path="/home" element={<HomePage />} />

                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}