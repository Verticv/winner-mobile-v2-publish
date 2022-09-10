import React, { useState } from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import HomePageTopBanner from '../HomePageTopBanner';
import Icon1 from '../../assets/cscenter/leftMenu/icon_1.png'
import Icon2 from '../../assets/cscenter/leftMenu/icon_2.png'
import Icon3 from '../../assets/cscenter/leftMenu/icon_3.png'
import Icon4 from '../../assets/cscenter/leftMenu/icon_4.png'
import Icon5 from '../../assets/cscenter/leftMenu/icon_5.png'
import Icon1Active from '../../assets/cscenter/leftMenu/icon_1-active.png'
import Icon2Active from '../../assets/cscenter/leftMenu/icon_2-active.png'
import Icon3Active from '../../assets/cscenter/leftMenu/icon_3-active.png'
import Icon4Active from '../../assets/cscenter/leftMenu/icon_4-active.png'
import Icon5Active from '../../assets/cscenter/leftMenu/icon_5-active.png'
import Contact from '../Contact';
import HorizontalMenu1 from '../HorizontalMenu1';
import ContactView from '../ContactView';
// import ContactViewPage from "./ContactViewPage";
import ContactCompose from "../ContactCompose";
import Faq from "../Faq";
import MinigamePolicy from "../MinigamePolicy";
import SportsGamePolicy from "../SportsGamePolicy";
// import img from '../../img10.png'

export default function Test() {

    const tabsArray = [
        { text: "문의하기", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/cscenter/all/contact/all", hasSameParent: true, width: '5rem' },
        { text: "공지사항", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/cscenter/all/announcement", width: '5.625rem', marginLeft: '0.2rem' },
        { text: "자주묻는질문", icon: Icon3, activeIcon: Icon3Active, id: 2, path: "/cscenter/all/faq", hasSameParent: true, width: '5.375rem', marginLeft: '0.2rem' },
        { text: "계좌문의", icon: Icon4, activeIcon: Icon4Active, id: 3, path: "#", width: '5.1875rem', marginLeft: '0.1rem' },
        { text: "베팅규정", icon: Icon5, activeIcon: Icon5Active, id: 4, path: "/cscenter/all/policy/sportsgame/soccer", hasSameParent: true, width: '4.875rem', marginLeft: '0.1rem' },
    ];

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(selectedSubTab, selectedTab)
    // return (
    //     <div>
    //         {/* <Routes > */}

    //         <Route path="/aa"
    //             element={
    //                 <Outlet />
    //             }
    //         >
    //             <Route index element={<>
    //                 <h1>sssssss</h1>
    //                 {console.log('ssssssssssss')}
    //             </>} />
    //             <Route path='/cc' element={<h1>hi {console.log('aaaaaaaa')}</h1>} />

    //         </Route>
    //         {/* <Outlet /> */}
    //         {/* </Routes> */}

    //         <div style={{ background: 'red', width: "10rem", height: '10rem' }} >
    //             {/* <Outlet /> */}
    //         </div>
    //     </div>

    // )
    return (
        <Routes>
            <Route index element={<>
                {/* <AccountProfileComponent isAuthenticated={isAuthenticated} />
                <div
                    style={{ marginTop: "1.875rem", marginBottom: "36.375rem" }}
                    className="flex w-full"
                >
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                    // array={LeftMenuSubArray}
                    />
                </div>
                <div className="flex justify-center mb-40">
                    <img
                        style={{ width: "22.3125rem" }}
                        className="object-contain"
                        src={Logo}
                        alt="logo"
                    />
                </div> */}
            </>} />
            <Route
                path="/all/*"
                element={
                    <Routes>
                        {/* <Route index element={<h2>H2</h2>} /> */}
                        <Route
                            path="/contact/all/*"
                            element={
                                <>
                                    <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                    <HorizontalMenu1 withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                    <Contact />
                                </>
                            }
                        />
                        <Route path="contact/view/*"
                            element={
                                <>
                                    <HomePageTopBanner
                                        pageTitle="문의하기"
                                        toPath="/cscenter/all/contact/all"
                                    />
                                    <ContactView />
                                </>
                            }
                        />
                        <Route path="contact/compose"
                            element={
                                <>
                                    <HomePageTopBanner
                                        pageTitle="문의하기"
                                        toPath="/cscenter/all/contact/all"
                                    />
                                    <ContactCompose />
                                </>
                            }
                        />
                        {/* <Route path="/announcement"
                            element={ }
                        /> */}
                        {/* <Route path="/announcement/view"
                            element={ }
                        /> */}
                        <Route path="/faq"
                            element={
                                <>
                                    <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                    <HorizontalMenu1 withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                    <div style={{ marginBottom: '19.625rem' }}>
                                        <Faq />
                                    </div>
                                </>
                            }
                        />
                        <Route path="/policy/sportsgame/*"
                            element={<>
                                {/* <img src={img} alt='' style={{ opacity: '0.5', position: 'absolute', top: '0' }} /> */}
                                <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                <HorizontalMenu1 withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                <SportsGamePolicy setSelectedTab={setSelectedTab} />
                            </>}
                        />
                        <Route path="/policy/minigame/*"
                            element={
                                <>
                                    <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                    <HorizontalMenu1 withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                    <MinigamePolicy />
                                </>
                            }
                        />
                    </Routes>
                }
            />
        </Routes>
    )
}   