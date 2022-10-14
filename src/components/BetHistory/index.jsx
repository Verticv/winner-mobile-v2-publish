/* eslint-disable */
import React, { useState } from 'react'
import AccountProfileComponent from '../AccountProfileComponent'
import HorizontalMenu from '../HorizontalMenu'
import activeBG from '../../assets/mainPage/points/active-bg.png';
import icon1 from '../../assets/bigIcons/1.png';
import icon2 from '../../assets/bigIcons/2.png';
import icon3 from '../../assets/bigIcons/3.png';
import icon4 from '../../assets/bigIcons/4.png';
import icon5 from '../../assets/bigIcons/5.png';
import icon6 from '../../assets/bigIcons/6.png';
import icon7 from '../../assets/bigIcons/7.png';
import icon8 from '../../assets/bigIcons/8.png';
import icon9 from '../../assets/bigIcons/9.png';
import icon10 from '../../assets/bigIcons/10.png';
import HotelCasinoBetHistory from '../HotelCasinoBetHistory'
// import icon10 from '../../assets/bigIcons/10.png';
// import icon4 from '../../assets/icon4.png';
// import icon5 from '../../assets/icon5.png';
// import icon6 from '../../assets/icon6.png';
// import icon7 from '../../assets/icon7.png';
// import icon8 from '../../assets/icon8.png';
// import icon9 from '../../assets/icon9.png';
// import icon10 from '../../assets/icon10.png';
import icon1Active from '../../assets/bigIcons/1-active.png';
import icon2Active from '../../assets/bigIcons/2-active.png';
import icon3Active from '../../assets/bigIcons/3-active.png';
import icon4Active from '../../assets/bigIcons/4-active.png';
import icon5Active from '../../assets/bigIcons/5-active.png';
import icon6Active from '../../assets/bigIcons/6-active.png';
import icon7Active from '../../assets/bigIcons/7-active.png';
import icon8Active from '../../assets/bigIcons/8-active.png';
import icon9Active from '../../assets/bigIcons/9-active.png';
import icon10Active from '../../assets/bigIcons/10-active.png';
// import icon2Active from '../../assets/icon2-active.png';
// import icon3Active from '../../assets/icon3-active.png';
// import icon4Active from '../../assets/icon4-active.png';
// import icon5Active from '../../assets/icon5-active.png';
// import icon6Active from '../../assets/icon6-active.png';
// import icon7Active from '../../assets/icon7-active.png';
// import icon8Active from '../../assets/icon8-active.png';
// import icon9Active from '../../assets/icon9-active.png';
// import icon10Active from '../../assets/icon10-active.png';
import SportsBetHistory from '../SportsBetHistory';
import Logo from "../../assets/myInfo/Logo.png";
// import img21 from '../../img21.png'



// import Logo from "../../assets/myInfo/Logo.png";
import HomePageTopBanner from '../HomePageTopBanner'
import LeftMenu from "../LeftMenu";
// import BottomNavbar from '../bottomNavbar/BottomNavbar'
import Pagination from '../Pagination'
import LiveCasinoBetHistory from '../LiveCasinoBetHistory'
// import SportsBetHistory from './betHistory/SportsBetHistory'
// import AllBetHistory from './betHistory/AllBetHistory'
import SlotBetHistory from '../SlotBetHistory'
// import ARGameBetHistory from './betHistory/ARGameBetHistory'
import { Route, Routes } from 'react-router'
// import Navbar from '../mainPage/Navbar'
// import NoticeBanner from '../mainPage/NoticeBanner'
// import SlotBetHistory from './betHistory/SlotBetHistory'
import ESportsBetHistory from '../ESportsBetHistory'
import MinigameBetHistory from '../MinigameBetHistory';
import ARGameBetHistory from '../ARGameBetHistory'
import subIcon0 from '../../assets/bigIcons/leftMenu/1.png';
import subIcon1 from '../../assets/bigIcons/leftMenu/2.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/3.png';
import subIcon3 from '../../assets/bigIcons/leftMenu/4.png';
import subIcon4 from '../../assets/bigIcons/leftMenu/5.png';
import subIcon5 from '../../assets/bigIcons/leftMenu/6.png';
import subIcon6 from '../../assets/bigIcons/leftMenu/7.png';
import subIcon7 from '../../assets/bigIcons/leftMenu/8.png';
import subIcon8 from '../../assets/bigIcons/leftMenu/9.png';
import subIcon9 from '../../assets/bigIcons/leftMenu/10.png';
import Header from '../Header';
import NavBottom from '../NavBottom';

