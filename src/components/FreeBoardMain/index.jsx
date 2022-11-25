import Pagination from '../Pagination';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlueSpeaker from '../../assets/myPage/speaker/blue_speaker.png';
import YellowSpeaker from '../../assets/myPage/speaker/yellow_speaker.png';
import WinnerLogo from '../../assets/myPage/speaker/LOGO.png';
import Rank1 from '../../assets/myPage/freeboard/1.png';
import Rank2 from '../../assets/myPage/freeboard/2.png';
import Rank3 from '../../assets/myPage/freeboard/3.png';
import Rank4 from '../../assets/myPage/freeboard/4.png';
import Rank5 from '../../assets/myPage/freeboard/5.png';
import Search from '../Search';

const FreeBoardMain = ({ activeButton, setActiveButton, path = '/mypage/freeboard' }) => {

    const cellArray = [
        {
            id: 0,
            text: "입금규정 필독",
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            isClicked: true,
            path: '/freeboard/view/0'
        },
        {
            id: 1,
            text: "메신저 고객센터 사칭주의",
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/freeboard/view/1'
        },
        {
            id: 2,
            text: "슬롯 롤링 보너스 요율 X2배 증가 안내",
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/freeboard/view/2'
        },
        {
            id: 3,
            text: "진행중 이벤트 안내(2021.06.02)",
            isRead: false,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/3'
        },
        {
            id: 4,
            text: "스포츠 미니게임 충전 보너스(변경 21.04.24 변경)",
            isRead: false,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/4'
        },
        {
            id: 5,
            text: "라이브 카지노 충전 보너스",
            isRead: false,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/5'
        },
        {
            id: 2805,
            text: "아챔 올플핸",
            isRead: true,
            isBetHistory: true,
            replies: 20,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2805',
            author: "필라델피아",
            level: 3
        },
        {
            id: 2804,
            text: "다폴더 이벤트",
            isRead: true,
            isBetHistory: true,
            replies: 2,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2804',
            author: "하이도1207",
            level: 1
        },
        {
            id: 2803,
            text: "다폴더 이벤트 신청합니다.",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2803',
            author: "쇼유",
            level: 1
        },
        {
            id: 2802,
            text: "다폴더 이벤트 참여",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2802',
            author: "보라매유아인",
            level: 1
        },
        {
            id: 2801,
            text: "다폴더 이벤트 신청합니다.",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2801',
            author: "아기히뽀",
            replies: 6,
            level: 4
        },
        {
            id: 2800,
            text: "다폴더 이벤트 신청합니다.",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2800',
            author: "쇼유",
            level: 5
        },
        {
            id: 2799,
            text: "다폴",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2799',
            author: "야리직",
            level: 1
        },
        {
            id: 2798,
            text: "다폴더",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2798',
            author: "신풍사우나",
            level: 2
        },
        {
            id: 2797,
            text: "아챔 올플핸",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2797',
            author: "필라델피아",
            level: 3
        },
        {
            id: 2796,
            text: "다폴더 이벤트",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2796',
            author: "하이도1207",
            level: 1
        },
        {
            id: 2795,
            text: "다폴더 이벤트 신청합니다.",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2795',
            author: "쇼유",
            level: 1
        },
        {
            id: 2794,
            text: "다폴더 이벤트 참여",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2794',
            author: "보라매유아인",
            level: 1
        },
        {
            id: 2793,
            text: "다폴더 이벤트 신청합니다.",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2793',
            author: "아기히뽀",
            level: 4
        },
        {
            id: 2792,
            text: "다폴더 이벤트 신청합니다.",
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2792',
            author: "쇼유",
            level: 5
        },

    ];

    const navigate = useNavigate();
    const [page, setPage] = useState(0)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    useEffect(() => {
        if (activeButton) {

            setActiveButton('/mypage/freeboard')
        }
    }, [setActiveButton, activeButton]);
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    function InboxList({ items }) {
        return items.map(item => (
            <button
                // style={{ background: 'red', width: '74rem', marginLeft: '2rem' }}

                key={item.id}
                // className='relative font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd'
                onClick={() => navigate(item.path)}
            >
                <div className='div-button'
                    style={{
                        // margin: '0',
                        // padding: '1.75rem 2.2rem',
                        // paddingBottom: "1.5rem",
                        backgroundColor:
                            item.type === "안내"
                                ? "#303843"
                                : item.type === "이벤트"
                                    ? "#473c37"
                                    : item.id % 2 === 0
                                        ? "#2e2e2e"
                                        : "#323232"
                    }}
                // className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full " 
                >

                    {item.type === "안내" || item.type === "이벤트" ? (
                        <div
                            className='speaker'
                        // style={{ marginRight: '2.375rem' }}
                        // className="font-spoqaMedium tracking-tight text-gray-r585858 flex items-center justify-center"
                        >
                            {item.type === "안내"
                                ? <img
                                    // style={{ width: '3.3125rem' }} 
                                    src={BlueSpeaker} alt="" />
                                : item.type === "이벤트"
                                    ? <img
                                        // style={{ width: '3.3125rem' }}
                                        src={YellowSpeaker} alt="" />
                                    : ''
                            }
                        </div>
                    ) : (<></>)}



                    <div
                        className='card-content'
                    // className='w-full h-full flex flex-wrap'
                    >
                        <div
                            style={{ display: 'flex' }}
                            className='type'
                        // className={`w-full flex items-center font-spoqaMedium text-gray-r585858 group`}
                        >
                            {
                                item.type === "안내"
                                    ? <div
                                        className='aaa'
                                        style={{ background: '#0469a3' }}
                                    // style={{ fontSize: '2.4375rem', padding: '0.0625rem 1.65rem', background: 'blue' }}
                                    //  className="rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white mr-4 mb-2"
                                    >
                                        <span
                                        // className='mt-1.5'
                                        // style={{ background: 'blue', padding: '0.4rem 1.5rem'}}
                                        >{truncate('안내안내안내안내안내', 6, 6)}</span>
                                    </div>
                                    : item.type === "이벤트"
                                        ? <div
                                            className='aaa'
                                            style={{ background: '#c08029' }}
                                        //  style={{ fontSize: '2.4375rem', padding: '0.0625rem 1.65rem' }} className="rounded-full bg-yellow-ffab39 flex items-center justify-center text-white mr-4 mb-2"
                                        ><span
                                            style={{ marginLeft: '-0.3rem' }}
                                        //  className='mt-1.5'
                                        >{truncate('이벤트이벤트이벤트', 6, 6)}</span></div>
                                        : <div></div>
                            }
                            <p
                                style={{ wordSpacing: (item.text === '다폴더 이벤트 참여' && item.id === 2802) ? '-0.3rem' : '', maxWidth: (item.id === 2) || (item.id === 4) ? '40rem' : '' }}
                                className={`text ${item.type === "안내"
                                    ? "blue-bg"
                                    : item.type === "이벤트"
                                        ? "yellow-bg"
                                        : "black-bg"
                                    } text-5xl text-ellipsis overflow-hidden whitespace-nowrap`}
                            >
                                {item.text}
                            </p>
                            {item.replies && (
                                <div
                                    style={{
                                        minWidth: '7.5rem',
                                        height: '7.0625rem',
                                        borderWidth: '0.1875rem',
                                        borderStyle: 'solid',
                                        borderColor: '#3b3b3b',
                                        borderRadius: '1.5rem',
                                        fontSize: "2.6rem",
                                        top: '2.375rem',
                                        right: '2.375rem',
                                        position: 'absolute',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#2e2e2e',
                                        color: '#ff6945',
                                        // padding: '0 2.6rem'
                                        padding: '0 1rem'
                                    }} className="absolute pl-7px pr-8px rounded-full flex items-center justify-center border text-red-d52e2e font-roboto"
                                >{item.replies}</div>
                            )}
                            {item.isBetHistory === true && (
                                <div
                                    className='aaa'
                                    style={{
                                        backgroundColor: "#41b06c",
                                        // fontSize: '2.4375rem',
                                        // padding: '0.0625rem 1.65rem',
                                        marginLeft: '1rem',
                                        marginTop: '-1.3rem',
                                        fontSize: '2.4375rem',
                                        padding: '0.6rem 1.6rem 0.4rem',
                                        borderRadius: '2rem',
                                        color: '#fff',
                                        fontFamily: "SpoqaHanSansNeoMedium",
                                        marginBottom: '0.2rem',
                                    }}
                                // className="rounded-full flex items-center justify-center text-white font-spoqaMedium"
                                >
                                    <span className='mt-1.5'>베팅내역</span>
                                </div>
                            )}
                            {item.isRead === false && (
                                <div
                                // style={{ width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem' }} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4"
                                >
                                    <p
                                        className='N'
                                    // className="flex items-center"
                                    >N</p>
                                </div>
                            )}
                        </div>

                        <div
                            className='logo-div'
                        // className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} 
                        >
                            {item.type !== "일반"
                                ? <img
                                    style={{ width: '12.0625rem', height: '3rem' }}
                                    src={WinnerLogo} alt="" />
                                : (
                                    <div
                                        className='card-with-rank'
                                    // className="w-full flex space-x-2px align-center"
                                    >
                                        {
                                            item.level === 1
                                                ? <img
                                                    style={{ width: "3.4375rem", height: 'auto', marginTop: '0rem', marginLeft: '-0.1rem' }} src={Rank1} alt="" />
                                                : item.level === 2
                                                    ? <img style={{ width: "3.4375rem", height: 'auto', marginTop: '0rem', marginLeft: '-0.2rem' }} src={Rank2} alt="" />
                                                    : item.level === 3
                                                        ? <img style={{ width: "3.1875rem", height: 'auto', marginTop: '0.2rem' }} src={Rank3} alt="" />
                                                        : item.level === 4
                                                            ? <img style={{ width: "3.8125rem", height: 'auto', marginTop: '0rem', marginLeft: '-0.3rem', marginRight: '-0.2rem' }} src={Rank4} alt="" />
                                                            : <img style={{ width: "3.8125rem", height: 'auto', marginTop: '0rem', marginLeft: '-0.2rem', marginRight: '-0.2rem' }} src={Rank5} alt="" />
                                        }
                                        <p className='flex items-center text-gray-r7b7b7b' style={{
                                            margin: 0, fontSize: '2.61875rem', marginLeft: '0.89rem', letterSpacing: '-0.06rem', marginTop: '0.3rem',
                                            whiteSpace: 'nowrap',
                                            maxWidth: '31.5rem',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{item.author}</p>
                                        <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1rem', background: '#929292' }} className='bg-gray-c5c5c5'></div>
                                        {item.type === "일반" && (
                                            <div style={{ fontSize: '2.61875rem', fontFamily: 'SpoqaHanSansNeo', marginLeft: '-0.1rem', letterSpacing: '-0.059rem' }} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                                {item.time}
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <>
            <div
                // className="w-full"
                className='button-card'
            >

                <div className='div-2'
                // style={{ borderRadius: "1em", margin: '1.875rem' }} className="shadow-subNavbar overflow-hidden"
                // style={{}}
                >

                    <div className='div-3'
                    // style={{ background: 'green', borderRadius: '1.3rem'}}
                    // className="flex flex-col w-full"
                    >
                        <InboxList items={cellArray} />
                    </div>
                </div>


                <div
                    // style={{ margin: 'auto', marginTop: '3.7rem', marginBottom: '3.75rem', width: 'fit-content' }} 
                    className='button-class-div shadow-to-box'
                >
                    <button className='button-class hover'
                        // style={{ width: '36.4375rem', height: '7.3125rem',border: '0.1875rem solid', padding: '0', borderRadius: '1rem' }}
                        onClick={() => navigate('/freeboard/compose')}
                    //  className="flex items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                    >
                        <div
                            style={{ marginTop: '0.2rem' }}
                        // className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer"
                        >
                            <span
                                className='shadow-to-text'
                                style={{ color: '#d6f3ff'}}
                            // style={{ fontSize: "2.8125rem" }} className="font-spoqaMedium tracking-tight text-white"
                            >작성하기</span>
                        </div>
                    </button>
                </div>


                <div
                    style={{ marginBottom: '3.75rem', display: 'flex', justifyContent: 'center' }}
                    className="flex w-full justify-center"
                >
                    <Pagination withMarginBottom={false} page={page} setPage={setPage} />
                </div>

                <Search />

            </div>
        </>
    )
}

export default FreeBoardMain
