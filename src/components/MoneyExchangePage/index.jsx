import MoneyExchange from '../MoneyExchange'
import MoneyExchangeHistory from '../MoneyExchangeHistory'
// import Navbar from '/Navbar'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
import AccountProfileComponent from '../AccountProfileComponent'
import LeftMenu from "../LeftMenu";
// import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu'
import HorizontalMenu1 from '../HorizontalMenu1'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
// import MoneyChargeBanner from '../images/money/money_charge.png'
// import MoneyExchangeBanner from '../images/money/money_exchange.png'
// import Icon1 from '../images/money/leftMenu/icon_1.png'
// import Icon2 from '../images/money/leftMenu/icon_2.png'
// import IconHighlight1 from '../images/money/leftMenu/icon_1_highlight.png'
// import IconHighlight2 from '../images/money/leftMenu/icon_2_highlight.png'
// import Icon1 from '../images/newImages/exchange.png'
// import Icon2 from '../images/newImages/mainPage/Recharge-application3.png'
// import subIcon1 from '../images/newImages/mainPage/money/3.png';
// import subIcon2 from '../images/newImages/mainPage/money/4.png';
// import Logo from "../images/newImages/mainPage/icons/logo.png";
// import activeIcon1 from '../../assets/mainPage/icons/recharge-application.png';
// import activeIcon2 from '../../assets/mainPage/icons/active-icon2.png';
import Icon2 from '../../assets/mainPage/icons/charging-history.png';
import Icon1 from '../../assets/mainPage/icons/Icon1.png';
import HomePageTopBanner from '../HomePageTopBanner';
import Logo from "../../assets/myInfo/Logo.png";
import subIcon1 from '../../assets/bigIcons/leftMenu/26.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/27.png';
import activeIcon1 from '../../assets/mainPage/icons/recharge-application.png';
import activeIcon2 from '../../assets/mainPage/icons/active-icon2.png';
import NavBottom from '../NavBottom';
import Header from '../Header';
// import Icon2 from '../../assets/mainPage/icons/charging-history.png';
// import Icon1 from '../../assets/mainPage/icons/Icon1.png';
// import BottomNavbar from '../components/bottomNavbar/BottomNavbar'

// currency exchange
const tabsArray = [
    { text: "환전신청", icon: Icon1, id: 0, activeIcon: activeIcon1, path: "/mypage/money/exchange/currency", width: '7.875rem' },
    { text: "환전내역", icon: Icon2, id: 1, activeIcon: activeIcon2, path: "/mypage/money/exchange/currency/history", width: '7.875rem' },
];

const LeftMenuSubArray = [
    {
        text: "환전신청",
        icon: subIcon1,
        id: 0,
        path: "/mypage/money/exchange/currency",
        mainPath: "/mypage/money/exchange",
        width: '9.9375rem'
    },
    {
        text: "환전내역",
        icon: subIcon2,
        id: 1,
        path: "/mypage/money/exchange/currency/history",
        mainPath: "/mypage/money/exchange",
        width: '9.9375rem'
    }
]


const MoneyExchangePage = ({ isAuthenticated, setAuthenticated, subActiveButton, setSubActiveButton }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedTab, selectedSubTab)
    

    return (
        <div style={{ maxWidth: '1242px', paddingBottom: '16rem' }} className="relative w-full flex flex-col justify-center overflow-hidden money-page2">
            <Routes>

                <Route exact path="/*"
                    element={
                        <>
                            <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                            <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                                <LeftMenu
                                    selectedTab={selectedTab}
                                    setSelectedTab={setSelectedTab}
                                    selectedSubTab={selectedSubTab}
                                    setSelectedSubTab={setSelectedSubTab}
                                    array={LeftMenuSubArray}
                                    subActiveButton={subActiveButton}
                                />
                            </div>
                            <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                                <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                            </div>
                        </>
                    }
                >

                </Route>


                <Route path="/currency/*"
                    element={
                        <>
                            <div className="w-full z-30 flex flex-col items-center">
                                {/* <NoticeBanner /> */}
                                {/* <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} /> */}
                                <Header />
                                <HomePageTopBanner pageTitle='머니환전' toPath='/mypage/money/exchange' />
                            </div>

                            <div className="flex flex-col items-start limit:items-center w-full h-full">

                                <div className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full"  id='container-nav'>
                                            <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} isMoneyPage='true' />
                                            {/* {(selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 4 && selectedTab !== 7 && selectedTab !== 8) && (
                                    <div style={{marginLeft: `${selectedTab * 116 + 49}px`}} className={`absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                                        <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
                                    </div>
                                )} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full">
                                    <div className="w-full">
                                        <Routes>

                                            <Route path="/history"
                                                element={
                                                    <>
                                                        <MoneyExchangeHistory subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                                        {/* <BottomNavbar /> */}
                                                        <NavBottom />
                                                    </>
                                                }
                                            >
                                            </Route>
                                            <Route index
                                                element={

                                                    <>
                                                        {/* hi */}
                                                        <MoneyExchange subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                                        <NavBottom />
                                                    </>

                                                }
                                            >
                                            </Route>
                                            <Route path="*">
                                            </Route>

                                        </Routes>
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                >

                </Route>
            </Routes>
        </div>
    )
}

export default MoneyExchangePage