const tabsArray = [
    { text: "전체", icon: icon1, activeIcon: icon1Active, id: -1, path: "/mypage/bet-history/all", activeBG: activeBG },
    { text: "라이브카지노", icon: icon2, activeIcon: icon2Active, id: 0, path: "/mypage/bet-history/all/live-casino", activeBG: activeBG },
    { text: "슬롯", icon: icon3, activeIcon: icon3Active, id: 1, path: "/mypage/bet-history/all/slot-game", activeBG: activeBG },
    { text: "스포츠", icon: icon4, activeIcon: icon4Active, id: 2, path: "/mypage/bet-history/all/sports", activeBG: activeBG },
    { text: "호텔카지노", icon: icon5, activeIcon: icon5Active, id: 3, path: "/mypage/bet-history/all/hotel-casino", activeBG: activeBG },
    { text: "e-스포츠", icon: icon6, activeIcon: icon6Active, id: 4, path: "/mypage/bet-history/all/e-sports", activeBG: activeBG },
    { text: "미니게임", icon: icon7, activeIcon: icon7Active, id: 5, path: "/mypage/bet-history/all/minigame", activeBG: activeBG, subPath: "/mypage/bet-history/all/minigame/powerball", subPath2: "/mypage/bet-history/all/minigame/powerladder", subPath3: "/mypage/bet-history/all/minigame/speedkino", subPath4: "/mypage/bet-history/all/minigame/kinoladder" },
    { text: "키론가상게임", icon: icon8, activeIcon: icon8Active, id: 6, path: "/mypage/bet-history/all/ar-game", activeBG: activeBG },
    { text: "피싱게임", icon: icon9, activeIcon: icon9Active, id: 7, path: "/mypage/bet-history/all/fishing-game", activeBG: activeBG },
    { text: "티비벳", icon: icon10, activeIcon: icon10Active, id: 8, path: "/mypage/bet-history/all/bet", activeBG: activeBG }
];

const LeftMenuBetHistoryArray = [
    {
        text: "전체보기",
        icon: subIcon0,
        id: -1,
        path: "/mypage/bet-history/all",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "라이브카지노",
        icon: subIcon1,
        id: 0,
        path: "/mypage/bet-history/all/live-casino",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "슬롯게임",
        icon: subIcon2,
        id: 1,
        path: "/mypage/bet-history/all/slot-game",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "스포츠",
        icon: subIcon3,
        id: 2,
        path: "/mypage/bet-history/all/sports",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "호텔카지노",
        icon: subIcon4,
        id: 3,
        path: "/mypage/bet-history/all/hotel-casino",
        width: '9.9375rem',
    },
    {
        text: "e-스포츠",
        icon: subIcon5,
        id: 3,
        path: "/mypage/bet-history/all/e-sports",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "미니게임",
        icon: subIcon6,
        id: 4,
        path: "/mypage/bet-history/all/minigame",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "키론가상게임",
        icon: subIcon7,
        id: 5,
        path: "/mypage/bet-history/all/ar-game",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "피싱게임",
        icon: subIcon8,
        id: 6,
        path: "/mypage/bet-history/all/fishing-game",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    {
        text: "로터리게임",
        icon: subIcon9,
        id: 7,
        path: "/mypage/bet-history/all/bet",
        mainPath: "/mypage/bet-history",
        width: '9.9375rem'
    },
    // {
    //     text: "티비벳",
    //     icon: subIcon9,
    //     id: 7,
    //     path: "#",
    //     mainPath: "/mypage/bet-history",
    //     width: '9.9375rem'
    // },
];


const BetHistory = ({ isAuthenticated, setAuthenticated }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0)
    const [historySelectedSubTab2, setHistorySelectedSubTab2] = useState(0)
    const [historySelectedSubTab3, setHistorySelectedSubTab3] = useState(0)
    const [historySelectedSubTab4, setHistorySelectedSubTab4] = useState(0)

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );
    const MyInfo = () => {
        console.log(`location.state`, location.state)
        return (
            <>
                <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuBetHistoryArray}
                    />
                </div>
                <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                    <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                </div>
            </>
        )
    }


    return (
        <div style={{ maxWidth: '1242px', paddingBottom: '0.01rem' }} className="w-full flex flex-col">

            <Routes>
                <Route index
                    element={
                        <>
                            <MyInfo />
                            {/* <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                            <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                                <LeftMenu
                                    selectedTab={selectedTab}
                                    setSelectedTab={setSelectedTab}
                                    selectedSubTab={selectedSubTab}
                                    setSelectedSubTab={setSelectedSubTab}
                                    array={LeftMenuBetHistoryArray}
                                />
                            </div>
                            <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                                <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                            </div> */}
                        </>
                    }
                >
                    {/* <>
                    <AccountProfileComponent isAuthenticated={isAuthenticated} />
                    <div style={{ marginTop: '1.875rem', marginBottom: '36.375rem' }} className="flex w-full">
                        <LeftMenu
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            selectedSubTab={selectedSubTab}
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuBetHistoryArray}
                        />
                    </div>
                    <div className="flex justify-center mb-40">
                        <img style={{ width: '22.3125rem' }} className="object-contain" src={Logo} alt="logo" />
                    </div>
                </> */}
                </Route>
                {/* </Routes> */}

                <Route index path="/all/*"
                    element={
                        <>
                            <div className="w-full z-30 flex flex-col items-center">
                                {/* <NoticeBanner /> */}
                                {/* <Navbar /> */}
                                <Header />
                                <HomePageTopBanner pageTitle='베팅내역' />
                            </div>

                            <div className="w-full flex relative top-0" style={{ width: '100%', display: 'flex', position: 'relative', top: '0' }}>
                                {/* <div style={{  }} className="absolute h-full right-0 z-50 nav-shadow"></div> */}
                                <div id='scroll-wrapper'
                                    style={{ padding: '0.1rem 0 0.1rem 1.2rem', paddingRight: '0', overflowX: 'scroll', }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
                                >
                                    <div className="bet-history" style={{ display: 'flex', flexShrink: '0' }}>
                                        <HorizontalMenu key={5} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                    </div>
                                </div>
                                <div style={{ height: '12.1rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                            </div>

                            <Routes>
                                <Route index element={
                                    <>
                                        <LiveCasinoBetHistory key={1} showSub={false} isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                        <div style={{ marginTop: '3.85rem' }}>
                                            <Pagination page={page} setPage={setPage} />
                                        </div>
                                        <NavBottom />
                                    </>
                                }
                                />
                                <Route path="/sports"
                                    element={
                                        <>
                                            {/* <img src={img21} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
                                            <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} />
                                            <Pagination page={page} setPage={setPage} />
                                            <NavBottom />
                                        </>
                                    }
                                >
                                    <>
                                        {/* <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} /> */}
                                        {/* <div style={{ marginTop: '1.25rem' }}>
                                            
                                        </div> */}
                                        {/* <BottomNavbar /> */}
                                    </>
                                </Route>
                                <Route path="/live-casino/*"
                                    element={
                                        <>
                                            <LiveCasinoBetHistory key={2} isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                            <div style={{ marginTop: '3.85rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                            <NavBottom />
                                            {/* <BottomNavbar /> */}
                                            {/* <h1>hi</h1> */}
                                        </>
                                    }
                                >
                                </Route>
                                <Route path="/hotel-casino/*"
                                    element={
                                        <>
                                            <HotelCasinoBetHistory isState={historySelectedSubTab4} setState={setHistorySelectedSubTab4} />
                                            <div style={{ marginTop: '3.85rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                            <NavBottom />
                                            {/* <BottomNavbar /> */}
                                            {/* <h1>hi</h1> */}
                                        </>
                                    }
                                >
                                </Route>

                                <Route path="/slot-game/*"
                                    element={
                                        <>
                                            {/* <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                                                <div style={{ marginTop: '1.25rem' }}>
                                                    <Pagination page={page} setPage={setPage} />
                                                </div>
                                                <BottomNavbar /> */}
                                            <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                                            <div style={{ marginTop: '3.85rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                            <NavBottom />
                                        </>
                                    }
                                >

                                </Route>
                                <Route path="/e-sports"
                                    element={
                                        <>
                                            {/* <ESportsBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                    <BottomNavbar /> */}
                                            <ESportsBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                            {/* <DateSearchBar isLeagueSearch={false} /> */}
                                            <NavBottom />
                                        </>
                                    }
                                >
                                </Route>
                                <Route path="/minigame/*"
                                    element={
                                        <>
                                            <MinigameBetHistory isState={historySelectedSubTab2} setState={setHistorySelectedSubTab2} />
                                            <div style={{ marginTop: '1.25rem' }}>
                                                {/* <Pagination page={page} setPage={setPage} /> */}
                                            </div>
                                            <NavBottom />
                                        </>
                                    }
                                >

                                </Route>
                                <Route path="/ar-game"
                                    element={
                                        <>
                                            <ARGameBetHistory isState={historySelectedSubTab3} setState={setHistorySelectedSubTab3} />
                                            <div style={{ marginTop: '1.25rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                            <NavBottom />
                                        </>
                                    }
                                >

                                </Route>
                                <Route path="/fishing-game"
                                    element={
                                        <>
                                            <SlotBetHistory key={2} isState={selectedSubTab} setState={setSelectedSubTab} />
                                            <div style={{ marginTop: '1.25rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                            <NavBottom />
                                        </>
                                    }
                                >

                                </Route>
                                <Route path='/bet' element={
                                    <>
                                        <LiveCasinoBetHistory key={11} showSub={false} isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                        <div style={{ marginTop: '3.85rem' }}>
                                            <Pagination page={page} setPage={setPage} />
                                        </div>
                                        <NavBottom />
                                    </>
                                }
                                />
                            </Routes>
                        </>
                    }
                >


                    {/* <Route path="/all"
                        element={
                            <>
                                hi
                            </>
                        }
                    >
                        <>
                        <LiveCasinoBetHistory showSub={false} isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                        <div style={{ marginTop: '1.25rem' }}>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                        <BottomNavbar />
                    </>
                    </Route> */}

                    {/* <Route path="/mypage/bet-history/all/live-casino"
                        element={
                            <>
                                <LiveCasinoBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                <div style={{ marginTop: '1.25rem' }}>
                                    <Pagination page={page} setPage={setPage} />
                                </div>
                                <BottomNavbar />
                            </>
                        }
                    >

                    </Route> */}

                    {/* <Route path="/mypage/bet-history/all/slot-game"
                        element={
                            <>
                                <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                                <div style={{ marginTop: '1.25rem' }}>
                                    <Pagination page={page} setPage={setPage} />
                                </div>
                                <BottomNavbar />
                            </>
                        }
                    >

                    </Route> */}
                    {/* <Route path="/mypage/bet-history/all/sports">
                    <>
                        <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} />
                        <div style={{ marginTop: '1.25rem' }}>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                        <BottomNavbar />
                    </>
                </Route> */}

                    {/* <Route path="/mypage/bet-history/all/e-sports">
                    <>
                        <ESportsBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                        <div style={{ marginTop: '1.25rem' }}>
                            <Pagination page={page} setPage={setPage}/>
                        </div>
                        <BottomNavbar />
                    </>
                </Route> */}

                    {/* <Route path="/mypage/bet-history/all/minigame">
                    <>
                        <MinigameBetHistory isState={historySelectedSubTab2} setState={setHistorySelectedSubTab2} />
                        <div style={{ marginTop: '1.25rem' }}>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                        <BottomNavbar />
                    </>
                </Route> */}

                    {/* <Route path="/mypage/bet-history/all/ar-game">
                    <>
                        <ARGameBetHistory isState={historySelectedSubTab3} setState={setHistorySelectedSubTab3} />
                        <div style={{ marginTop: '1.25rem' }}>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                        <BottomNavbar />
                    </>
                </Route> */}
                    {/* <Route path="/mypage/bet-history/all/fishing-game">
                    <>
                        <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                        <div style={{ marginTop: '1.25rem' }}>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                        <BottomNavbar />
                    </>
                </Route> */}
                </Route>
            </Routes>


        </div>
    )
}

export default BetHistory
