import React, { useEffect, useState } from 'react'
import BoardComposeViewPanel from '../../components/BoardComposeViewPanel';
import CloseIcon from '../../assets/close-btn.png'
// import Icon2 from '../../assets/icon1.png';
// import Icon3 from '../../assets/icon2.png';
// import Icon4 from '../../assets/icon3.png';
// import Icon5 from '../../assets/icon4.png';
// import Icon6 from '../../assets/icon5.png';
// import Icon7 from '../../assets/icon6.png';
// import Icon8 from '../../assets/icon7.png';
// import Icon9 from '../../assets/icon8.png';
// import img from '../../img5.png';
// import icon1 from '../../assets/bigIcons/1.png';
import icon2 from '../../assets/bigIcons/2.png';
import icon3 from '../../assets/bigIcons/3.png';
import icon4 from '../../assets/bigIcons/4.png';
import icon5 from '../../assets/bigIcons/5.png';
import icon6 from '../../assets/bigIcons/6.png';
import icon7 from '../../assets/bigIcons/7.png';
import icon8 from '../../assets/bigIcons/8.png';
import icon9 from '../../assets/bigIcons/9.png';
import icon10 from '../../assets/icon10.png';
// import icon1Active from '../../assets/bigIcons/1-active.png';
import icon2Active from '../../assets/bigIcons/2-active.png';
import icon3Active from '../../assets/bigIcons/3-active.png';
import icon4Active from '../../assets/bigIcons/4-active.png';
import icon5Active from '../../assets/bigIcons/5-active.png';
import icon6Active from '../../assets/bigIcons/6-active.png';
import icon7Active from '../../assets/bigIcons/7-active.png';
import icon8Active from '../../assets/bigIcons/8-active.png';
import icon9Active from '../../assets/bigIcons/9-active.png';
import icon10Active from '../../assets/icon10-active.png';


import HorizontalMenu from '../HorizontalMenu';
import LiveCasinoBetHistory from '../LiveCasinoBetHistory';
import Pagination from '../Pagination';
import SlotBetHistory from '../SlotBetHistory';
import ESportsBetHistory from '../ESportsBetHistory';
import ARGameBetHistory from '../ARGameBetHistory';
import DateSearchBar from '../DateSearchBar';
import MinigameBetHistoryPopup from '../MinigameBetHistory';

