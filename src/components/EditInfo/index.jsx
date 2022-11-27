import React, { useState, useEffect } from 'react'
// import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
// import NoticeBanner from '../NoticeBanner'
import HomePageTopBanner from '../HomePageTopBanner'
// import Navbar from 'components/mainPage/Navbar'

const EditInfo = ({ activeButton, setActiveButton }) => {

    const [selectedInput, setSelectedInput] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setActiveButton('/mypage/edit-info')
    }, [setActiveButton]);

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }


    const Title = ({ text }) => (
        <div style={{ width: "24rem", marginRight: '2.7rem', background: '#272726', flexShrink: '0', borderRadius: '0.5rem' }} className="form-Title">
            <div style={{ fontSize: '2.8125rem', color: text === '레벨' ? '#ccc2b6' :'#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', padding: '2.2rem 0 0 1.25rem', letterSpacing: '-0.07rem' }} className="text-gray-r454545 font-spoqaMedium">{text}</div>
            {/* <div style={{ height: '0.1875rem', marginTop: '1.1875rem' }} className="w-full bg-gray-bebebe"></div> */}
        </div>
    )

    return (
        <div className="edit-info">
            {/* <div className="w-full z-30 flex flex-col items-center"> */}
            {/* <NoticeBanner /> */}
            {/* <Navbar /> */}
            <HomePageTopBanner pageTitle='회원정보수정' />
            {/* </div> */}

            <div className="edit-info-content"
            // style={{background: 'red', width: '10rem', height: '10rem'}}
            >

                <div style={{ fontSize: '2.625rem' }} className="flex text-gray-r7c7c7c flex-col items-center justify-center font-spoqaMedium edit-info-text">
                    <div className="flex items-center h-14">
                        <span className="input-with-text">{truncate('louie3louie3louie3louie3', 10, 16 )}</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <span className="flex items-center h-14" style={{ margin: '0.5rem 0 0 0.5rem' }}>아이디와 비밀번호 보안에 신경써주십시오.</span>
                </div>

                <div className='edit-info-form'>
                    <div className="border">
                        <div className="form-section">
                            <Title text="아이디" />
                            <div className="lable-or-input"
                                style={{ borderBottom: selectedInput === 0 ? '0.375rem solid #191817' : '0.375rem solid #191817', overflow: 'hidden' }}
                                onClick={() => setSelectedInput(0)}
                            >
                                <label
                                    // style={{ fontSize: '2.8125rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeo', marginBottom: '1.1875rem', display: 'inline-block' }}
                                    className="text-gray-r585858 font-spoqa" disabled>louie3</label>
                                <div style={{ height: '0.1875rem' }} className={`bg-gray-bebebe w-full`}></div>
                            </div>
                        </div>


                        {/* BREAK */}
                        <div style={{ marginTop: '1.5rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="비밀번호" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 1 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(1)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(0)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(false)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 0 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                            <span className="text-under-input">영문과 숫자 그리고 특수문자(ex. !@#$%^&)를 반드시 포함하여 6~16자로 입력해야 합니다.</span>
                        </div>



                        {/* BREAK */}

                        <div style={{ marginTop: '1.2rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="비밀번호 확인" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 2 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(2)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(1)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(true)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 1 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                        </div>



                        {/* BREAK */}

                        <div style={{ marginTop: '1.5rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="환전비밀번호" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 3 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(3)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(2)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(false)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 2 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                            <span className="text-under-input">영문과 숫자 6~8자로 입력해야 합니다. (특수문자 포함시 변경불가)</span>
                        </div>

                        {/* BREAK */}

                        <div style={{ marginTop: '1rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="환전 비밀번호 확인" />
                                <div className="lable-or-input"
                                style={{ borderBottom: selectedInput === 4 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                onClick={() => setSelectedInput(4)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(3)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(false)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 3 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                        </div>


                        <div style={{ marginTop: '5.125rem' }} className="w-full">


                            <div className="form-section">
                                <Title text="레벨" />
                                <div className="lable-or-input" style={{ height: '10rem', padding: '1.5rem 1.4rem' }}>
                                    <label
                                        style={{ letterSpacing: '-0.02rem' }}
                                        className="text-gray-r585858 font-spoqa ">레벨 LV.1 (점수: 0) /
                                        <br />
                                        다음레벨 LV.2 (점수: 20)</label>
                                    <div style={{ height: '0.1875rem' }} className={`bg-gray-bebebe w-full`}></div>
                                </div>
                            </div>



                            <div style={{ marginTop: '4.1rem' }} className="form-section">
                                <Title text="스포츠" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label
                                        className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }} className={`bg-gray-bebebe w-full`}></div>
                                </div>
                            </div>


                            <div style={{ marginTop: '1.3rem' }} className="form-section">
                                <Title text="카지노" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label
                                        // style={{ fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block' }}
                                        className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }} className={`bg-gray-bebebe w-full`}></div>
                                </div>
                            </div>


                            <div style={{ marginTop: '1.6rem' }} className="form-section">
                                <Title text="슬롯" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label
                                        // style={{ fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block' }}
                                        className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }} className={`bg-gray-bebebe w-full`}></div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.6rem' }} className="form-section">
                                <Title text="미니게임" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label
                                        // style={{ fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block' }}
                                        className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }} className={`bg-gray-bebebe w-full`}></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* <div style={{ marginTop: '3.75rem', marginBottom: '19.625rem' }} className="w-full flex items-center justify-center">
                    <button style={{ width: '36.4375rem', height: '7.3125rem', padding: '1px', fontSize: '2.8125rem' }} className="flex items-center justify-center rounded-2xl bg-brown-r7e3636 hover:opacity-75">
                        <div className="flex items-center justify-center w-full h-full rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">수정하기</span>
                        </div>
                    </button>
                </div> */}

                <div className='button-class-div shadow-to-box hover'>
                    <button className='button-class'>
                        <div style={{ marginTop: '0.2rem' }}>
                            <span className='shadow-to-text'>수정하기</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* <BottomNavbar /> */}
        </div>
    )
}

export default EditInfo
