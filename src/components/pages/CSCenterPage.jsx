import React, { useState, useEffect } from "react";
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
import AccountProfileComponent from '../AccountProfileComponent'
import LeftMenu from "../LeftMenu";
import Logo from "../../assets/myInfo/Logo.png";
// import img from '../../img10.png'
import subIcon1 from '../../assets/bigIcons/leftMenu/21.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/22.png';
import subIcon3 from '../../assets/bigIcons/leftMenu/23.png';
// import subIcon4 from '../../assets/bigIcons/leftMenu/24.png';
import subIcon5 from '../../assets/bigIcons/leftMenu/25.png';
import Header from "../Header";
import NavBottom from "../NavBottom";
import Announcement from '../Announcement';
import AnnouncementView from '../AnnouncementView'
import ScrollButton from '../ScrollButton'

export default function Test({ isAuthenticated, setAuthenticated }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const tabsArray = [
        { text: "문의하기", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/cscenter/all/contact/all", hasSameParent: true, width: '5rem' },
        { text: "공지사항", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/cscenter/all/announcement", hasSameParent: true, width: '5.625rem', marginLeft: '0.2rem' },
        { text: "자주묻는질문", icon: Icon3, activeIcon: Icon3Active, id: 2, path: "/cscenter/all/faq", hasSameParent: true, width: '5.375rem', marginLeft: '0.2rem' },
        { text: "계좌문의", icon: Icon4, activeIcon: Icon4Active, id: 3, path: "#", width: '5.1875rem', marginLeft: '0.1rem' },
        { text: "베팅규정", icon: Icon5, activeIcon: Icon5Active, id: 4, path: "/cscenter/all/policy/sportsgame/soccer", hasSameParent: true, width: '4.875rem', marginLeft: '0.1rem' },
    ];
    const LeftMenuSubArray = [
        {
            text: "문의하기",
            icon: subIcon1,
            id: 0,
            path: "/cscenter/all/contact/all",
            width: '9.9375rem'
        },
        {
            text: "공지사항",
            icon: subIcon2,
            id: 1,
            path: "/cscenter/all/announcement",
            width: '9.9375rem'
        },
        {
            text: "자주묻는질문",
            icon: subIcon3,
            id: 2,
            path: "/cscenter/all/faq",
            width: '9.9375rem'
        },
        {
            text: "베팅규정",
            icon: subIcon5,
            id: 3,
            path: "/cscenter/all/policy/sportsgame/soccer",
            width: '9.9375rem'
        }
    ]

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    const [subActiveButton, setSubActiveButton] = useState();
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

    const MyInfo = () => {
        return (
            <>
            <ScrollButton />
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
        )
    }
    return (
        <Routes>
            <Route index element={<>
                <MyInfo />
            </>} />
            <Route
                path="/all/*"
                element={
                    <>
                        <Header />
                        <Routes>
                            {/* <Route index element={<h2>H2</h2>} /> */}
                            <Route
                                path="/contact/all/*"
                                element={
                                    <>

                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>

                                            <HorizontalMenu1 key={1} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <Contact subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
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
                            <Route path="/announcement/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={2} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <Announcement setSubActiveButton={setSubActiveButton} />
                                    </>
                                }
                            />
                            <Route path="/announcement/view"
                                element={
                                    <>
                                        {useEffect(() => {
                                            setSubActiveButton('/cscenter')
                                        }, [setSubActiveButton])
                                        }
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div style={{ marginBottom: '19.625rem', paddingBottom: '0.1rem' }}>
                                            <AnnouncementView />
                                        </div>
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
                            <Route path="/faq/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={3} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <div style={{ marginBottom: '19.625rem' }}>
                                            <Faq subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                        </div>
                                    </>
                                }
                            />
                            <Route path="/policy/sportsgame/*"
                                element={<>
                                    {/* <img src={img} alt='' style={{ opacity: '0.5', position: 'absolute', top: '0' }} /> */}
                                    <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                    <div id='container-nav'>
                                        <HorizontalMenu1 key={4} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                    </div>
                                    <SportsGamePolicy setSelectedTab={setSelectedTab} subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                </>}
                            />
                            <Route path="/policy/minigame/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={5} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <MinigamePolicy />
                                    </>
                                }
                            />
                        </Routes>
                        <NavBottom />
                    </>
                }
            />
        </Routes>
    )
}   