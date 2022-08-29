import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
// import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
// import Footer from 'components/mainPage/Footer';
// import Footer2 from 'components/mainPage/Footer2';
// import DirectoryComponent from 'components/myPage/DirectoryComponent';
// import LeftMenu from 'components/myPage/LeftMenu';
// import AccountProfileComponent from 'components/common/AccountProfileComponent'
// import LeftMenu from "components/myPage/LeftMenu";
// import Navbar from '../Header'
// import NoticeBanner from '../NoticeBanner'
import HomePageTopBanner from '../HomePageTopBanner';
// import HorizontalSubMenu from 'components/horizontalMenus/HorizontalSubMenu'
import HorizontalMenu1 from '../HorizontalMenu1';
// import Logo from "../images/newImages/mainPage/icons/logo.png";
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
// import subIcon1 from '../../assets/cscenter/leftMenu/icon_1.png'
// import subIcon2 from '../../assets/cscenter/leftMenu/icon_1.png'
// import subIcon3 from '../../assets/cscenter/leftMenu/icon_1.png'
// import subIcon5 from '../../assets/cscenter/leftMenu/icon_1.png'
// import img from '../../img6.png'

import Contact from '../Contact';
// import ContactView from 'components/cscenter/ContactView';
// import ContactCompose from 'components/cscenter/ContactCompose';
// import Announcement from 'components/cscenter/Announcement';
// import AnnouncementView from 'components/cscenter/AnnouncementView';
// import Faq from 'components/cscenter/Faq';
// import SportsGamePolicy from 'components/cscenter/SportsGamePolicy';
// import MinigamePolicy from 'components/cscenter/MinigamePolicy';
// import ScrollButton from '../../helpers/scrollToTop';

const CSCenterPage = ({ isAuthenticated, setAuthenticated }) => {

    const tabsArray = [
        { text: "문의하기", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/cscenter/all/contact/all", hasSameParent: true, width: '5rem' },
        { text: "공지사항", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/cscenter/all/announcement", width: '5.625rem', marginLeft: '0.2rem' },
        { text: "자주묻는질문", icon: Icon3, activeIcon: Icon3Active, id: 2, path: "/cscenter/all/faq", hasSameParent: true, width: '5.375rem', marginLeft: '0.2rem' },
        { text: "계좌문의", icon: Icon4, activeIcon: Icon4Active, id: 3, path: "#", width: '5.1875rem', marginLeft: '0.1rem' },
        { text: "베팅규정", icon: Icon5, activeIcon: Icon5Active, id: 4, path: "/cscenter/all/policy/sportsgame/soccer", hasSameParent: true, width: '4.875rem', marginLeft: '0.1rem' },
    ];

    // const LeftMenuSubArray = [
    //     {
    //         text: "문의하기",
    //         icon: subIcon1,
    //         id: 0,
    //         path: "/cscenter/all/contact/all",
    //     },
    //     {
    //         text: "공지사항",
    //         icon: subIcon2,
    //         id: 1,
    //         path: "/cscenter/all/announcement",
    //     },
    //     {
    //         text: "자주묻는질문",
    //         icon: subIcon3,
    //         id: 2,
    //         path: "/cscenter/all/faq",
    //     },
    //     {
    //         text: "베팅규정",
    //         icon: subIcon5,
    //         id: 3,
    //         path: "/cscenter/all/policy/sportsgame/soccer",
    //     }
    // ]

    // const LeftMenuArray = [
    //     { text: "문의하기", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/all/contact/all", mainPath: "/cscenter/contact" },
    //     { text: "공지사항", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/cscenter/announcement", mainPath: "/cscenter/announcement" },
    //     { text: "자주묻는질문", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/faq/all", mainPath: "/cscenter/faq" },
    //     { text: "계좌문의", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/inquiry", mainPath: "/cscenter/inquiry" },
    //     { 
    //         text: "베팅규정",
    //         icon: Icon5, 
    //         iconHighlight: IconHighlight5, 
    //         id: 4, 
    //         path: "/cscenter/policy/sportsgame/soccer", 
    //         path_1: "/cscenter/policy/sportsgame/basketball", 
    //         path_2: "/cscenter/policy/sportsgame/baseball", 
    //         path_3: "/cscenter/policy/sportsgame/volleyball", 
    //         path_4: "/cscenter/policy/sportsgame/tennis", 
    //         path_5: "/cscenter/policy/sportsgame/hockey", 
    //         path_6: "/cscenter/policy/sportsgame/handball", 
    //         path_7: "/cscenter/policy/sportsgame/football", 
    //         path_8: "/cscenter/policy/sportsgame/e-sports", 
    //         sub1: "스포츠게임",
    //         sub2: "미니게임",
    //         path2: "/cscenter/policy/minigame/powerball", 
    //         path2_1: "/cscenter/policy/minigame/powerladder", 
    //         path2_2: "/cscenter/policy/minigame/speedkino", 
    //         path2_3: "/cscenter/policy/minigame/kinoladder", 
    //         mainPath: "/cscenter/policy"
    //     },
    // ];


    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(selectedSubTab, selectedTab)
    return (
        <div style={{ maxWidth: '1242px' }} className="relative w-full flex flex-col justify-center overflow-hidden">

            {/* <Route path="/cscenter/all"> */}
            {/* <Route path="/cscenter/all/contact/all"
                element={ */}

            {/* <img src={img} alt='' style={{ opacity: '0.5', position: 'absolute', top: '0' }} /> */}
            <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
            {/* <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                </div> */}

            {/* <div style={{ padding: '1.875rem', paddingBottom: '1.875rem' }} className="w-full relative top-0">
                <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full"> */}
            <HorizontalMenu1 withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
            {/* </div>
                </div>
            </div> */}
            <Contact />
            {/* <ScrollButton /> */}
        </div >
    )
}

export default CSCenterPage
