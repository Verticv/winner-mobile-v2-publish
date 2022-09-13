import React, { useState } from 'react'
import HorizontalMenu1 from '../HorizontalMenu1'
// import AccountProfileComponent from 'components/common/AccountProfileComponent'
// import LeftMenu from "components/myPage/LeftMenu";
import HorizontalSubMenu from '../HorizontalSubMenu2';
import Icon1 from '../../assets/gameresults/sport-1.png';
import Icon2 from '../../assets/gameresults/sport-2.png';
import Icon1Active from '../../assets/gameresults/sport-1-active.png';
import Icon2Active from '../../assets/gameresults/sport-2-active.png';
import activeBG from '../../assets/gameresults/active-bg.png';
import inActiveBG from '../../assets/gameresults/inactive-bg.png';
// import img from '../../img23.png';
// import img24 from '../../img24.png';
import HomePageTopBanner from '../HomePageTopBanner'
// import BottomNavbar from '../bottomNavbar/BottomNavbar'
import Pagination from '../Pagination'
import SportsContent from '../SportsContent'
import { Route, Routes } from 'react-router'


// import Navbar from '../mainPage/Navbar'
// import NoticeBanner from '../mainPage/NoticeBanner'
// import subIcon1 from '../../images/newImages/mainPage/results/1.png';
// import subIcon3 from '../../images/newImages/mainPage/results/3.png';
// import Logo from "../../images/newImages/mainPage/icons/logo.png";
// import ScrollButton from 'components/common/ScrollButton';
import DateSearchBar from '../DateSearchBar';
import MinigamesMatchResultPanel from '../MinigamesMatchResultPanel';
import CardHeader from '../CardHeader';
import PowerballResultsTable from '../PowerballResultsTable';
import MinigameTab from '../MinigameTab';
import Sports1 from '../Sports1';
import TableHeader2 from '../TableHeader2';

