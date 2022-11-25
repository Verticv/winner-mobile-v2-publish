import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HorizontalSubMenu from '../HorizontalSubMenuDefault'
import HistoryTable from '../HistoryTable'
// import ScrollButton from '../ScrollButton'
import SelectAllButton from '../SelectAllButton'
import Icon1 from '../../assets/myPage/second-btns/1.png'
import Icon2 from '../../assets/myPage/second-btns/2.png'
import Icon3 from '../../assets/myPage/second-btns/3.png'
import Icon4 from '../../assets/myPage/second-btns/4.png'
// import Icon7 from '../../assets/myPage/second-btns/5.png'
import Icon8 from '../../assets/myPage/second-btns/6.png'
import Icon9 from '../../assets/myPage/second-btns/7.png'
import Icon10 from '../../assets/myPage/second-btns/8.png'
import Icon11 from '../../assets/myPage/second-btns/9.png'
import activeBG from '../../assets/myPage/second-btns/active-bg.png'
import { useNavigate } from 'react-router-dom'
// import HorizontalMenu from '../HorizontalMenu'
// import img22 from '../../img22.png'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0, activeBG: activeBG, marginIcon: '', width: '19.375rem', path: '#' },
    { text: "에볼루션", icon: Icon2, id: 1, activeBG: activeBG, width: '19.375rem', path: '#' },
    { text: "프레그메틱플레이", icon: Icon3, id: 2, activeBG: activeBG, marginIcon: '', width: '19.375rem', path: '#' },
    { text: "로얄지", icon: Icon4, id: 3, activeBG: activeBG, width: '19.375rem', path: '#' },
    { text: "드림게이밍", icon: Icon8, id: 4, activeBG: activeBG, width: '19.375rem', path: '#' },
    { text: "섹시게이밍", icon: Icon9, id: 5, activeBG: activeBG, width: '19.375rem', path: '#' },
    { text: "빅게이밍", icon: Icon10, id: 6, activeBG: activeBG, width: '19.375rem', path: '#' },
    { text: "오리엔탈게임", icon: Icon11, id: 7, activeBG: activeBG, width: '19.375rem', path: '#' },
];

// 베팅번호 => number
// 베팅시간 => time
// 게임종류  => type
// 게임구분 => name
// 베팅금액  => amount
// 적중/손실금액 => profit
// 상태 => status

const tableData = [
    [
        {
            0: { 베팅번호: 1891241599 },
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { '적중/손실금액': "+900,000,000" }
        },
        {
            0: { 상태: "승" }
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "에볼루션" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "+12,000" }
        },
        {
            0: { 상태: "승" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]

const LiveCasinoBetHistory = ({ isState = 0, setState, showSub = true, isPopup = false, subActiveButton, setSubActiveButton, key, path, margon1 }) => {

    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    // const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {

        function test() {
            setTimeout(() => {
            navigate('/mypage/bet-history')
            setSubActiveButton(path)
            },0)
        }
        window.addEventListener('popstate', test);
        // window.onpopstate = e => {
        //     setTimeout(() => {
        //         navigate('/mypage/bet-history')
        //         setSubActiveButton(path)
        //     }, 0)
        // }
        return (() => {
            if (subActiveButton)
            setSubActiveButton(path)
            window.removeEventListener('popstate',test)
        })
    }, [setSubActiveButton, path, subActiveButton, navigate]);


    return (
        <div className="LiveCasinoBetHistory" style={{ marginBottom: margon1 ? '3rem' : '12rem' }}>
            {showSub === true && (
                <>
                    <div className="w-full flex relative top-0" style={{ width: '100%', display: 'flex', position: 'relative', top: '0' }}>
                        <div id='scroll-wrapper1' style={{ padding: '1.875rem', paddingRight: '0', paddingTop: '0', overflowX: 'scroll' }} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                                <HorizontalSubMenu key={6} itemsArray={subTabsArray} setSelectedTab={setSelectedTab} selectedTab={selectedTab} selectedSubTab={selectedSubTab} setSelectedSubTab={setSelectedSubTab} popup />
                            </div>
                        </div>
                        <div style={{ height: '10.8rem', top: '1.6rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                    </div>
                </>
            )}
            {/* <img src={img22} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
            <DateSearchBar isLeagueSearch={false} isPoints />

            {/* <ScrollButton /> */}

            <div className="h-full" style={{ marginTop: '-0.2rem', marginBottom: '-0.4rem' }}>
                <HistoryTable
                    containerBackground='#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='33.75rem'
                    isPopup={isPopup}
                />
            </div>

            <div style={{ margin: '0 1.9rem' }}>
                <SelectAllButton buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>
        </div>
    )
}

export default LiveCasinoBetHistory