const BetHistoryPopup = ({ setPopupOpen, setAttachedArray, attachedArray }) => {

    // const tabsArray = [
    //     { text: "라이브카지노", icon: Icon2, id: 0 },
    //     { text: "슬롯게임", icon: Icon3, id: 1 },
    //     { text: "스포츠", icon: Icon4, id: 2, path: '/freeboard/compose' },
    //     { text: "e-스포츠", icon: Icon5, id: 3 },
    //     { text: "미니게임", icon: Icon6, id: 4 },
    //     { text: "키론가상게임", icon: Icon7, id: 5 },
    //     { text: "피싱게임", icon: Icon8, id: 6 },
    //     { text: "로터리게임", icon: Icon9, id: 7 }
    // ];
    const tabsArray = [{
        //     id: 0,
        //     icon: icon1,
        //     activeIcon: icon1Active,
        //     text: '전체',
        //     width: '5.375rem',
        //     height: '5.375rem',
        //     marginTop: '0.4rem',
        //     textMargin: '0.8rem',
        //     isActive: false,
        //     path: '/freeboard/compose',
        // },
        // {
        id: 0,
        icon: icon2,
        activeIcon: icon2Active,
        text: '라이브카지노',
        width: '7.875rem',
        // height: '6.24rem',
        marginTop: '0.4rem',
        // textMargin: '0.6rem',
        isActive: false,
        path: '/freeboard/compose',
    },
    {
        id: 1,
        icon: icon3,
        activeIcon: icon3Active,
        text: '슬롯',
        width: '7.875rem',
        // height: '5.4375rem',
        marginTop: '0.5rem',
        textMargin: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    },
    {
        id: 2,
        icon: icon4,
        activeIcon: icon4Active,
        text: '스포츠',
        width: '7.875rem',
        // height: '5.18125rem',
        marginTop: '0.4rem',
        textMargin: '0.7rem',
        isActive: true,
        path: '/freeboard/compose',
    },
    {
        id: 3,
        icon: icon5,
        activeIcon: icon5Active,
        text: '호텔카지노',
        width: '7.875rem',
        // height: '6.35625rem',
        marginTop: '0.4rem',
        textMargin: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    }, {
        id: 4,
        icon: icon6,
        activeIcon: icon6Active,
        text: 'e-스포츠',
        width: '7.875rem',
        // height: '4.625rem',
        marginTop: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    }, {
        id: 5,
        icon: icon7,
        activeIcon: icon7Active,
        text: '미니게임',
        width: '7.875rem',
        // height: '5.375rem',
        marginTop: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    }, {
        id: 6,
        icon: icon8,
        activeIcon: icon8Active,
        text: '키론가상게임',
        width: '7.875rem',
        // height: '5rem',
        marginTop: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    }, {
        id: 7,
        icon: icon9,
        activeIcon: icon9Active,
        text: '피싱게임',
        width: '7.875rem',
        // height: '5rem',
        marginTop: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    }, {
        id: 8,
        icon: icon10,
        activeIcon: icon10Active,
        text: '티비벳',
        width: '7.875rem',
        // height: '5.375rem',
        marginTop: '0.4rem',
        isActive: false,
        path: '/freeboard/compose',
    }
    ]

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0)
    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))

    const [page, setPage] = useState(0)

    useEffect(() => {
        setHistorySelectedSubTab(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return () => { };
    }, [selectedSubTab]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return () => { };
    }, [selectedSubTab, selectedTab, historySelectedSubTab]);

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    console.log(`selectedSubTab`, selectedSubTab)

    return (

        <div className='베팅내역-popup'>
            <div className="베팅내역-border">
                <div className='first-section'>
                    <label className="text">베팅내역</label>
                    <button style={{ marginRight: '4.625rem' }} onClick={() => setPopupOpen(false)}>
                        <img className='close hover' style={{ width: '3.1875rem', height: '3.1875rem' }} src={CloseIcon} alt="close_icon" />
                    </button>
                </div>

                <div className="w-full h-full bg-white" style={{ height: '100vh' }}>

                    <div className="w-full">
                        <div
                            style={{
                                height: 'calc(var(--vh, 1vh) * 100)',
                                width: '77.625rem',
                            }}
                            className="overflow-y-auto hide-scrollbar"
                        >

                            <div className="w-full relative top-0">
                                <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>
                                <div id='scroll-wrapper' style={{ padding: '1.875rem 1.6rem', paddingRight: '0', paddingBottom: 0 }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                    <div className=" flex flex-shrink-0 w-full" style={{ marginBottom: '' }}>
                                        <HorizontalMenu withoutFirst={false} setSelectedTab={setSelectedTab} itemsArray={tabsArray} selectedSubTab={selectedSubTab} setSelectedSubTab={setSelectedSubTab} />
                                    </div>
                                </div>
                                <div style={{ background: "linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full top-0 left-0 z-50"></div>
                            </div>

                            {selectedTab === 0 ? (
                                <>
                                    <LiveCasinoBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} checkedState={checkedState} setCheckedState={setCheckedState} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                </>
                            ) : selectedTab === 1 ? (
                                <>
                                    <SlotBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                </>
                            ) : selectedTab === 2 ? (
                                // <div className="-mt-20px space-y-20px">
                                //     <SportsBetHistory  checkedState={checkedState} setCheckedState={setCheckedState} showSub={false} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen} />
                                //     <Pagination page={page} setPage={setPage}/>   
                                // </div>
                                <div style={{ marginBottom: '5.625rem' }} className="w-full h-full">
                                    {/* <img src={img} alt=''
                                        style={{ position: 'fixed', top: '0', opacity: '0.5' }}
                                    /> */}
                                    <div style={{marginTop: '1rem'}}>
                                        <DateSearchBar isGameResultsSearch={true} isFreeboard='true' />
                                    </div>
                                    <div style={{ paddingBottom: '0.1rem', margin: '0 1.8rem' }}>
                                        <BoardComposeViewPanel attachedArray={attachedArray} setPopupOpen={setPopupOpen} setAttachedArray={setAttachedArray} type={0} winAmount="0" isAttached={true} noButtons={true} checkedState={checkedState} setCheckedState={setCheckedState} />
                                    </div>
                                    <div style={{ paddingBottom: '1rem' }}>

                                        <div style={{ marginTop: '1.25rem' }}>
                                            <Pagination page={page} setPage={setPage} />
                                        </div>
                                    </div>

                                </div>
                            ) : selectedTab === 3 ? (
                                <>
                                    <ESportsBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        {/* <Pagination page={page} setPage={setPage} /> */}
                                    </div>
                                </>
                            ) : selectedTab === 4 ? (
                                <>
                                    <MinigameBetHistoryPopup isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                </>
                            ) : selectedTab === 5 ? (
                                <>
                                    <ARGameBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                </>
                            ) : selectedTab === 6 ? (
                                <>
                                    <SlotBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                </>
                            ) : (
                                <>
                                </>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetHistoryPopup
