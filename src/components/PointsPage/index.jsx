import PointsApply from '../PointsApply'
// import PointsTransactionHistory from 'components/points/PointsTransactionHistory'
// import PointsAccumulateHistory from 'components/points/PointsAccumulateHistory'
// import AccountProfileComponent from 'components/common/AccountProfileComponent'
// import LeftMenu from "components/myPage/LeftMenu";
// import Logo from "../images/newImages/mainPage/icons/logo.png";
// import Navbar from 'components/mainPage/Navbar'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../HomePageTopBanner';
import HorizontalMenu1 from '..//HorizontalMenu1'
import React, { useState } from 'react'
// import img17 from '../../img17.png';
// import { Route } from 'react-router'
import Icon1 from '../../assets/mainPage/points/1.png';
import Icon2 from '../../assets/mainPage/points/2.png';
import Icon3 from '../../assets/mainPage/points/3.png';
import Icon1Active from '../../assets/mainPage/points/1-active.png';
import Icon2Active from '../../assets/mainPage/points/2-active.png';
import Icon3Active from '../../assets/mainPage/points/3-active.png';
import activeBG from '../../assets/mainPage/points/active-bg.png';
import { Route, Routes } from 'react-router-dom';
import PointsAccumulateHistory from '../PointsAccumulateHistory';
import Logo from "../../assets/myInfo/Logo.png";
import AccountProfileComponent from '../AccountProfileComponent'
import LeftMenu from "../LeftMenu";
import subIcon1 from '../../assets/bigIcons/leftMenu/13.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/14.png';
import subIcon3 from '../../assets/bigIcons/leftMenu/15.png';
import Header from '../Header';
import NavBottom from '../NavBottom';
// import subIcon2 from '../images/newImages/mainPage/points/2.png';
// import subIcon3 from '../images/newImages/mainPage/points/3.png';
// import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const tabsArray = [
    { text: "포인트전환신청", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/mypage/points/all", activeBG: activeBG, width: '7.875rem' },
    { text: "포인트적립내역", icon: Icon2, id: 1, activeIcon: Icon2Active, path: "/mypage/points/all/points-accumulate-history", activeBG: activeBG, width: '7.875rem' },
    { text: "포인트전환내역", icon: Icon3, id: 2, activeIcon: Icon3Active, path: "/mypage/points/all/points-transaction-history", activeBG: activeBG, width: '7.875rem' },
];

const LeftMenuSubArray = [
    {
        text: "포인트전환신청",
        icon: subIcon1,
        id: 0,
        path: "/mypage/points/all",
        width: '9.9375rem'
    },
    {
        text: "포인트적립내역",
        icon: subIcon2,
        id: 1,
        path: "/mypage/points/all/points-accumulate-history",
        width: '9.9375rem'
    },
    {
        text: "포인트전환내역",
        icon: subIcon3,
        id: 2,
        path: "/mypage/points/all/points-transaction-history",
        width: '9.9375rem'
    }
]


const PointsPage = ({ isAuthenticated, setAuthenticated }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)

    // const SubMenuList = (
    //     <>
    //         <div style={{ padding: '1.875rem', paddingBottom: '0.9375rem' }} className='w-full flex'>
    //             <div style={{ borderRadius: "1.625rem", padding: '2px', marginRight: '0.46875rem', height: '13.125rem' }} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
    //                 <div style={{ borderRadius: "1.5rem", paddingTop: '2.5625rem' }} className="w-full h-full bg-white flex items-center flex-col">
    //                     <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">잔여 포인트</div>
    //                     <div style={{ fontSize: '4.125rem', marginTop: '0.5625rem' }} className="tracking-tight flex items-center">
    //                         <span className="font-spoqaBold text-blue-r0056a6">278</span>
    //                         <span className="font-spoqa text-gray-r616161">P</span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div style={{ borderRadius: "1.625rem", marginLeft: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem' }} className="items-center flex-col flex w-1/2 bg-white border-2 border-gray-b7b7b7">
    //                 <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">당월 적립포인트</div>
    //                 <div style={{ fontSize: '4.125rem', marginTop: '0.5625rem' }} className="tracking-tight flex items-center text-gray-r616161">
    //                     <span className="font-spoqaBold">50</span>
    //                     <span className="font-spoqa">P</span>
    //                 </div>
    //             </div>
    //         </div>


    //         <div style={{ padding: '1.875rem', paddingTop: '0' }} className='w-full flex'>
    //             <div style={{ borderRadius: "1.625rem", marginRight: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem' }} className="items-center flex-col flex w-1/3 bg-white border-2 border-gray-b7b7b7">
    //                 <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">전월 적립포인트</div>
    //                 <div style={{ fontSize: '3.625rem', marginTop: '0.6625rem' }} className="tracking-tight flex items-center text-gray-r616161">
    //                     <span className="font-spoqaBold">228</span>
    //                     <span className="font-spoqa">P</span>
    //                 </div>
    //             </div>
    //             <div style={{ borderRadius: "1.625rem", marginRight: '0.46875rem', marginLeft: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem' }} className="items-center flex-col flex w-1/3 bg-white border-2 border-gray-b7b7b7">
    //                 <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">총 누적포인트</div>
    //                 <div style={{ fontSize: '3.625rem', marginTop: '0.6625rem' }} className="tracking-tight flex items-center text-gray-r616161">
    //                     <span className="font-spoqaBold">278</span>
    //                     <span className="font-spoqa">P</span>
    //                 </div>
    //             </div>
    //             <div style={{ borderRadius: "1.625rem", marginLeft: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem' }} className="items-center flex-col flex w-1/3 bg-white border-2 border-gray-b7b7b7">
    //                 <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">총 사용포인트</div>
    //                 <div style={{ fontSize: '3.625rem', marginTop: '0.6625rem' }} className="tracking-tight flex items-center text-gray-r616161">
    //                     <span className="font-spoqaBold">0</span>
    //                     <span className="font-spoqa">P</span>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
    const MyInfo = () => {
        return (
            <>
                <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                    />
                </div>
                <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                    <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                </div>
            </>
        )
    }

    return (
        <div style={{}} className="relative w-full flex flex-col justify-center overflow-hidden">

            <Routes>
                <Route index element={
                    <>
                        <MyInfo />
                    </>
                }
                />
                <Route path='/all/*'
                    element={<>
                        <Header />
                        <HomePageTopBanner pageTitle='포인트' toPath='/mypage/points' />
                        <div className='mypage-points'>
                            <HorizontalMenu1 withSmallMarginTop itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                        </div>
                        <Routes>
                            <Route index element={
                                <div className='points-apply'>
                                    <PointsApply />
                                </div>
                            } />
                            <Route path='/points-accumulate-history'
                                element={
                                    <>
                                        {/* <img
                                            src={img17}
                                            alt=""
                                            style={{ position: 'absolute', top: '0', opacity: '0.5' }}
                                        /> */}
                                        <PointsAccumulateHistory />
                                    </>
                                }
                            />
                        </Routes>
                        <NavBottom />
                    </>}
                >
                </Route>
            </Routes>
        </div>
    )
}

export default PointsPage