const tabsArray = [
    { text: "스포츠", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/mypage/gameresults/all", activeBG: activeBG, inActiveBG: inActiveBG, width: '5.4375rem' },
    { text: "미니게임", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/mypage/gameresults/minigame/powerball", activeBG: activeBG, inActiveBG: inActiveBG, width: '5.4375rem' },
];

// const LeftMenuSubArray = [
//     {
//         text: "스포츠",
//         icon: subIcon1,
//         id: 0,
//         path: "/mypage/gameresults/all",
//     },
//     {
//         text: "미니게임",
//         icon: subIcon3,
//         id: 1,
//         path: "/mypage/gameresults/minigame/powerball",
//     }
// ]



const inboxArray = [
    {
        id: 0,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 홀/짝 (홀)",
        ratio: "1.95"
    },
    {
        id: 1,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 숫자 (2)",
        ratio: "9.00"
    },
    {
        id: 2,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 구간 A(0~2)",
        ratio: "3.15"
    },
    {
        id: 3,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 언오버 (짝 언더)",
        ratio: "3.15"
    },
    {
        id: 4,
        time: "2021-06-29 15:45",
        num: "211",
        results: "일반볼 홀/짝 (짝)",
        ratio: "1.95"
    },
    {
        id: 5,
        time: "2021-06-29 15:45",
        num: "211",
        results: "일반볼 구간 (중)",
        ratio: "2.90"
    },
]

const GameResults = ({ isAuthenticated }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );

    console.log(selectedTab, selectedSubTab)

    return (
        <div style={{ maxWidth: '1242px', paddingBottom: '0.01rem' }} className="w-full flex flex-col">
            {/* <ScrollButton /> */}
            <Routes>
                {/* <Route path="/gameresults"
                    element={
                        <>
                            hi
                        </>
                    }
                > */}
                {/* <AccountProfileComponent isAuthenticated={isAuthenticated} />
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
                </div> */}
                {/* </Route> */}

                <Route path="/all/*"
                    element={
                        <div className='game-result'>
                            {/* hi */}
                            {/* <img src={img} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
                            {/* <div className="w-full z-30 flex flex-col items-center"> */}
                            {/* <NoticeBanner /> */}
                            {/* <Navbar /> */}
                            <HomePageTopBanner pageTitle='경기결과' toPath='/mypage/gameresults' />
                            <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                            <HorizontalSubMenu isSameWidth setSelectedSubTab={setSelectedSubTab} />
                            <Sports1 />
                            <SportsContent checkedState={checkedState} setCheckedState={setCheckedState} />
                            <div style={{
                                margin: '4rem'
                            }}>
                                <Pagination page={page} setPage={setPage} />
                            </div>
                            {/* </div> */}

                            {/* <div className="w-full relative top-0">
                                <div style={{ padding: '1.875rem' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                    <div className=" flex flex-shrink-0 w-full">
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    }
                />

                <Route path="/all/*"
                    element={
                        <>
                            {/* hi */}
                        </>
                    }
                >
                    {/* <>
                        <div id='scroll-wrapper1' style={{ paddingLeft: '1.875rem' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                                <HorizontalSubMenu isSameWidth setSelectedSubTab={setSelectedSubTab} />
                            </div>
                        </div>

                        <Sports1 />
                        <SportsContent checkedState={checkedState} setCheckedState={setCheckedState} />
                        <div style={{ marginTop: '1.875rem' }}>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                        <BottomNavbar />
                    </> */}
                </Route>

                {/* </Route> */}

                <Route path="/minigame/*"
                    element={
                        <>
                            <div className='game-result'>
                                {/* <img src={img24} alt="" style={{ opacity: '0.5', position: 'absolute', top: '0' }} /> */}
                                <HomePageTopBanner pageTitle='경기결과' toPath='/mypage/gameresults' />
                                <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                <MinigameTab />
                                <div style={{ marginTop: '1rem' }} className='test'>
                                    <DateSearchBar isLeagueSearch={false} withBlackButton hasDateSuggestion={false} />
                                </div>
                            </div>
                            <Routes>
                                <Route path="/powerball"
                                    element={
                                        <>
                                            <div style={{ background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', padding: '0.1875rem', margin: '-0.1rem 2rem 0 1.9rem', borderRadius: '1rem' }}>
                                                <div style={{
                                                    width: '100%',
                                                    background: '#323232',
                                                    borderRadius: '1rem',
                                                    paddingBottom: '1rem'
                                                }}>
                                                    <TableHeader2 isMinigame={true} />
                                                    <div className="flex flex-col w-full px-4 pb-4" style={{ margin: '0.3rem 0.8rem 0 0.8rem', border: '0.375rem solid #473b35', borderRadius: '0.4rem' }}>
                                                        <CardHeader flag='us' name='파워볼' date='2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                                                        <PowerballResultsTable able checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                                                    </div>
                                                    <div className="flex flex-col w-full px-4 pb-4" style={{ margin: '2.19rem 0.8rem 0 0.8rem', border: '0.375rem solid #473b35', borderRadius: '0.4rem' }}>
                                                        <CardHeader flag='us' name='파워볼' date='2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                                                        <PowerballResultsTable able checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '3.7rem', paddingBottom: '0.01rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                        </>
                                    }
                                >

                                </Route>
                                <Route path="/powerladder"
                                    element={
                                        <>
                                            <MinigamesMatchResultPanel />
                                            <div style={{ marginTop: '3.9rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                        </>
                                    }
                                >
                                </Route>

                            </Routes>
                        </>
                    }
                >

                </Route>

                {/* <div className="w-full relative top-0">
                    <div style={{ padding: '1.875rem' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                        </div>
                    </div>
                </div> */}

                {/* <div className="w-full flex relative top-0">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                    <div id='scroll-wrapper1' style={{padding: '1.875rem', paddingRight: '0', paddingTop: '0'}} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <SubHorizontalMenu2 itemsArray={subTabsArray} isState={isState} setState={setState} isMinigame={true}/>
                        </div>
                    </div>
                    <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
                </div> */}

                {/* <DateSearchBar isLeagueSearch={false} withBlackButton hasDateSuggestion={false} /> */}

                {/* <Route exact path="/minigame/powerball"
                    element={
                        <>
                            hiiiii
                        </>
                    }
                > */}
                {/* <div style={{ borderRadius: "1em", margin: '1.875rem', marginTop: '1.9rem' }} className="shadow-subNavbar overflow-hidden bg-gray-fafafa">
                        <TableHeader2 isMinigame={true} />
                        <div className="flex flex-col w-full px-4 pb-4">
                            <CardHeader flag='us' name='파워볼' date='2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                        </div>
                        <div className="flex flex-col w-full p-4">
                            <CardHeader flag='us' name='파워볼' date='2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                        </div>
                    </div> */}
                {/* </Route> */}
                {/* 
                <Route exact path="/mypage/gameresults/minigame/speedkino">
                    <MinigamesMatchResultPanel type="speedkino" />
                </Route>
                <Route exact path="/mypage/gameresults/minigame/kinoladder">
                    <MinigamesMatchResultPanel type="kinoladder" />
                </Route> */}


                {/* {isState === 0 
                ? (
                    <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '1.8rem'}} className="shadow-subNavbar overflow-hidden">
                        <div className="flex flex-col w-full p-4">
                            <CardHeader flag = 'us' name = '파워볼' date = '2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                        </div>
                        <div className="flex flex-col w-full p-4">
                            <CardHeader flag = 'us' name = '파워볼' date = '2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                        </div>
                    </div>
                ) : isState === 1 ? (
                    <>
                        <MinigamesMatchResultPanel />
                    </>
                ) : isState === 2 ? (
                    <>
                        <MinigamesMatchResultPanel type="speedkino" />
                    </>
                ) : (
                    <>
                        <MinigamesMatchResultPanel type="kinoladder" />
                    </>
                )} */}

                {/* <div style={{ marginTop: '1.875rem' }}>
                        <Pagination page={page} setPage={setPage} />
                    </div> */}
                {/* <BottomNavbar /> */}

                {/* </Route> */}

            </Routes>
        </div>
    )
}

export default GameResults