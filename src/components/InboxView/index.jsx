import React from 'react'
import { useNavigate } from 'react-router'
import WinnerSmall from '../../assets/logo.png'
import Header from '../Header'
// import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../HomePageTopBanner'
// import Navbar from 'components/mainPage/Navbar'
import NavBottom from '../NavBottom'


const InboxView = () => {

    const SubtitleText = "정기 점검 안내"
    const BodyText = "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다. \n 금일 정기 점검이예정되어 안내드리오니 참고 후 이용 부탁드립니다. \n 점검 내용 : 정기 점검 \n 시작 시간 : 2021년 05월 10일 14:00 \n 종료 시간 : 2021년 05년 10일 17:00 \n 점검은 상황에 따라 조기 종료 혹은 지연 될 수 있습니다. \n 최대한 빠른 정상화를 위해 노력하겠습니다.\n 추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 몬의하시면 24시간 항상 친절하게 안내 도움드리겠습니다/ \n 앞으로 많은 이용 부탁드립니다. \n 감사합니다."
    const FooterText = "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com"

    const navigate = useNavigate();
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    return (
        <div className="w-full">

            <div className="w-full z-30 flex flex-col items-center">
                <Header />
                <HomePageTopBanner pageTitle='쪽지관리' toPath='/mypage/inbox' />
            </div>

            <div className='shadow-to-box' style={{ margin: '1.875rem', padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #2f2f2e 50%, #4a4a4a)', borderRadius: '1rem', marginTop: '0' }}>
                <div style={{ fontFamily: "SpoqaHanSansNeoMedium", color: '#FFF', width: '100%', height: '100%', background: '#323232', borderRadius: '1rem' }} className="rounded-2xl overflow-hidden shadow-subNavbar border border-gray-dddddd mt-20px">
                    {/* TITLE */}
                    <div style={{ borderBottom: '0.1875rem solid #252525', display: 'flex', flexWrap: 'wrap', alignItems: 'center', background: '#2e2e2e', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', padding: '0 2rem' }} className="bg-gray-fafafa border-b border-gray-dddddd flex flex-wrap  items-center">
                        <div style={{ margin: '2.0625rem 0', display: 'flex', width: '100%', justifyContent: 'center' }} className='flex w-full justify-center'>
                            <div
                                style={{
                                    backgroundColor: "#00a1e9", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', width: 'fit-content',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem',
                                    borderRadius: '3rem',
                                }}
                                className="rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                            >

                                {truncate('안내', 6, 6)}
                            </div>
                        </div>
                        <div style={{ marginBottom: '1.3125rem', display: 'flex', justifyContent: 'center', width: '100%', fontSize: '2.999375rem' }} className="flex justify-center text-5xl w-full font-spoqaMedium tracking-tight text-gray-r454545">
                            서버 점검 안내
                            <div style={{
                                width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem',
                                // marginTop: '-0.3rem',
                                background: '#e9441d',
                                fontFamily: "RobotoMedium",
                                // fontSize: '2.4375rem',
                                padding: '0.132rem 0.735rem',
                                margin: '0',
                                marginTop: '0.1rem',
                                marginLeft: '1rem',
                                borderRadius: '0.77rem',
                                color: '#fff',
                            }} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 pt-px">
                                N
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '7.3125rem', padding: '1.4375rem 1.875rem', borderBottom: '0.1875rem solid #252525', display: 'flex', alignItems: 'center', color: '#929292', background: '#2e2e2e' }} className="bg-gray-fafafa border-b border-gray-dddddd flex items-center">
                        <img style={{ width: '12.0625rem' }} className="w-56 object-contain" src={WinnerSmall} alt="" />
                        <div className='flex mt-2' style={{ display: 'flex' }}>
                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem', background: '#929292' }} className='bg-gray-dddddd'></div>
                            <p style={{ fontSize: '2.25rem' }} className="text-gray-r7b7b7b tracking-tight font-spoqa">2021.06.28 15:36</p>
                        </div>
                    </div>

                    <div style={{ fontSize: '2.8125rem', paddingTop: '4.875rem', paddingBottom: '4.875rem', paddingRight: '2.8125rem', paddingLeft: '2.8125rem' }} className="w-full bg-white flex flex-col px-8 border-b border-gray-dddddd">
                        <p style={{ marginBottom: '5.875rem' }} className="font-spoqaMedium tracking-tight text-gray-r585858 ">
                            {SubtitleText}
                        </p>
                        <p className="font-spoqaMedium tracking-tight text-gray-r585858">
                            {BodyText.split('\n').map((item, i) =>
                                <p style={{ marginBottom: '5.875rem' }} key={i} className="flex items-center">{item}</p>
                            )}
                        </p>
                        <p className="font-spoqaMedium tracking-tight text-gray-r585858">
                            {FooterText.split('\n').map((item, i) =>
                                <p key={i} className="flex items-center">{item}</p>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ margin: '3.6rem 1.86rem', paddingBottom: '19.225rem' }} className="w-full flex items-start justify-between">
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="hover shadow-to-box">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem', display: 'flex', marginTop: '0.49rem'
                            }}>이전</span>
                        </div>
                    </div>
                </button>
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="hover shadow-to-box">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                            onClick={() => navigate('/cscenter/all/contact/all')}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem', display: 'flex', marginTop: '0.49rem'
                            }}>목록보기</span>
                        </div>
                    </div>
                </button>

                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="hover shadow-to-box">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}

                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '0.3rem', display: 'flex', marginTop: '0.49rem'
                            }}>다음</span>
                        </div>
                    </div>
                </button>
            </div>
            <NavBottom />
        </div>
    )
}

export default InboxView
