import React from "react";
import AllCards from "../Card/AllCards";
import Header from "../Header";
import Jackpot from "../Jackpot";
import NavBottom from "../NavBottom";
import NavButtons from "../NavButtons/NavButtons";
import NoticeBanner from "../NoticeBanner";
import Slider from "../SliderImgs/Slider";

function MainPage() {
    return (
        <>
            <Header />
            <Slider />
            <NoticeBanner />
            <Jackpot />
            <div style={{ display: 'flex' }}>
                <NavButtons />
                <AllCards />
            </div>
            <NavBottom />
        </>
    );
}

export default MainPage;