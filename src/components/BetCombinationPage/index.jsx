import BetCombinationPanel from '../BetCombinationPanel';
// import BetCombinationRightPanel from 'components/betCombination/BetCombinationRightPanel'
// import NoticeBanner from '../NoticeBanner';
import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router'
//import Sports from 'components/myPage/gameResults/Sports'
import BetCart from '../BetCart';
import Header from '../Header';
// import Sports2 from '../Sports2';

import './_betCombinationPage.scss';

import Icon1 from '../../assets/gameresults/1.png'
import Icon2 from '../../assets/gameresults/2.png'
import Icon3 from '../../assets/gameresults/3.png'
import Icon4 from '../../assets/gameresults/4.png'
import Icon5 from '../../assets/gameresults/5.png'
import Icon6 from '../../assets/gameresults/6.png'
import Icon7 from '../../assets/gameresults/7.png'
import Icon8 from '../../assets/gameresults/8.png'
import HorizontalMenu13 from '../HorizontalMenu13'
import subInactive from '../../assets/gameresults/sub-inactive.png';
import subActive from '../../assets/gameresults/sub-active.png';
// import HorizontalMenu6 from 'components/horizontalMenus/HorizontalMenu6'

const BetCombinationPage = ({ isAuthenticated, setAuthenticated }) => {

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0, number: 854, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "축구", icon: Icon2, id: 1, number: 567, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "농구", icon: Icon3, id: 2, number: 227, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "야구", icon: Icon4, id: 3, number: 407, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "배구", icon: Icon5, id: 4, number: 0, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "하키", icon: Icon6, id: 5, number: 0, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "미식축구", icon: Icon7, id: 6, number: 0, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
        { text: "격투기", icon: Icon8, id: 7, number: 9, subInactive: subInactive, subActive: subActive, path: '#', width: '6.0625rem' },
    ];


    const filterArray = [
        { text: "러시아", id: 0 },
        { text: "중국", id: 1 },
        { text: "터키", id: 2 },
        { text: "브라질", id: 3 },
        { text: "칠레", id: 4 },
        { text: "요르단", id: 5 },
        { text: "폴란드", id: 6 },
        { text: "아르헨티나", id: 7 },
        { text: "헝가리", id: 8 },
        { text: "이스라엘", id: 9 },
        { text: "덴마크", id: 10 },
        { text: "독일", id: 11 },
        { text: "스웨덴", id: 12 },
        { text: "루마니아", id: 13 },
        { text: "잉글랜드", id: 14 },
        { text: "북아일랜드", id: 15 },
        { text: "스페인", id: 16 },
        { text: "프랑스", id: 17 },
        { text: "콜롬비아", id: 18 },
        { text: "에콰도르", id: 19 },
        { text: "미국", id: 20 },
    ];


    const cardsArray = []

    const [selectedTab, setSelectedTab] = useState(0)
    const [isPanelFixed, setPanelFixed] = useState(true)
    const [addedCard, setAddedCard] = useState(cardsArray)
    const [checkedState, setCheckedState] = useState(
        new Array(filterArray.length).fill(false)
    );
    const [selectedOption, setSelectedOption] = useState([
        {
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        }
    ])
    const [openedCart, setOpenedCart] = useState(false)

    useEffect(() => {
        setSelectedOption({
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        })
    }, [])
    return (
        <div style={{ maxWidth: '1242px' }} className="container">
            {console.log("hello")}
            <div className="header-style">
                <Header isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            {/* <div className='sport-container' style={{ overflowX: 'scroll', display: 'flex' }}> */}
            {/* <div className=" flex flex-shrink-0 w-full" style={{ marginTop: '0.8rem', overflowY: 'scroll' }}> */}
            {/* <HorizontalMenu13 itemsArray={tabsArray} isState={selectedTab} setSelectedTab={setSelectedTab} /> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div> */}
            {/* </div> */}
            {/* </div> */}



            <div className="sport-container" style={{ width: '100%', display: 'flex', position: 'relative', top: '0', marginTop: '1.8rem' }}>
                {/* <div style={{  }} className="absolute h-full right-0 z-50 nav-shadow"></div> */}
                <div id='scroll-wrapper'
                    style={{ padding: '0.1rem 0 0.1rem 1.5rem', paddingRight: '0', overflowX: 'scroll', }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
                >
                    <div className="" style={{ display: 'flex', flexShrink: '0' }}>
                        <HorizontalMenu13 key={5} itemsArray={tabsArray}  isState={selectedTab} setSelectedTab={setSelectedTab} />
                    </div>
                </div>
                <div style={{ height: '12.1rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
            </div>



            <div className="content">
                <div className="content-content">

                    <div className='betcombpanel-container'>
                        <div className="">
                            <BetCombinationPanel
                                addedCard={addedCard}
                                setAddedCard={setAddedCard}
                                filterArray={filterArray}
                                checkedState={checkedState}
                                setCheckedState={setCheckedState}
                            />
                        </div>
                    </div>

                    <BetCart
                        setOpenedCart={setOpenedCart}
                        openedCart={openedCart}
                        selectedOption={selectedOption}
                        addedCard={addedCard}
                        setAddedCard={setAddedCard}
                        isPanelFixed={isPanelFixed}
                        setPanelFixed={setPanelFixed}
                    />

                    {/* <div style={{width: "307px", left:"0px", position:"-webkit-sticky", top: "150px", height: isPanelFixed ? "100%" : ""}} className={`${isPanelFixed && "sticky bottom-0 flex"} mb-60px pt-px `}>
                        <BetCombinationRightPanel 
                            addedCard={addedCard} 
                            setAddedCard={setAddedCard} 
                            isPanelFixed={isPanelFixed} 
                            setPanelFixed={setPanelFixed} 
                        />
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default BetCombinationPage
