/* eslint-disable */
import React from 'react'
import WinnerSmall from '../../assets/logo.png'
import Sample from '../../assets/myPage/freeboard/sample.png'
import { useNavigate } from 'react-router-dom';
import Rank1 from '../../assets/myPage/freeboard/1.png';
import Rank2 from '../../assets/myPage/freeboard/2.png';
import Rank3 from '../../assets/myPage/freeboard/3.png';
import Rank4 from '../../assets/myPage/freeboard/4.png';
import Rank5 from '../../assets/myPage/freeboard/5.png';
import ReplyArrow from '../../assets/myPage/freeboard/reply.png'

const FreeBoardView = () => {

    const SendMessage = ({ placeholder, buttonText }) => {
        return (
            <div style={{ height: "17.4375rem", borderRadius: "1.625rem", marginTop: '-0.4rem', fontSize: '2.8125rem', borderWidth: '0.1875rem', display: 'flex', position: 'relative' }} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">

                <textarea
                    style={{ border: '0', width: "60.9375rem", padding: '3.3rem 4rem 3.5625rem 3.89rem', resize: "none", lineHeight: '1.32', WebkitTextStroke: "0.2px", borderRadius: '0.7rem', background: '#272726' }}
                    className="place-color-grey overflow-hidden outline-none w-full font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                    placeholder={placeholder}
                    onFocus={() => {
                        const menu = document.querySelector('#main-menu');
                        menu.style.marginBottom = '-14.075rem'
                    }}
                    onBlur={() => {
                        const menu = document.querySelector('#main-menu');
                        menu.style.marginBottom = '0'
                    }}
                />

                <button style={{ borderRadius: "0.625rem", width: '10.5625rem', padding: '0.1875rem', position: 'absolute', right: '0', height: '99%', background: 'linear-gradient(to top, #223349, #415a77 50%, #5e7fa4 )' }} className="right-0 absolute flex items-center justify-center h-full bg-blue-r013d74 hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #27415e, #305176 50%, #305176)', borderRadius: "0.625rem", color: '#d6f3ff', fontSize: '2.811875rem', fontFamily: 'SpoqaHanSansNeoMedium', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ borderRadius: "1.625rem" }} className="flex items-center justify-center h-full w-full bg-black rounded-xl border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">{buttonText}</span>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

    const navigate = useNavigate();

    const ReplyCell = ({
        text = "이벤트 참여 감사합니다.",
        rank = 1,
        username = "쇼유",
        isEdit = false,
        tag = null,
        isOneButton = false
    }) => (
        <div style={{ paddingTop: '2.251rem' }} className="w-full">
            <div className="w-full items-center flex justify-between" style={{ marginTop: '-1.8rem', height: '5.8rem' }}>
                <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>
                    <img style={{ width: '2.25625rem', height: '2.25625rem', marginRight: '1.65rem', marginLeft: '-0.2rem' }} src={ReplyArrow} alt="" />
                    <img style={{ width: '3.825rem', height: '4.6375rem', marginRight: '0.6125rem', marginTop: '-0.1rem' }} className='object-contain' src={rank === 1 ? Rank1 : rank === 2 ? Rank2 : rank === 3 ? Rank3 : rank === 4 ? Rank4 : Rank5} alt="" />
                    <p style={{ fontSize: '2.624375rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r585858">{username}</p>
                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1rem', background: '#929292', }} className='bg-gray-c5c5c5'></div>
                    <p style={{ fontSize: '2.25rem', color: '#929292' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                </div>
            </div>
            <div style={{ marginLeft: '3.8rem', marginTop: '2.83rem', height: '8.625rem', borderRadius: '0.8rem', width: '66.15rem', background: '#272726' }} className="">
                <div style={{ borderRadius: "1.625rem", fontSize: '2.8125rem', paddingLeft: '3.6625rem', borderWidth: '0.1875rem', display: 'flex' }} className="h-full w-full bg-white border border-gray-dddddd flex items-center justify-between">
                    <div className="flex font-spoqa" style={{ display: 'flex' }}>
                        {tag && (<p style={{ fontSize: '2.8125rem', color: '#4c98ff', marginRight: '0.8rem' }} className="text-blue-r0056a6 font-spoqa mr-4">@{tag}</p>)}
                        <p style={{ WebkitTextStroke: "0.2px", fontSize: '2.8125rem' }} className="text-gray-r585858 font-spoqa">{text}</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '1.1rem', marginLeft: '3.8rem', display: 'flex', marginBottom: '-0.2rem' }} className='flex'>
                <button style={{ borderRadius: "0.8rem", width: '9.2rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#2e2e2e', color: isOneButton ? '#ccc2b6' : '#ff6945', paddingTop: '0.2rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', border: '0.1875rem solid rgb(59, 59, 59)' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                    <div className={`${isOneButton ? "text-gray-r7b7b7b" : "text-red-d52e2e"} font-spoqaMedium flex items-center justify-center mt-2`}>{isOneButton ? "답글" : "수정"}</div>
                </button>
                {!isOneButton && (
                    <div style={{ borderRadius: "0.8rem", width: '9.26rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#2e2e2e', paddingTop: '0.2rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', border: '0.1875rem solid rgb(59, 59, 59)' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                        <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5" style={{ color: '#ff6945', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>삭제</div>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="freeboard-view">
            <div className="border-div">
                <div className='content' >
                    <div className="first-card">
                        <div
                            className='buttons'
                        >
                            <div
                                className="button"
                            >
                                <span>공지</span>
                            </div>
                            <div
                                style={{ backgroundColor: "#00a1e9" }}
                                className="button"
                            >
                                <span>안내</span>
                            </div>
                        </div>
                        <div className="text">메신저 고객센터 사칭주의</div>
                    </div>

                    <div className="second-card">
                        <img src={WinnerSmall} alt="" />
                        <div
                            // style={{ width: '10.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.4375rem' }} 
                            className='댓글-container'>
                            <div className="댓글">댓글</div>
                            <div className="num-2">2</div>
                        </div>
                    </div>

                    <div style={{ paddingTop: '5.625rem' }} className="bg-white pb-8">

                        <div style={{ padding: '0 1.7rem' }} className="w-full flex justify-center">
                            <img src={Sample} alt="" style={{width: '70.1875rem', height: 'auto'}} />
                        </div>

                        <div style={{ fontSize: '2.8125rem', padding: '1.8125rem 1.875rem' }} className="font-spoqa">
                            <div style={{ fontFamily: 'SpoqaHanSansNeo', fontSize: '2.811875rem', letterSpacing: '-0.07rem', lineHeight: '1.8', marginTop: '-0.5rem', color: '#b4b4b4' }}>이벤트 중 주간 낙첨 포인트 지급은 21년 6월 7일 이후 베팅건 부터 아래와 같이 적용됩니다.</div>
                            <div
                                style={{ color: "#c0392b", margin: '5.7rem 0', fontFamily: 'SpoqaHanSansNeo', fontSize: '2.811875rem', letterSpacing: '-0.07rem' }}
                                className="flex items-center tracking-tight">
                                [낙첨 금액별 쿠폰 금액]
                            </div>
                            <div style={{ marginTop: '6.6125rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                10만원<span style={{ marginLeft: '0.6rem' }}>~</span> <span style={{ marginLeft: '2.2rem', letterSpacing: '-0.07rem' }}>5,000 쿠폰</span>
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                20만원 이상<span style={{ marginLeft: '2.8rem', marginRight: '1.1rem' }}>10,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                30만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 15,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.55rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                50만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 25,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                100만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 50,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.6rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                300만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 150,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '-0.07rem' }} className="flex items-center tracking-tight text-gray-r585858">
                                500만원 이상<span style={{ marginLeft: '2.75rem', marginRight: '1.1rem' }}>낙첨액 5%</span>쿠폰
                            </div>

                            <div style={{ margin: '5.9rem 0 5.1rem', letterSpacing: '-0.07rem', fontSize: '2.8rem', lineHeight: '1.8' }} className="flex items-center tracking-tight text-gray-r585858">
                                * 2021년 5월 31일 ~ 6월 6일 (일요일)까지 배팅 내역은화요일 낙첨금액 5% 쿠폰 발행되며,
                            </div>
                            <div style={{ marginBottom: '1.7rem' }}>
                                <span style={{ color: "#2980b9", letterSpacing: '-0.07rem', lineHeight: '1.8' }}>* 2021년 6월 7일 (월) 이후 베팅에 대한 낙첨쿠폰은 위 기준에 따라 제공<span style={{ letterSpacing: '-0.07rem', color: '#b4b4b4' }}>되오니 참고 부탁 드립니다.</span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="two-buttons">
                <button style={{ background: 'linear-gradient(to top, #4d0a25, #a34f63 50%, #e78694 )' }}>
                    <div className='div-border'
                        style={{ background: 'linear-gradient(to top, #97351d, #bb4c32 50%, #df6345)' }}
                    >
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">수정하기</span>
                        </div>
                    </div>
                </button>
                <button style={{ background: 'linear-gradient(to top, #4d3c0a, #a3814f 50%, #e7b786 )' }}>
                    <div className='div-border' style={{ background: 'linear-gradient(to top, #80603f, #96704a 50%, #a57b52 )', color: '#ffdfbd' }}>
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">삭제하기</span>
                        </div>
                    </div>
                </button>
            </div>


            <div style={{ borderRadius: "1.1875rem", padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #313130 50%, #4a4a4a)', boxShadow: '0px 6px 12px 0px rgb(0 0 0 / 60%)' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{ background: '#323232', padding: '0 1.5rem 1.6rem', width: '100%', height: '100%', borderRadius: "1.1875rem" }}>
                    <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '0.6rem' }}>
                        <p style={{ fontSize: '2.624375rem', color: '#ccc2b6', marginTop: '2.8rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="font-spoqaMedium tracking-tight text-gray-r454545">댓글 작성하기</p>
                        <div style={{
                            width: '10.375rem',
                            height: '4.4375rem',
                            fontSize: '2.4375rem',
                            display: 'flex',
                            marginRight: '-0.4rem',
                            marginLeft: '-3.9rem',
                            borderRadius: '2.4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: "SpoqaHanSansNeoMedium",
                            border: '0.1875rem solid #3b3b3b',
                            marginTop: '0.3rem',
                            background: '#2e2e2e'
                        }} className='flex justify-center mt-3 align-center rounded-full border-b border-gray-b7b7b7'>
                            <div style={{ marginRight: '0.8rem', marginTop: '0.1rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b mt-1">댓글</div>
                            <div style={{ marginTop: '0.1rem', color: '#ff6945', marginLeft: '-0.35rem' }}>2</div>
                        </div>
                    </div>

                    <div style={{ paddingTop: '0.625rem' }}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>

            {/* second */}
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '0.1875rem', background: 'linear-gradient(to top,#1f1f1e, #383838 50%, #4a4a4a )' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{ width: '100%', height: '100%', background: '#323232', borderRadius: '1.1875rem', paddingBottom: '1.8rem' }}>
                    <div style={{ padding: '0 1.7rem', borderBottomWidth: '0.1875rem', background: '#323232', borderTopLeftRadius: "1.1875rem", borderTopRightRadius: "1.1875rem", borderBottom: '0.1875rem solid #252525' }} className="border-b border-gray-dddddd">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.3rem', height: '9rem', letterSpacing: '-0.07rem' }}>
                                <img style={{ width: '3.450625rem', height: '4.436875rem', marginRight: '0.5625rem', marginLeft: '-0.3rem' }} className='object-contain' src={Rank2} alt="" />
                                <p style={{ fontSize: '2.624375rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                                <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1rem', background: '#929292' }} className='bg-gray-c5c5c5'></div>
                                <p style={{ fontSize: '2.25rem', color: '#929292' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                            </div>
                        </div>

                        <div style={{ borderRadius: "0.8rem", WebkitTextStroke: "0.2px", height: '8.5625rem', marginTop: '-2.85rem', marginBottom: '1rem', borderWidth: '0.1875rem', background: '#272726' }} className="w-full h-full bg-white border border-gray-dddddd flex items-center justify-between">
                            <p style={{ fontSize: '2.8125rem', paddingLeft: '3.6875rem', paddingTop: '2.6rem' }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginLeft: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.39rem', marginBottom: '0.95rem', background: '#272726', border: '0.1875rem solid #3b3b3b', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>수정</div>
                            </button>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', background: '#272726', border: '0.1875rem solid #3b3b3b', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>삭제</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.875rem' }}>
                        <ReplyCell rank={5} isOneButton={true} />
                        <ReplyCell rank={2} username="신풍사우나" isEdit={true} text="오전에 발행되나요?" tag="쇼유" />
                    </div>
                </div>
            </div>


            {/* third */}
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.25rem', background: '#323232' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{ padding: '0 1.875rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525' }} className="border-b border-gray-dddddd">
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center" style={{ display: 'flex', color: '#929292', alignItems: 'center', height: '4.85rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.825rem', height: '4.6375rem', marginRight: '0.5625rem', marginLeft: '-0.1rem' }} className='object-contain' src={Rank2} alt="" />
                            <p style={{ fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1rem', background: '#929292' }} className='bg-gray-c5c5c5'></div>
                            <p style={{ fontSize: '2.25rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#929292' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                        </div>
                    </div>

                    <div style={{ borderRadius: "0.625rem", WebkitTextStroke: "0.2px", height: '8.5625rem', marginTop: '2.03rem', marginBottom: '1.1rem', borderWidth: '0.1875rem', display: 'flex', background: '#272726' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                        <p style={{ fontSize: '2.8125rem', marginLeft: '3.6875rem', marginTop: '2.5rem', fontFamily: "SpoqaHanSansNeo" }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                    </div>
                    <div style={{ marginLeft: '-0.2rem' }} className='flex'>
                        <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.39rem', marginBottom: '0.95rem', background: '#272726', border: '0.1875rem solid #3b3b3b', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>수정</div>
                        </button>
                        <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', background: '#272726', border: '0.1875rem solid #3b3b3b', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>삭제</div>
                        </button>
                    </div>
                </div>

                <div style={{ padding: '0 1.875rem', marginTop: '2.4rem', marginBottom: '-0.3rem' }}>
                    <SendMessage placeholder='두개의 이벤트 모두 참여하였습니다.' buttonText='등록' />
                </div>
            </div>

            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.25rem', background: '#323232' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{ padding: '0 1.875rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525' }} className="border-b border-gray-dddddd">
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center" style={{ display: 'flex', color: '#929292', alignItems: 'center', height: '4.85rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.825rem', height: '4.6375rem', marginRight: '0.5625rem', marginLeft: '-0.1rem' }} className='object-contain' src={Rank2} alt="" />
                            <p style={{ fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1rem', background: '#929292' }} className='bg-gray-c5c5c5'></div>
                            <p style={{ fontSize: '2.25rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#929292' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                        </div>
                    </div>

                    <div style={{ borderRadius: "0.625rem", WebkitTextStroke: "0.2px", height: '8.5625rem', marginTop: '2.03rem', marginBottom: '1.1rem', borderWidth: '0.1875rem', display: 'flex', background: '#272726' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                        <p style={{ fontSize: '2.8125rem', marginLeft: '3.6875rem', marginTop: '2.5rem', fontFamily: "SpoqaHanSansNeo" }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                    </div>
                    <div style={{ marginTop: '1.1rem', display: 'flex', marginBottom: '-0.2rem' }} className='flex'>
                        <button style={{ borderRadius: "0.8rem", width: '9.2rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#2e2e2e', color: '#ccc2b6', paddingTop: '0.2rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', border: '0.1875rem solid rgb(59, 59, 59)', marginBottom: '1.1rem' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div>답글</div>
                        </button>
                    </div>
                </div>

                <div style={{ padding: '0 1.875rem', marginTop: '2.4rem', marginBottom: '-0.3rem' }}>
                    <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                </div>
            </div>

            {/* fourth */}
            {/* <div style={{ borderRadius: "3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.25rem' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{ padding: '0 1.875rem', borderBottomWidth: '0.1875rem' }} className="border-b border-gray-dddddd">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                            <img style={{ width: '3.825rem', height: '4.6375rem', marginRight: '0.5625rem' }} className='object-contain' src={Rank2} alt="" />
                            <p style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem' }} className='bg-gray-c5c5c5'></div>
                            <p style={{ fontSize: '2.25rem' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                        </div>
                    </div>

                    <div style={{ borderRadius: "1.625rem", WebkitTextStroke: "0.2px", height: '8.5625rem', marginTop: '2.25rem', marginBottom: '1.1875rem', borderWidth: '0.1875rem' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                        <p style={{ fontSize: '2.8125rem', paddingLeft: '3.0625rem' }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                    </div>
                    <div style={{ marginBottom: '1.125rem' }} className='flex'>
                        <button style={{ borderRadius: "0.8rem", width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.75rem' }} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-gray-r7b7b7b font-spoqaMedium flex items-center justify-center mt-2">답글</div>
                        </button>
                    </div>
                </div>

                <div style={{ padding: '0 1.875rem' }}>
                    <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                </div>
            </div> */}


            <div style={{ marginTop: '3.7rem', paddingBottom: '19.625rem' }} className="w-full flex items-start justify-between">
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem'
                            }}>이전</span>
                        </div>
                    </div>
                </button>
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                            onClick={() => navigate('/freeboard')}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem'
                            }}>목록보기</span>
                        </div>
                    </div>
                </button>

                <button
                    onClick={() => navigate('/freeboard/view2')}
                    style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            onClick={() => navigate('/freeboard/view2')}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem'
                            }}>다음</span>
                        </div>
                    </div>
                </button>

                {/* <button
                    style={{ marginTop: '3.5rem', marginBottom: '19.625rem' }}
                    className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                    onClick={() => navigate('/freeboard')}
                >
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>

                        <div
                            style={{
                                // background: "linear-gradient(to bottom, #585b5e, #303337)",
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem'
                            }}>목록보기</span>
                        </div>
                    </div>
                </button> */}

                {/* <button
                    style={{ height: '7.3125rem', padding: '1px', fontSize: '2.8125rem' }}
                    className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                    onClick={() => navigate('/freeboard/view2')}
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">다음</span>
                    </div>
                </button> */}
            </div>
        </div >
    )
}

export default FreeBoardView;
