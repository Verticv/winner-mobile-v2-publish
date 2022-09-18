// import Footer from 'components/mainPage/Footer'
// import Footer2 from 'components/mainPage/Footer2'
import MoneyCharge from '../MoneyCharge'
// import MoneyChargeHistory from 'components/money/MoneyChargeHistory'
// import AccountProfileComponent from 'components/common/AccountProfileComponent'
// import LeftMenu from "components/myPage/LeftMenu";
// import DirectoryComponent from 'components/myPage/DirectoryComponent'
// import Navbar from 'components/mainPage/Navbar'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
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
import activeIcon1 from '../../assets/mainPage/icons/recharge-application.png';
import activeIcon2 from '../../assets/mainPage/icons/active-icon2.png';
import Icon2 from '../../assets/mainPage/icons/charging-history.png';
import Icon1 from '../../assets/mainPage/icons/Icon1.png';
// import subIcon1 from '../images/newImages/mainPage/money/1.png';
// import subIcon2 from '../images/newImages/mainPage/money/2.png';
// import Logo from "../images/newImages/mainPage/icons/logo.png";
import HomePageTopBanner from '../HomePageTopBanner';
// import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const tabsArray = [
    { text: "충전신청", icon: Icon1, activeIcon: activeIcon1, id: 0, path: "/mypage/money/charge", width: '4.8125rem' },
    { text: "충전내역", icon: Icon2, activeIcon: activeIcon2, id: 1, path: "/mypage/money/charge/history", width: '4.8125rem' },
];

// const LeftMenuSubArray = [
//     {
//         text: "충전신청",
//         icon: subIcon1,
//         id: 0,
//         path: "/mypage/money/charge",
//         mainPath: "/mypage/money",
//     },
//     {
//         text: "충전내역",
//         icon: subIcon2,
//         id: 1,
//         path: "/mypage/money/charge/history",
//         mainPath: "/mypage/money",
//     }
// ];



const MoneyPage = ({ isAuthenticated, setAuthenticated }) => {

    // const LeftMenuArray = [
    //     { text: "보유머니 충전", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/mypage/money/charge", mainPath: "/mypage/money/charge" },
    //     { text: "보유머니 환전", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/mypage/money/exchange", mainPath: "/mypage/money/exchange" },
    // ]

    // const location = useLocation();
    // const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)

    return (
        <div style={{ maxWidth: '1242px', paddingBottom: '16rem' }} className="relative w-full flex flex-col justify-center overflow-hidden money-page">

            {/* <Routes>
                <Route exact path="/mypage/money">
                    <AccountProfileComponent isAuthenticated={isAuthenticated} />
                    <div style={{ marginTop: '1.875rem', marginBottom: '36.375rem' }} className="flex w-full">
                        <LeftMenu
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            selectedSubTab={selectedSubTab}
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuSubArray}
                        />
                    </div>
                    <div className="flex justify-center mb-40">
                        <img style={{ width: '22.3125rem' }} className="object-contain" src={Logo} alt="logo" />
                    </div>
                </Route>
            </Routes> */}

            <Routes>
                <Route path="/charge"
                    element={
                        <>
                            <HomePageTopBanner pageTitle='머니충전' toPath='/mypage/money' />

                            <div className="flex flex-col items-start limit:items-center w-full h-full">

                                <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} isMoneyPage='true' />


                                <div className="flex w-full">
                                    <MoneyCharge />
                                    {/* <div className="w-full">

                                <Route exact path="/mypage/money/charge">
                                    
                                </Route>
                                <Route exact path="/mypage/money/charge/history">
                                    <MoneyChargeHistory />
                                    <BottomNavbar />
                                </Route>
                            </div> */}
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

export default MoneyPage
