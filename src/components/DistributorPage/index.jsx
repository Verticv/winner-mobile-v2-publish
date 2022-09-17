import Pagination from '../Pagination'
// import Navbar from 'components/mainPage/Navbar'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../HomePageTopBanner';
import React, { useState } from 'react'
// import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import SummaryIcon from '../../assets/mainPage/distributor/SummaryIcon.png'
import PieIcon from '../../assets/mainPage/distributor/pie.png'
import DetailIcon from '../../assets/mainPage/distributor/detail.png'
import MemberIcon from '../../assets/mainPage/distributor/member.png'
import RecommendIcon from '../../assets/mainPage/distributor/recommend.png'
import SummaryIcon1 from '../../assets/mainPage/distributor/SummaryIcon1.png'
import SummaryIcon2 from '../../assets/mainPage/distributor/SummaryIcon2.png'
import SummaryIcon3 from '../../assets/mainPage/distributor/SummaryIcon3.png'
import SummaryIcon4 from '../../assets/mainPage/distributor/SummaryIcon4.png'
import SummaryIcon5 from '../../assets/mainPage/distributor/SummaryIcon5.png'
import SummaryIcon6 from '../../assets/mainPage/distributor/SummaryIcon6.png'
import SummaryIcon7 from '../../assets/mainPage/distributor/SummaryIcon7.png'
import SummaryIcon8 from '../../assets/mainPage/distributor/SummaryIcon8.png'
import DefaultUser from '../../assets/mainPage/distributor/default.png'


import DateSearchBar from '../DateSearchBar'
import Diamond from '../../assets/mainPage/distributor/diamond.png'
import WhiteArrow from '../../assets/mainPage/distributor/arrow.png'
import BlueTriangle from '../../assets/mainPage/distributor/blue_triangle.png'

const DistributorPage = ({
    isAuthenticated,
    setAuthenticated
}) => {

    const RecommendedUserArray = [
        {
            id: 0,
            number: 1,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 3,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            hasSubArray: true
        },
        {
            id: 3,
            number: 2,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0
        },
        {
            id: 6,
            number: 3,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0
        },
        {
            id: 9,
            number: 4,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            isLast: true
        },
    ]

    const RecommendedUserArray2 = [
        {
            id: 12,
            number: 1,
            username: "louie33",
            nickname: "위너테스트3",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            hasSubArray: false,
        },
    ]

    const [page, setPage] = useState(0);
    const [isArrowUp, setArrowUp] = useState(new Array(8).fill(false))
    const [viewOnline, setViewOnline] = useState(false)


    const handleOnChange = (position) => {
        const updatedCheckedState = isArrowUp.map((item, index) =>
            index === position ? !item : item
        );
        setArrowUp(updatedCheckedState);
    };

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }


    const SummaryCard = ({ text1, text2, img, count }) => (
        <div style={{ width: '18rem', height: '16.5rem', marginBottom: '0.8125rem', padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', borderRadius: '0.5rem' }} className="rounded-lg border border-gray-dddddd bg-gray-f8f8fa flex flex-col items-center justify-between shadow-plain10">
            <div style={{ width: '100%', height: '100%', background: '#323232', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.4rem' }}>
                <div className='flex flex-col items-center justify-around' style={{ paddingBottom: '1.5625rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <img style={{ marginTop: '1.4125rem', width: '5.1875rem' }} className="object-contain" src={img} alt="" />
                    {text1 && <span style={{ fontSize: '2.25rem', height: '2.34375rem', marginTop: '0.09rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.1rem', letterSpacing: '-0.07rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r616161">{text1}</span>}
                    {text2 && <span style={{ fontSize: '2.25rem', height: '2.34375rem', marginTop: '0.375rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r616161">{text2}</span>}
                </div>
                <span style={{ fontSize: '2.25rem', lineHeight: '1.625rem', marginBottom: '1.2rem', fontFamily: 'RobotoBold', color: '#aa9264', letterSpacing: '-0.07rem' }} className="font-robotoBold tracking-tight text-blue-r0056a6">{count}</span>
            </div>
        </div>
    )

    const PercentageCell = () => (
        <>
            <div className="w-full flex">
                {/* <div className="w-40px mt-10px flex justify-center items-start">
                    <img src={ReplyArrow} className="object-contain" alt="" />
                </div> */}
                {/* <div className="w-full flex flex-col">
                    <div style={{ height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem' }} className="flex w-full border-b border-gray-dddddd items-center text-white font-spoqaMedium tracking-tight bg-gray-r687b8e">
                        <div className="w-full h-full flex items-center justify-center bg-gray-r253240">구분</div>
                        <div className="w-full h-full flex items-center justify-center">스포츠</div>
                        <div className="w-full h-full flex items-center justify-center">미니게임</div>
                        <div className="w-full h-full flex items-center justify-center">에볼루션</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>아시아</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>카지노</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>드림</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>섹시</span><span>게이밍</span></div>
                        <div className="w-full h-full flex items-center justify-center">빅게이밍</div>
                        <div className="w-full h-full flex items-center justify-center">넷엔트</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>플레이</span></div>
                        <div className="w-full h-full flex items-center justify-center">퀵스핀</div>
                        <div className="w-full h-full flex items-center justify-center">스페이드</div>
                        <div className="w-full h-full flex items-center justify-center">하바네로</div>
                        <div className="w-full h-full flex items-center justify-center">월드매치</div>
                        <div className="w-full h-full flex items-center justify-center">메버릭</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>플레이</span><span>앤고</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>YL</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>레드</span><span>타이거</span></div>
                        <div className="w-full h-full flex items-center justify-center">e-스포츠</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>키론</span><span>가상게임</span></div>
                        <div className="w-full h-full flex items-center justify-center pr-3px">관리</div>
                    </div>
                    <div style={{ height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem' }} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858 border-r-2 border-b border-gray-dddddd bg-white">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">변경</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">
                            <button
                                style={{ width: "11.5rem", fontSize: '2.625rem' }}
                                className={`bg-blue-r2068b2 flex items-center justify-center rounded-lg hover:opacity-75 p-px small-padding`}
                            >
                                <div
                                    className={`border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a flex items-center justify-center w-full h-full py-5 px-10 rounded-lg border  cursor-pointer`}
                                >
                                    <span className="font-spoqaMedium tracking-tight text-white ">
                                        수정
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div> */}
                <div style={{ padding: '0', width: '114.75rem' }} className=''>
                    {/* the gray box */}
                    {/* <div style={{ width: '75.625rem', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem', overflow: 'scroll', height: '35.8rem', marginLeft: '', padding: '0.1875rem', boxShadow: 'rgb(0 0 0) 0 0.4375rem 3rem 0' }} className="w-full overflow-scroll"> */}
                    {/* the blue box */}
                    {/* <table style={{ width: '303.625rem', padding: '', display: 'block', background: '', borderCollapse: 'collapse' }} className="w-full">
                            <thead style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', background: '#323232', color: '#ccc2b6' }} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-white tracking-tight">
                                <tr style={{ height: '8.925rem', borderBottom: '0.1875rem solid #252525' }} className="flex items-center border-b">
                                    <td style={{ width: '13.8125rem', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">스포츠</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">미니게임</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '0.5rem' }} className="text-center">에볼루션</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1rem' }} className="text-center flex flex-col"><span>아시안</span><br /><span className='-mt-3.5' >게이밍</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1.5rem' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>카지노</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2rem' }} className="text-center flex flex-col"><span>드림</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }} className="text-center flex flex-col"><span>섹시</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem' }} className="text-center">빅게이밍</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3.5rem' }} className="text-center">넷엔트</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>플레이</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">퀵스핀</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">스페이드</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">하바네로</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">월드매치</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">메버릭</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>플레이</span><br /><span className='-mt-3.5'>앤고</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>YL</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>레드</span><br /><span className='-mt-3.5'>타이거</span></td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">e-스포츠</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>키론</span><br /><span className='-mt-3.5'>가상게임</span></td>
                                    <td style={{ backgroundColor: "#242424e6", width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center h-full flex items-center justify-center">합계</td>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '2.625rem', fontFamily: 'RobotoRegular', color: '#c8c8c8' }} className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                <tr style={{ height: '8.925rem', borderBottomWidth: '0.1875rem', color: '#ccc2b6', borderBottom: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">베팅금</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.9rem', paddingBottom: '0.2rem' }} className="text-right">1.09M</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">33K</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">3.06M</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4">0</td>
                                    <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">7.14M</td>
                                </tr>
                                <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525', background: '#2e2e2e' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">승패</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4">0</td>
                                    <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                </tr>
                                <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', padding: '0.3rem 0 0 0.5rem', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">정산금액</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right pr-4">0</td>
                                    <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                </tr>
                            </tbody>
                        </table> */}
                    <table style={{ width: '290.2rem', padding: '', display: 'block', borderCollapse: 'collapse', background: '#2e2e2e' }} className="w-full">
                        <thead style={{ height: '8.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', borderBottom: '0.1875rem solid #252525' }} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                            <tr style={{ height: '8.8125rem', letterSpacing: '-0.07rem' }} className="flex items-center">
                                <td style={{ width: '13.8125rem', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1rem', paddingTop: '' }} className="text-center">스포츠</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '' }} className="text-center">미니게임</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }} className="text-center">에볼루션</td>
                                <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', display: 'flex', flexDirection: 'column', paddingTop: '1.2rem', paddingLeft: '0.7rem' }} className="text-center flex flex-col"><span>아시안</span><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>카지노</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>드림</span><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>섹시</span><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">빅게이밍</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">넷엔트</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>플레이</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">퀵스핀</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">스페이드</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">하바네로</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">월드매치</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">메버릭</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>플레이</span><br /><span className='-mt-3.5'>앤고</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>YL</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>레드</span><br /><span className='-mt-3.5'>타이거</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">e-스포츠</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>키론</span><br /><span className='-mt-3.5'>가상게임</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">관리</td>
                            </tr>
                        </thead>
                        <tbody style={{ height: '8.8125rem', background: '#323232' }} className="w-full text-585858 tracking-tight font-spoqaMedium">
                            <tr style={{ height: '8.8125rem', fontFamily: 'RobotoRegular', color: '#c8c8c8', letterSpacing: '-0.07rem', borderBottomLeftRadius: '1rem' }} className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1.3rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                <td>
                                    <button
                                        style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                                    >
                                        <div
                                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: 'linear-gradient(to top, #f38d27, #b45a00)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                        >
                                            <span className="font-spoqaMedium tracking-tight text-white small-padding">
                                                수정
                                            </span>

                                        </div>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* </div> */}
                </div>
            </div>
        </>
    )

    const DetailCell = () => (
        <>
            <div className="w-full flex">
                {/* <div className="w-40px mt-10px flex justify-center items-start">
                    <img src={ReplyArrow} className="object-contain" alt="" />
                </div> */}
                {/* <div className="w-full flex flex-col border-r border-gray-dddddd  bg-white border-b">
                    <div style={{ height: '8.625rem' }} className="flex w-full border-b border-gray-dddddd items-center bg-gray-cfd7e0">
                        <div style={{ width: '38.4375rem', height: '6.25rem', fontSize: '2.625rem', marginLeft: '1.125rem' }} className="rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                            <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.6875rem' }} className="object-contain" src={Diamond} alt="" />
                            <div className="flex items-center">
                                <span style={{ marginRight: '0.625rem' }} className="text-white">입금:</span>
                                <span className="text-yellow-ffcc00">000,000,000</span>
                            </div>
                        </div>
                        <div style={{ width: '38.4375rem', height: '6.25rem', fontSize: '2.625rem', marginLeft: '1.125rem' }} className="rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                            <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.6875rem' }} className="object-contain" src={Diamond} alt="" />
                            <div className="flex items-center">
                                <span style={{ marginRight: '0.625rem' }} className="text-white">보너스:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>
                        <div style={{ width: '38.4375rem', height: '6.25rem', fontSize: '2.625rem', marginLeft: '1.125rem' }} className="rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                            <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.6875rem' }} className="object-contain" src={Diamond} alt="" />
                            <div className="flex items-center">
                                <span style={{ marginRight: '0.625rem' }} className="text-white">출금:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>

                    </div>


                    <div style={{ height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem' }} className="flex w-full border-b border-gray-dddddd items-center text-white font-spoqaMedium tracking-tight bg-gray-r687b8e">
                        <div className="w-full h-full flex items-center justify-center bg-gray-r253240">구분</div>
                        <div className="w-full h-full flex items-center justify-center">스포츠</div>
                        <div className="w-full h-full flex items-center justify-center">미니게임</div>
                        <div className="w-full h-full flex items-center justify-center">에볼루션</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>아시아</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>카지노</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>드림</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>섹시</span><span>게이밍</span></div>
                        <div className="w-full h-full flex items-center justify-center">빅게이밍</div>
                        <div className="w-full h-full flex items-center justify-center">넷엔트</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>플레이</span></div>
                        <div className="w-full h-full flex items-center justify-center">퀵스핀</div>
                        <div className="w-full h-full flex items-center justify-center">스페이드</div>
                        <div className="w-full h-full flex items-center justify-center">하바네로</div>
                        <div className="w-full h-full flex items-center justify-center">월드매치</div>
                        <div className="w-full h-full flex items-center justify-center">메버릭</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>플레이</span><span>앤고</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>YL</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>레드</span><span>타이거</span></div>
                        <div className="w-full h-full flex items-center justify-center">e-스포츠</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>키론</span><span>가상게임</span></div>
                    </div>
                    <div style={{ height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem' }} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858 border-b">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">베팅금</div>
                        <div className="w-full h-full flex items-center justify-center">1.09M</div>
                        <div className="w-full h-full flex items-center justify-center">33K</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">7.14M</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                    </div>
                    <div style={{ height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem' }} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858 border-b">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">승패</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                    </div>
                    <div style={{ height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem' }} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">정산금액</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                    </div>
                </div> */}
                <div style={{ display: 'flex', }}>
                    <div style={{ width: '38.5rem', height: '6.3rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '', marginTop: '1.8rem', marginLeft: '1rem', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: '1.1rem' }} className="px-5 border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                        <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.5rem' }} className="object-contain" src={Diamond} alt="" />
                        <div style={{ marginTop: '0.15rem' }} className="flex items-center">
                            <span className="text-white flex-shrink-0" style={{ color: '#fff' }}>입금:</span>
                            <span className="text-yellow-ffcc00 ml-3" style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.6rem' }}>{truncate("000,000,000", 15, 15)}</span>
                        </div>
                    </div>
                    <div style={{ width: '38.5rem', height: '6.3rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '', marginTop: '1.8rem', marginLeft: '1rem', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: '1.1rem' }} className="px-5 border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                        <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.5rem' }} className="object-contain" src={Diamond} alt="" />
                        <div style={{ marginTop: '0.15rem' }} className="flex items-center">
                            <span className="text-white flex-shrink-0" style={{ color: '#fff' }}>보너스: </span>
                            <span className="text-yellow-ffcc00 ml-3" style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.6rem' }}>{truncate("0", 15, 15)}</span>
                        </div>
                    </div>
                    <div style={{ width: '38.5rem', height: '6.3rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '', marginTop: '1.8rem', marginLeft: '1rem', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: '1.1rem' }} className="px-5 border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                        <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.5rem' }} className="object-contain" src={Diamond} alt="" />
                        <div style={{ marginTop: '0.15rem' }} className="flex items-center">
                            <span className="text-white flex-shrink-0" style={{ color: '#fff' }}>출금: </span>
                            <span className="text-yellow-ffcc00 ml-3" style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.6rem' }}>{truncate("0", 15, 15)}</span>
                        </div>
                    </div>
                </div>
                {/* <div style={{ height: '8.5625rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: '#eeeeee4a' }} className="w-full bg-gray-r687b8e border-b border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                        <div className="w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>번호</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(0)}
                                        >
                                            <p >아이디</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[0] === true ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">별명</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center"
                                            onClick={() => handleOnChange2(1)}
                                        >
                                            <div className="flex flex-col items-center justify-center hover:opacity-75 ">
                                                <div className="flex items-center">하부</div>
                                                <div className="flex items-center -mt-3.5">유저수</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[1] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ fontSize: '2.4rem' }}
                                            className="w-full h-full flex items-center justify-center"
                                            onClick={() => handleOnChange2(2)}
                                        >
                                            <div className="flex flex-col items-center justify-center hover:opacity-75">
                                                <div className="flex items-center">추천일시</div>
                                                <div className="flex items-center -mt-3.5">로그인일시</div>
                                                <div className="flex items-center -mt-3.5">(미접속일수)</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[2] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">요율보기</div>
                                        <div className="w-full h-full flex items-center justify-center">입금액</div>
                                        <div className="w-full h-full flex items-center justify-center">보너스</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(3)}
                                        >
                                            <p>출금액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[3] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">입출금액</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(4)}
                                        >
                                            <p>베팅액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[4] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(5)}
                                        >
                                            <p>윈루즈</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[5] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">상세내역</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(6)}
                                        >
                                            <p>포인트</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[6] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(7)}
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="flex items-center">보유</div>
                                                <div className="flex items-center -mt-3.5">금액</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[7] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                    </div> */}
                <div style={{ padding: '0', width: '114.75rem' }} className=''>
                    {/* the gray box */}
                    {/* <div style={{ width: '75.625rem', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem', overflow: 'scroll', height: '35.8rem', marginLeft: '', padding: '0.1875rem', boxShadow: 'rgb(0 0 0) 0 0.4375rem 3rem 0' }} className="w-full overflow-scroll"> */}
                    {/* the blue box */}
                    <table style={{ width: '289.625rem', padding: '', display: 'block', background: 'red', borderCollapse: 'collapse' }} className="w-full">
                        <thead style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', background: '#323232', color: '#ccc2b6' }} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-white tracking-tight">
                            <tr style={{ height: '8.925rem', borderBottom: '0.1875rem solid #252525' }} className="flex items-center border-b">
                                <td style={{ width: '13.8125rem', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">스포츠</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">미니게임</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '0.5rem' }} className="text-center">에볼루션</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1rem' }} className="text-center flex flex-col"><span>아시안</span><br /><span className='-mt-3.5' >게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1.5rem' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>카지노</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2rem' }} className="text-center flex flex-col"><span>드림</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }} className="text-center flex flex-col"><span>섹시</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem' }} className="text-center">빅게이밍</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3.5rem' }} className="text-center">넷엔트</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>플레이</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">퀵스핀</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">스페이드</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">하바네로</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">월드매치</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">메버릭</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>플레이</span><br /><span className='-mt-3.5'>앤고</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>YL</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>레드</span><br /><span className='-mt-3.5'>타이거</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">e-스포츠</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>키론</span><br /><span className='-mt-3.5'>가상게임</span></td>
                                {/* <td style={{ backgroundColor: "#242424e6", width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center h-full flex items-center justify-center">합계</td> */}
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '2.625rem', fontFamily: 'RobotoRegular', color: '#c8c8c8' }} className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                            <tr style={{ height: '8.925rem', borderBottomWidth: '0.1875rem', color: '#ccc2b6', borderBottom: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">베팅금</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.9rem', paddingBottom: '0.2rem' }} className="text-right">1.09M</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">33K</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">3.06M</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4">0</td>
                                {/* <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">7.14M</td> */}
                            </tr>
                            <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525', background: '#2e2e2e' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">승패</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4">0</td>
                                {/* <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td> */}
                            </tr>
                            <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', padding: '0.3rem 0 0 0.5rem', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">정산금액</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right pr-4">0</td>
                                {/* <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', }} className="text-right pr-4 h-full flex items-center justify-end">0</td> */}
                            </tr>
                        </tbody>
                    </table>
                    {/* </div> */}
                </div>
            </div>
        </>
    )

    function RecommendedUserCell({ items }) {

        const [isUserCountOpen, setUserCountOpen] = useState(new Array(20).fill(false))
        const [subArrowClicked, setSubArrowClicked] = useState(new Array(8).fill(false))
        const handleOnChange1 = (position) => {
            const updatedCheckedState = isUserCountOpen.map((item, index) =>
                index === position ? !item : item
            );
            setUserCountOpen(updatedCheckedState);
        };

        const handleOnChange2 = (position) => {
            const updatedCheckedState = subArrowClicked.map((item, index) =>
                index === position ? !item : item
            );
            setSubArrowClicked(updatedCheckedState);
        };

        return items.map(item => (
            <>
                <div style={{
                    fontSize: '2.625rem', height: '11.2rem', display: 'flex', alignItems: 'center', justifyContent: '', fontFamily: 'RobotoRegular',
                    padding: '0.6rem 1.875rem 0',
                    background: item.id % 2 === 1 ? '#242424' : '#323232',

                    //  paddingLeft: '0.4rem', paddingTop: '0.5rem', 
                    letterSpacing: '-0.07rem'
                }} className={`${item.id % 2 === 1 ? "bg-white" : "bg-gray-f8f9fb"} ${item.isLast ? "border-b" : "border-b"} w-full flex items-center justify-evenly font-roboto text-gray-r585858 tracking-tight border-l border-r border-gray-dddddd`}>
                    <div className="w-full h-full flex items-center justify-center" style={{ width: '13rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '2.7rem' }}>{item.number}</div>
                    <div className="w-full h-full flex items-center justify-center" style={{ width: '21.7rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '0.2rem' }}>{item.username}</div>
                    {item.name && (
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium" style={{ width: '16.6rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>{item.name}</div>
                    )}
                    <div className="w-full h-full flex items-center justify-center font-spoqaMedium" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', paddingLeft: '3.5rem' }}>{item.nickname}</div>
                    <div className="relative w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        {item.user_count === 0
                            ? <div className="" style={{ fontFamily: 'RobotoRegular' }}>{item.added_amount}</div>
                            :
                            <button
                                style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                                className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center rounded-lg hover:opacity-75`}
                                onClick={() => {
                                    handleOnChange1(item.id)
                                }}
                            >
                                <div
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: 'linear-gradient(to top, #f38d27, #b45a00)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                    className={`${isUserCountOpen[item.id] === true
                                        ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db"
                                        : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                        } flex items-center justify-center rounded-lg w-full h-full border cursor-pointer px-8 py-5`}
                                >
                                    <span className="font-spoqaMedium tracking-tight text-white small-padding" style={{ color: '#ffdfbd' }}>
                                        {isUserCountOpen[item.id] === true ? "접기" : "보기"}  {item.user_count}
                                    </span>
                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} className={isUserCountOpen[0] === false && " transform rotate-180"} src={WhiteArrow} alt="" />
                                </div>
                            </button>
                        }
                        {isUserCountOpen[item.id] === true && (
                            <div className="absolute bottom-0 -mb-px" style={{ position: 'absolute', bottom: '-1rem' }}>
                                <img style={{ width: '3.111875rem', height: 'auto' }} className='object-contain' src={BlueTriangle} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="w-full text-center flex flex-col items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="flex items-center">{item.recommended_date}</div>
                        <div className="flex items-center -mt-3.5">{item.login_date}</div>
                        <div className="flex items-center -mt-3.5 font-spoqaMedium">({item.absent_date})</div>
                    </div>
                    <div className="relative w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <button
                            style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                            className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center rounded-lg hover:opacity-75`}
                            onClick={() => {
                                handleOnChange1(item.id + 1)
                            }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: 'linear-gradient(to top, #f38d27, #b45a00)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                className={`${isUserCountOpen[item.id + 1] === true
                                    ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db"
                                    : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                    } flex items-center justify-center rounded-lg border w-full h-full cursor-pointer px-10 py-5`}
                            >
                                <span className="font-spoqaMedium tracking-tight text-white" style={{ color: '#ffdfbd' }}>
                                    {isUserCountOpen[item.id + 1] === true ? "접기" : "보기"}
                                </span>
                                <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow} alt="" />
                            </div>
                        </button>
                        {isUserCountOpen[item.id + 1] === true && (
                            <div className="absolute bottom-0 -mb-px" style={{ position: 'absolute', bottom: '-1rem' }}>
                                <img style={{ width: '3.111875rem', height: 'auto' }} className='object-contain' src={BlueTriangle} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.added_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.bonus}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.withdraw_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.added_withdraw_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.bet_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.win_lose}</p></div>
                    <div className="relative w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <button
                            style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                            className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center rounded-lg hover:opacity-75`}
                            onClick={() => {
                                handleOnChange1(item.id + 2)
                            }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: 'linear-gradient(to top, #f38d27, #b45a00)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                className={`${isUserCountOpen[item.id + 2] === true
                                    ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db"
                                    : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                    } flex items-center justify-center rounded-lg w-full h-full border cursor-pointer px-10 py-5`}
                            >
                                <span className="font-spoqaMedium tracking-tight text-white" style={{ color: '#ffdfbd' }}>
                                    {isUserCountOpen[item.id + 2] === true ? "접기" : "보기"}
                                </span>
                                <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow} alt="" />
                            </div>
                        </button>
                        {isUserCountOpen[item.id + 2] === true && (
                            <div className="absolute bottom-0 -mb-px" style={{ position: 'absolute', bottom: '-1rem' }}>
                                <img style={{ width: '3.111875rem', height: 'auto' }} className='object-contain' src={BlueTriangle} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="w-full h-full flex items-center justify-end" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}><p className="pr-32px">{item.point}</p></div>
                    <div className="w-full h-full flex items-center justify-end" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}><p className="pr-32px">{item.holding_amount}</p></div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        boxShadow: ' #131313 0px 18px 36px -18px inset',
                        borderTop: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id + 1] === true || isUserCountOpen[item.id + 2] === true) && "0.375rem solid #a67c52",
                        // borderBottom: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id+1] === true || isUserCountOpen[item.id+2] === true) && "2px solid #dddddd",
                    }}
                    className={`flex flex-col relative`}
                >
                    {/* {(isUserCountOpen[item.id] === true || isUserCountOpen[item.id + 1] === true || isUserCountOpen[item.id + 2] === true) &&
                        <div className="absolute w-40px mt-10px flex justify-center items-start">
                            <img src={ReplyArrow} className="object-contain" alt="" />
                        </div>
                    } */}

                    {/* (isUserCountOpen[item.id] === true && item.hasSubArray === true)  */}
                    {(isUserCountOpen[item.id] === true && item.hasSubArray === true) && (
                        <>
                            <div className="w-full flex"
                                style={{ display: 'flex' }}
                            >
                                {/* <div className="w-40px mt-10px flex justify-center items-start">
                            <img src={ReplyArrow} className="object-contain" alt="" />
                        </div> */}
                                <div className=" w-full flex flex-col"
                                    style={{ display: 'flex', flexDirection: 'column' }}
                                >
                                    {/* === Header === */}

                                    {/* <div style={{ height: '8.5625rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: '#eeeeee4a' }} className="w-full bg-gray-r687b8e border-b border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                        <div className="w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>번호</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(0)}
                                        >
                                            <p >아이디</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[0] === true ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">별명</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center"
                                            onClick={() => handleOnChange2(1)}
                                        >
                                            <div className="flex flex-col items-center justify-center hover:opacity-75 ">
                                                <div className="flex items-center">하부</div>
                                                <div className="flex items-center -mt-3.5">유저수</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[1] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ fontSize: '2.4rem' }}
                                            className="w-full h-full flex items-center justify-center"
                                            onClick={() => handleOnChange2(2)}
                                        >
                                            <div className="flex flex-col items-center justify-center hover:opacity-75">
                                                <div className="flex items-center">추천일시</div>
                                                <div className="flex items-center -mt-3.5">로그인일시</div>
                                                <div className="flex items-center -mt-3.5">(미접속일수)</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[2] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">요율보기</div>
                                        <div className="w-full h-full flex items-center justify-center">입금액</div>
                                        <div className="w-full h-full flex items-center justify-center">보너스</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(3)}
                                        >
                                            <p>출금액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[3] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">입출금액</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(4)}
                                        >
                                            <p>베팅액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[4] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(5)}
                                        >
                                            <p>윈루즈</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[5] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div className="w-full h-full flex items-center justify-center">상세내역</div>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(6)}
                                        >
                                            <p>포인트</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[6] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            className="w-full h-full flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(7)}
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="flex items-center">보유</div>
                                                <div className="flex items-center -mt-3.5">금액</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem' }} src={WhiteArrow} className={`${subArrowClicked[7] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                    </div> */}
                                    <div style={{ height: '8.9625rem', fontSize: '2.625rem', background: '#2e2e2e', padding: '0px 1.875rem', borderBottomWidth: '0.1875rem', display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="w-full bg-gray-r8e9296 border-b border-r border-l border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                        <div style={{ width: '13rem', paddingLeft: '2.6rem', textAlign: '', paddingTop: '0.6rem' }} className="text-center">번호</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '21.7rem', letterSpacing: '-0.07rem', paddingTop: '0.7rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(0)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>아이디</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[0] === true ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[0] === true ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ width: '16.6rem', textAlign: 'center', marginTop: '0.5rem' }} className="text-center">이름</div>
                                        <div style={{ width: '18rem', textAlign: 'center', paddingLeft: '3.4rem', paddingTop: '0.6rem' }} className="text-center -mt-3.5">별명</div>
                                        <button
                                            style={{ margin: '0', padding: '0', width: '18rem', height: '100%', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}
                                            className="text-center flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(1)}
                                        >
                                            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', marginTop: '1.2rem' }}>
                                                <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>하부</div>
                                                <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', marginTop: '' }}>유저수</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[1] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[1] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ width: '18rem', height: '100%', fontSize: '2.4rem', textAlign: 'center', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            className="text-center flex items-center justify-center hover:opacity-75 "
                                            onClick={() => handleOnChange2(2)}
                                        >
                                            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                                                <div style={{ height: '3.29rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center' }} className="flex items-center">추천일시</div>
                                                <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center', margin: '-0.5rem 0' }} className="flex items-center -mt-3.5">로그인일시</div>
                                                <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center' }} className="flex items-center -mt-3.5">(미접속일수)</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', fontSize: '2.4rem', transform: isArrowUp[2] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[2] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ width: '18rem', textAlign: 'center' }} className="text-center">요율보기</div>
                                        <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">입금액</div>
                                        <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">보너스</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(3)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>출금액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[3] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[3] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', textAlign: 'center' }} className="text-center">입출금액</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(4)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>베팅액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[4] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[4] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', display: 'flex', height: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(5)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>윈루즈</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[5] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[5] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ width: '18rem', textAlign: 'center' }} className="text-center">상세내역</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(6)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>포인트</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[6] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[6] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="text-center flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(7)}
                                        >
                                            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>보유</div>
                                                <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>금액</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[7] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[7] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                    </div>
                                    <RecommendedUserCell items={RecommendedUserArray2} />
                                </div>
                            </div>
                        </>
                    )}

                    {isUserCountOpen[item.id + 1] === true && (
                        <>
                            {(isUserCountOpen[item.id] === true && item.hasSubArray === true) ? (
                                <>
                                    <div className="h-10px" />
                                    <PercentageCell />
                                </>
                            ) : (<PercentageCell />)}
                        </>
                    )}
                    {isUserCountOpen[item.id + 2] === true && (

                        <>
                            {((isUserCountOpen[item.id] === true && item.hasSubArray === true) || isUserCountOpen[item.id + 1] === true) ? (
                                <>
                                    <div className="h-10px" />
                                    <DetailCell />
                                </>
                            ) : (<DetailCell />)}
                        </>

                    )}
                </div>

            </>
        ));
    }

    const UsersOnline = ({ name = "tntwk" }) => (
        <div
            style={{
                // background: "linear-gradient(to bottom, #f5f7f8, #e9e9e9",
                background: 'linear-gradient(to top, #232323, #4f4f4f)',
                height: '6.6rem',
                marginRight: '1.5375rem',
                // borderWidth: '0.1875rem',
                // paddingTop: '0.4375rem'
                padding: '0.1875rem',
                borderRadius: '3.2rem',
                paddingTop: '0.2rem'
            }}
            className="rounded-full  border border-gray-dddddd flex items-center justify-center"
        >
            <div
                style={{
                    background: "#868686",
                    // paddingLeft: '1.25rem',
                    // paddingRight: '2.0625rem',
                    width: 'max-content',
                    height: '100%',
                    paddingTop: '0.1875rem',
                    borderRadius: '3.2rem'
                }}
                className="h-full w-full rounded-full flex items-center"
            >

                <div style={{
                    marginBottom: '0.28125rem',
                    paddingLeft: '1.1rem',
                    paddingRight: '2.1rem',
                    background: 'linear-gradient(to top, #786d62, #4b4742)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '3.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '0.3rem'
                }} className="h-full w-full rounded-full flex items-center">
                    <img style={{ width: '3.9375rem', height: '3.9375rem', marginRight: '0.7rem', marginTop: '-0.4rem' }} className='mr-3' src={DefaultUser} alt="" />
                    <span style={{ fontSize: '2.8125rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium pt-2">{name}</span>
                </div>
            </div>
        </div>
    )

    return (
        <div className="relative flex flex-col h-full">

            {/* <div className="w-full z-30 flex flex-col items-center"> */}
            {/* <NoticeBanner /> */}
            {/* <Navbar /> */}
            <HomePageTopBanner pageTitle='총판페이지' />
            {/* </div> */}

            <div style={{ margin: '0', marginTop: '0', overflowX: 'hidden', marginRight: '0', marginBottom: '0' }} className="relative overflow-hidden flex flex-col h-full">
                <div style={{ marginLeft: '1.875rem', height: '11.1875rem', fontSize: '3rem', paddingTop: '' }} className='flex flex-col items-center'>
                    <div style={{ marginBottom: '0.25rem', background: '#272726', display: 'flex', width: '49rem', margin: '1.6rem 12.4rem 0', letterSpacing: '-0.07rem', marginLeft: '12.4rem', height: '5rem', paddingTop: '0.7rem', borderRadius: '3rem' }} className="tracking-tight flex items-center">
                        <p className="font-spoqaMedium text-blue-r0056a6" style={{ margin: '0', color: '#aa9264', fontFamily: 'SpoqaHanSansNeoMedium', marginRight: '0.6rem', marginLeft: '6.6rem' }}>Louie3</p>
                        <p className="font-spoqaMedium ml-2 text-gray-r454545" style={{ margin: '0', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }}>님의 총판 정보입니다.</p>
                    </div>
                    {/* <div style={{ backgroundColor: "#868686", height: '0.1875rem', marginLeft: '-1.7rem', minHeight: '0.1875rem', marginBottom: '2.75rem', width: '46.5625rem' }} className=""></div> */}
                </div>

                <div style={{ marginTop: '1.3rem' }} className="relative flex flex-col justify-start limit:justify-center">

                    <div className="flex flex-col items-start w-full h-full">

                        <div className="w-1836px">
                            <div style={{ marginLeft: '1.875rem', marginBottom: '1.4rem', display: 'flex', alignItems: 'center' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3rem', height: '3.1875rem', marginRight: '0.8125rem', marginTop: '-0.3rem' }} src={SummaryIcon} alt="" />
                                <span style={{ fontSize: '3rem', marginTop: '', color: '#ccc2b6', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>총판현황</span>
                            </div>

                            <div style={{ marginLeft: '1.875rem', width: '73.7rem', display: 'flex', flexWrap: 'wrap' }} className="flex w-full flex-wrap">
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon1} text1="전체 유저" text2="" count={5} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon2} text1="요율 설정" text2="완료건" count={20} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon3} text1="요율 설정" text2="미완료건" count={5} />
                                </div>
                                <SummaryCard img={SummaryIcon4} text1="전체 포인트" text2="" count={0} />

                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon5} text1="현재까지" text2="사용 포인트" count={0} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon6} text1="현재" text2="나의 포인트" count={0} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon7} text1="진행중인" text2="금액" count="78,307.50" />
                                </div>
                                <SummaryCard img={SummaryIcon8} text1="제휴 금액" text2="" count="117,515,875.76" />
                            </div>

                            <div style={{ marginLeft: '1.875rem', marginBottom: '1.3rem', marginTop: '4rem', display: 'flex', alignItems: 'center' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3.1875rem', marginRight: '0.8125rem' }} src={PieIcon} alt="" />
                                <span style={{ fontSize: '3rem', marginTop: '0rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', letterSpacing: '-0.07rem' }}>롤링요율</span>
                            </div>

                            <div className='flex relative' style={{ display: 'flex', position: 'relative' }}>
                                {/* <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '74.5rem' }} className="absolute h-full z-50"></div> */}

                                {/* the red box */}
                                <div style={{ padding: '0', width: '114.75rem' }} className=''>
                                    {/* the gray box */}
                                    <div style={{ width: '75.925rem', overflowX: 'scroll', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', padding: '0.1875rem', margin: '0 1.7rem', boxShadow: '0 0.4375rem 3rem 0 #000', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }} className="w-full overflow-scroll">
                                        {/* the blue box */}
                                        <table style={{ width: '292.3rem', padding: '', display: 'block', borderCollapse: 'collapse', background: '#2e2e2e', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }} className="w-full">
                                            <thead style={{ height: '8.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', borderBottom: '0.1875rem solid #252525' }} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                                <tr style={{ height: '8.8125rem', letterSpacing: '-0.07rem' }} className="flex items-center">
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1rem', paddingTop: '' }} className="text-center">스포츠</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '' }} className="text-center">미니게임</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }} className="text-center">에볼루션</td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', display: 'flex', flexDirection: 'column', paddingTop: '1.2rem', paddingLeft: '0.7rem' }} className="text-center flex flex-col"><span>아시안</span><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>카지노</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>드림</span><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>섹시</span><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">빅게이밍</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">넷엔트</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>플레이</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">퀵스핀</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">스페이드</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">하바네로</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">월드매치</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">메버릭</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>플레이</span><br /><span className='-mt-3.5'>앤고</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>YL</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>레드</span><br /><span className='-mt-3.5'>타이거</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center">e-스포츠</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className="text-center flex flex-col"><span>키론</span><br /><span className='-mt-3.5'>가상게임</span></td>
                                                </tr>
                                            </thead>
                                            <tbody style={{ height: '8.8125rem', background: '#323232' }} className="w-full text-585858 tracking-tight font-spoqaMedium">
                                                <tr style={{ height: '8.8125rem', fontFamily: 'RobotoRegular', color: '#c8c8c8', letterSpacing: '-0.07rem', borderBottomLeftRadius: '1rem' }} className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1.3rem' }} className=" text-center">1.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }} className=" text-center">1.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.70%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }} className=" text-center">0.00%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* <div style={{ background: "linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem', left: '0' }} className="absolute h-full z-50"></div> */}
                            </div>

                            <div style={{ marginLeft: '1.875rem', marginBottom: '1.1rem', marginTop: '5rem', display: 'flex', alignItems: 'center' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3.1875rem', marginRight: '0.8125rem', marginTop: '0.2rem' }} src={DetailIcon} alt="" />
                                <span style={{ fontSize: '3rem', marginTop: '0.4rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>나의 상세내역</span>
                            </div>

                            <div style={{ marginLeft: '1.875rem', maxWidth: '1242px' }} className="relative w-full flex flex-col justify-center overflow-visible DistributorPage">
                                <DateSearchBar withMargin={false} isLeagueSearch={false} withBlackButton isDistributorPage={true} />
                            </div>


                            <div style={{ width: '73.875rem', height: '12.7rem', borderWidth: '0.1875rem', borderRadius: '3.1875rem', padding: '2.2rem 2.75rem', margin: '1.875rem 0', marginLeft: '1.875rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', background: '#2e2e2e', border: '0.1875rem solid #635f5b', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex flex-wrap w-full border-2 border-gray-b4b4b4 bg-gray-r5a6067">
                                <div className='w-1/2 flex flex-wrap items-center justify-center' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginLeft: '0.2rem', width: '50%' }}>
                                    <div style={{ fontSize: '2.624375rem', marginBottom: '1.55rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.2rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.07rem' }} className="text-white">입금:</span>
                                                <span className="text-yellow-ffcc00" style={{ color: '#ffd200' }}>2,520,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ fontSize: '2.624375rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.3125rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.07rem' }} className="text-white">출금:</span>
                                                <span className="text-yellow-ffcc000" style={{ color: '#ffd200' }}>5,800,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='w-1/2 flex flex-wrap items-center justify-center' style={{ width: '50%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: '' }}>
                                    <div style={{ fontSize: '2.624375rem', marginBottom: '1.55rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.2rem', marginRight: '1.3125rem' }} src={Diamond} alt="" />
                                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.07rem' }} className="text-white">보너스:</span>
                                                <span className="text-yellow-ffcc00" style={{ color: '#ffd200' }}>500,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ fontSize: '2.624375rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.3125rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '1.1875rem', color: '#ffffff', letterSpacing: '-0.07rem' }} className="text-white">입출금 합계:</span>
                                                <span className="text-red-f47d7d" style={{ color: '#ff7f7f' }}>-300,200,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='flex relative' style={{ display: 'flex', position: 'relative' }}>
                                {/* <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '74.5rem' }} className="absolute h-full z-50"></div> */}


                                {/* the red box */}
                                <div style={{ padding: '0', width: '114.75rem' }} className=''>
                                    {/* the gray box */}
                                    <div style={{ width: '75.625rem', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem', overflow: 'scroll', height: '35.8rem', marginLeft: '1.875rem', padding: '0.1875rem', boxShadow: 'rgb(0 0 0) 0 0.4375rem 3rem 0' }} className="w-full overflow-scroll">
                                        {/* the blue box */}
                                        <table style={{ width: '303.625rem', padding: '', display: 'block', background: '', borderCollapse: 'collapse' }} className="w-full">
                                            <thead style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', background: '#242424', color: '#ccc2b6' }} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-white tracking-tight">
                                                <tr style={{ height: '8.925rem', borderBottom: '0.1875rem solid #252525' }} className="flex items-center border-b">
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">스포츠</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">미니게임</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '0.5rem' }} className="text-center">에볼루션</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1rem' }} className="text-center flex flex-col"><span>아시안</span><br /><span className='-mt-3.5' >게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1.5rem' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>카지노</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2rem' }} className="text-center flex flex-col"><span>드림</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }} className="text-center flex flex-col"><span>섹시</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem' }} className="text-center">빅게이밍</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3.5rem' }} className="text-center">넷엔트</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }} className="text-center flex flex-col"><span>프레그메틱</span><br /><span className='-mt-3.5'>플레이</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">퀵스핀</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">스페이드</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">하바네로</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">월드매치</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">메버릭</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>플레이</span><br /><span className='-mt-3.5'>앤고</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>YL</span><br /><span className='-mt-3.5'>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>레드</span><br /><span className='-mt-3.5'>타이거</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center">e-스포츠</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center flex flex-col"><span>키론</span><br /><span className='-mt-3.5'>가상게임</span></td>
                                                    <td style={{ backgroundColor: "#242424e6", width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center h-full flex items-center justify-center">합계</td>
                                                </tr>
                                            </thead>
                                            <tbody style={{ fontSize: '2.625rem', fontFamily: 'RobotoRegular', color: '#c8c8c8' }} className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                                <tr style={{ height: '8.925rem', borderBottomWidth: '0.1875rem', color: '#ccc2b6', borderBottom: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">베팅금</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.9rem', paddingBottom: '0.2rem' }} className="text-right">1.09M</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">33K</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">3.06M</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4">0</td>
                                                    <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">7.14M</td>
                                                </tr>
                                                <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525', background: '#2e2e2e' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">승패</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4">0</td>
                                                    <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                                </tr>
                                                <tr style={{ height: '8.925rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', padding: '0.3rem 0 0 0.5rem', background: '#1a1b1c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">정산금액</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right pr-4">0</td>
                                                    <td style={{ backgroundColor: "#3b3b3b", color: "#ff7f7f", width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* <div style={{ background: "linear-gradient(to left, #ffffff00, #ffffff", width: '2.5rem', left: '0' }} className="absolute h-full z-50"></div> */}
                            </div>


                            <div style={{ marginLeft: '1.875rem', marginTop: '4.3125rem', marginBottom: '0.75rem', fontFamily: 'SpoqaHanSansNeoMedium', display: 'flex', alignItems: 'center', letterSpacing: '-0.07rem' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3.1875rem', height: '2.75rem', marginRight: '0.7rem' }} className='object-contain -mt-1.5' src={MemberIcon} alt="" />
                                <div style={{ fontSize: '3rem', color: '#ccc2b6', marginTop: '0.1rem' }}>접속중인 회원수: <span className="font-spoqaBold tracking-tight text-gray-r454545" style={{ fontFamily: 'SpoqaHanSansNeoBold', color: '#c8c8c8' }}>2명</span></div>

                                <div
                                    style={{
                                        width: "13.25rem",
                                        height: "5.0625rem",
                                        borderRadius: "0.5625rem",
                                        marginLeft: "2.4rem",
                                        padding: '0.1875rem',
                                        background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                                        boxShadow: 'rgb(0 0 0) 0 0.4375rem 3rem 0',
                                        marginTop: '-0.1rem'
                                    }}
                                    className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                                    onClick={() => setViewOnline(!viewOnline)}
                                >
                                    <div
                                        style={{
                                            background: "linear-gradient(to top, #a67c52, #7f5f3f)",
                                            borderRadius: "0.4625rem",
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                                    >
                                        <span style={{
                                            fontSize: '2.625rem', color: '#ffdfbd', fontFamily: 'SpoqaHanSansNeoMedium', textShadow: '#00000080 0.3125rem 0.125rem 0.4375rem',
                                            marginTop: '0.4rem',
                                            marginLeft: '-0.1rem',
                                        }} className="font-spoqaMedium tracking-tight text-white pt-px">{viewOnline ? "닫기" : "보기"}</span>
                                    </div>
                                </div>
                            </div>
                            {/* viewOnline */}
                            {viewOnline && (
                                <div style={{ marginLeft: '1.875rem', display: 'flex', position: 'relative' }} className='flex relative'>
                                    <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '74.5rem', position: 'absolute', zIndex: '50' }} className="absolute h-full z-50"></div>
                                    <div style={{ width: '75.75rem', height: "9rem", padding: '0 1.225rem', borderRadius: '1.25rem', borderTopRightRadius: '0', borderBottomRightRadius: '0', borderRightWidth: '0', display: 'flex', position: 'relative', alignItems: 'center', overflow: 'scroll', background: '#2e2e2e' }} className="flex bg-gray-f9f9f9 relative border border-gray-dddddd rounded-2xl items-center overflow-scroll">
                                        <UsersOnline />
                                        <UsersOnline name="tkskdl12" />
                                    </div>
                                </div>
                            )}



                            <div style={{ marginLeft: '1.875rem', marginTop: '4.3rem', fontSize: '3rem', width: '73.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="flex items-end justify-between tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <div className="flex items-center items-center flex" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '3.1875rem', height: '2.9375rem', marginRight: '0.7125rem' }} className='object-contain -mt-1.5' src={RecommendIcon} alt="" />
                                    <div className='mt-1' style={{ color: '#ccc2b6' }}>추천 회원내역</div>
                                </div>

                                <div style={{ maxWidth: '40.6875rem', height: '5.3125rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '0 2rem', marginTop: '0.1rem' }} className="px-5 border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                                    <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '0.9rem' }} className="object-contain" src={Diamond} alt="" />
                                    <div style={{ marginTop: '0.15rem' }} className="flex items-center">
                                        <span className="text-white flex-shrink-0" style={{ color: '#fff' }}>보유금 총합계:</span>
                                        <span className="text-yellow-ffcc00 ml-3" style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.6rem' }}>{truncate("75,000", 15, 15)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex relative' style={{
                                // background: '#323232', 
                                marginLeft: '1.8125rem', color: '#c8c8c8', padding: '0.1875rem',
                                borderTopLeftRadius: '0.4rem',
                                borderBottomLeftRadius: '0.4rem',
                                background: 'linear-gradient(to top, rgb(31, 31, 30), rgb(52, 52, 52) 80%)',
                                boxShadow: 'rgb(0 0 0) 0px 0.4375rem 3rem 0px',
                                marginTop: '0.375rem',
                            }}>
                                {/* <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '74.5rem' }} className="absolute h-full z-50"></div> */}

                                {/* the red box */}
                                <div style={{ padding: '0', width: '114.75rem', background: '' }} className=''>
                                    {/* the gray box */}
                                    <div style={{ width: '75.625rem', borderRightWidth: '0', display: 'flex', flexDirection: 'column', overflow: 'scroll' }} className="flex flex-col w-full relative overflow-scroll">

                                        {/* filter: "drop-shadow(0px 0px 2px #00000050)" */}
                                        {/* the blue box */}
                                        <div style={{ width: '290.125rem', padding: '', display: 'flex', flexDirection: 'column', fontSize: '2.625rem' }} className='flex flex-col w-full'>
                                            {/* === Header === */}
                                            <div style={{ height: '8.9625rem', fontSize: '2.625rem', background: '#2e2e2e', padding: '0px 1.875rem', borderBottom: '0.1875rem solid #252525', display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="w-full bg-gray-r8e9296 border-b border-r border-l border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                                <div style={{ width: '13rem', paddingLeft: '2.6rem', textAlign: '', paddingTop: '0.6rem' }} className="text-center">번호</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '21.7rem', letterSpacing: '-0.07rem', paddingTop: '0.7rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(0)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>아이디</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[0] === true ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[0] === true ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ width: '16.6rem', textAlign: 'center', marginTop: '0.5rem' }} className="text-center">이름</div>
                                                <div style={{ width: '18rem', textAlign: 'center', paddingLeft: '3.4rem', paddingTop: '0.6rem' }} className="text-center -mt-3.5">별명</div>
                                                <button
                                                    style={{ margin: '0', padding: '0', width: '18rem', height: '100%', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}
                                                    className="text-center flex items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(1)}
                                                >
                                                    <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', marginTop: '1.2rem' }}>
                                                        <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>하부</div>
                                                        <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', marginTop: '' }}>유저수</div>
                                                    </div>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[1] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[1] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <button
                                                    style={{ width: '18rem', height: '100%', fontSize: '2.4rem', textAlign: 'center', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    className="text-center flex items-center justify-center hover:opacity-75 "
                                                    onClick={() => handleOnChange(2)}
                                                >
                                                    <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                                                        <div style={{ height: '3.29rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center' }} className="flex items-center">추천일시</div>
                                                        <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center', margin: '-0.5rem 0' }} className="flex items-center -mt-3.5">로그인일시</div>
                                                        <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center' }} className="flex items-center -mt-3.5">(미접속일수)</div>
                                                    </div>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', fontSize: '2.4rem', transform: isArrowUp[2] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[2] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ width: '18rem', textAlign: 'center' }} className="text-center">요율보기</div>
                                                <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">입금액</div>
                                                <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">보너스</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(3)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>출금액</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[3] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[3] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', textAlign: 'center' }} className="text-center">입출금액</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(4)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>베팅액</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[4] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[4] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', display: 'flex', height: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(5)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>윈루즈</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[5] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[5] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ width: '18rem', textAlign: 'center' }} className="text-center">상세내역</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(6)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>포인트</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[6] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[6] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="text-center flex items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(7)}
                                                >
                                                    <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>보유</div>
                                                        <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>금액</div>
                                                    </div>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[7] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[7] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                            </div>
                                            {/* === Body === */}
                                            <RecommendedUserCell items={RecommendedUserArray} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div style={{ background: "linear-gradient(to left, #ffffff00, #ffffff", width: '2.5rem', left: '0' }} className="absolute h-full z-50"></div> */}
                            </div>


                        </div>

                        <div style={{ marginTop: '3.75rem', paddingBottom: '0.01rem' }} className="flex justify-center w-full">
                            <Pagination withMarginBottom page={page} setPage={setPage} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <BottomNavbar /> */}

        </div>
    )
}

export default DistributorPage