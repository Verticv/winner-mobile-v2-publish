import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import MobileBg from '../../assets/myInfo/bg.png'
import DownArrowIcon from '../../assets/myInfo/down-arrow-popup.png'
import KakaoLogo from '../../assets/myInfo/kakao.png'
import TelegramLogo from '../../assets/myInfo/telegram.png'
// import DropDownControls from 'components/dropdowns/RegisterDropDownControls'
import Dropdown from '../Dropdown'
import SignedUpPopup from '../SignedUpPopup';
// import img30 from '../../img30.png'
import userName from '../../assets/myInfo/userName.png'
import password from '../../assets/myInfo/password.png'

const AuthenticationPage = ({ isAuthenticated, setAuthenticated }) => {

    const [selectedInput, setSelectedInput] = useState(null)
    const [toSignup, setSignup] = useState(false)
    const [showCompletePopup, setCompletePopup] = useState(false)
    const navigate = useNavigate()

    // useEffect(() => {
    //     const html = document.querySelector('html')
    //     if (toSignup) {
    //         html.style.background = '';
    //     } else {
    //         html.style.background = '#1e1e1e';
    //     }
    // }, [toSignup])

    const banksOptions = [
        "은행선택",
        "KEB하나은행",
        "제주은행",
        "전북은행",
        "우체국",
        "우리은행",
        "외환은행",
        "아메리카",
        "씨티은행",
        "신협",
        "신한은행",
        "수협",
        "새마을금고",
        "상호저축은행",
        "산업은행",
        "부산은행",
        "미즈호",
        "미쓰비시",
        "도이치",
        "대구은행",
        "농협",
        "기업은행",
        "국민은행",
        "광주은행",
        "경남은행",
        "SC제일은행",
        "JP모간",
        "HSBC",
        "ABN암로",
    ];

    const carrierOptions = ["LGU+", "SKT", "KT"]

    // const [selectedCarrier, setSelectedCarrier] = useState("LGU+")
    // const [selectedBank, setSelectedBank] = useState("은행선택")
    // const [isDropdownOpen, setDropdownOpen] = useState(true)


    // const dropDownCellClass = "flex w-full h-40px p-8 bg-white justify-between items-center border-b border-gray-ececec"

    // const carrierButton = (
    //     <div
    //     onFocus={() => setSelectedInput(4)}
    //     onBlur={(e) => setSelectedInput(false)}
    //     className="relative cursor-pointer flex w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-start items-center tracking-minus05" 
    //     >
    //         <label className="w-full group-hover:text-black cursor-pointer text-left">{selectedCarrier}</label>
    //         <img style={{marginRight: '20%', width: '1.5625rem'}} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" /> 
    //     </div>
    // )

    // const bankButton = (
    //     <div
    //     onFocus={() => setSelectedInput(4)}
    //     onBlur={(e) => setSelectedInput(false)}
    //     className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05" 
    //     >
    //         <label className="group-hover:text-black cursor-pointer">{selectedBank}</label>
    //         <img style={{marginRight: '20%', width: '1.5625rem'}} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" /> 
    //     </div>
    // )


    // const carrierDropdown = (
    //     <div className="flex flex-col h-full items-center bg-white rounded-3xl shadow-plain5 text-gray-r393e41 font-spoqaMedium text-5xl">
    //         <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
    //             setSelectedCarrier("SKT")
    //             setDropdownOpen(false)
    //         }}>
    //             <p>SKT</p>
    //             <div>
    //                 <label className="form-control">
    //                     <input
    //                         className='w-12 h-12 radio-input'
    //                         type="radio"
    //                         checked={selectedCarrier === "SKT"}
    //                         name="SKT"
    //                     />
    //                 </label>
    //             </div>
    //         </button>
    //         <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
    //             setSelectedCarrier("KT")
    //             setDropdownOpen(false)
    //         }}>
    //             <p>KT</p>
    //             <div>
    //                 <label className="form-control">
    //                     <input
    //                         className='w-12 h-12 radio-input'
    //                         type="radio"
    //                         checked={selectedCarrier === "KT"}
    //                         name="KT"
    //                     />
    //                 </label>
    //             </div>
    //         </button>
    //         <button style={{height: '6rem', borderBottom: 'none'}} className={dropDownCellClass} onClick={() => {
    //             setSelectedCarrier("LGU+")
    //             setDropdownOpen(false)
    //         }}>
    //             <p>LGU+</p>
    //             <div>
    //                 <label className="form-control">
    //                     <input
    //                         className='w-12 h-12 radio-input'
    //                         type="radio"
    //                         checked={selectedCarrier === "LGU+"}
    //                         name="LGU"
    //                     />
    //                 </label>
    //             </div>
    //         </button>
    //     </div>
    // )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [toSignup])


    return (
        <div className="w-full AuthenticationPage" style={{ background: '', width: '77.625rem', height: '' }}>
            {/* <img src={img28} alt="" style={{ opacity: '0.5', position: 'absolute', top: '0' }} /> */}
            {/* {toSignup === false ? ( */}
            <>
                <img src={MobileBg} alt="" style={{ width: '77.625rem' }} />
                <div className="bg-white w-full z-20 px-44" style={{ background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', zIndex: '0', position: 'absolute', top: '63.4rem', width: '72.552rem', padding: '0.1875rem', margin: '0 2.55rem', borderRadius: '2.25rem' }}>

                    {/* BREAK */}
                    <div className="w-full h-full flex flex-col items-center justify-end pb-10px" style={{ background: 'linear-gradient(to top, #212121, #323231)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5.6rem 7.7rem 0', borderRadius: '2.25rem' }}>

                        <div style={{ fontSize: '4.5rem', marginBottom: "5.9rem", width: '100%', color: '#ad9e8c', fontFamily: 'SpoqaHanSansNeoBold' }} className="w-full mb-12 mt-4 font-spoqaBold text-7xl">환영합니다</div>

                        <div style={{ paddingBottom: "10rem", width: '55.9375rem', height: '9.1875rem' }} className="w-full space-y-12 pb-20">

                            <div className="w-full flex flex-col space-y-4px space-x-10px" style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
                                <div className="w-full" style={{ background: '#191817', width: '100%', display: 'flex', alignItems: 'center', borderRadius: '2.5rem', borderBottom: selectedInput === 0 ? '0.375rem solid rgb(166, 124, 82)' : '0.375rem solid #191817' }}>
                                    <img src={userName} alt="" style={{ width: '3.3125rem', margin: '-0.45rem 2.4rem 0 2.55rem', display: 'inline-block' }} />
                                    <input
                                        style={{ height: "9.1875rem", fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.25rem' }}
                                        className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                        placeholder={"아이디"}
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(0)
                                        }}
                                        onBlur={(e) => {
                                            e.target.placeholder = "아이디"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className='h-1.5'>
                                        <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2.375rem', width: '100%', display: 'flex', flexDirection: 'column' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                <div className="w-full" style={{ background: '#191817', width: '100%', display: 'flex', alignItems: 'center', borderRadius: '2.5rem', borderBottom: selectedInput === 1 ? '0.375rem solid rgb(166, 124, 82)' : '0.375rem solid #191817' }}>
                                    <img src={password} alt="" style={{ width: '3.3125rem', margin: '-0.45rem 2.4rem 0 2.55rem', display: 'inline-block' }} />
                                    <input
                                        style={{ height: "9.1875rem", fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.25rem' }}
                                        className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                        placeholder={"비밀번호"}
                                        type="password"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(1)
                                        }}
                                        onBlur={(e) => {
                                            e.target.placeholder = "비밀번호"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className='h-1.5'>
                                        <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={{ paddingBottom: '2.8rem', width: '100%', marginTop: '20.4rem', display: 'flex', flexDirection: 'column' }} className="w-full">
                            <div style={{ height: '11.8125rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #4b3b09, #e8b888)', borderRadius: '2rem' }}>
                                <button
                                    style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', borderRadius: '2rem' }}
                                    className="hover shadow-to-box"
                                    onClick={() => {
                                        setAuthenticated(true)
                                        navigate('/main')
                                    }}
                                >
                                    <div style={{ color: "#ffdfbd", fontSize: '3.1875rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                        <p className='mt-1'>로그인</p>
                                    </div>
                                </button>
                            </div>
                            <div style={{ height: '11.8125rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #3f3d37, #a69685)', borderRadius: '2rem' }}>
                                <button
                                    style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #4b4742, #786d62)', borderRadius: '2rem' }}
                                    className="hover shadow-to-box"
                                    onClick={() => setSignup(true)}
                                >
                                    <div style={{ color: "#ffdfbd", fontSize: '3.1875rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                        <p className='mt-1'>회원가입</p>
                                    </div>
                                </button>
                            </div>
                            {/* <button
                                    style={{ height: '11.8125rem' }}
                                    className="w-full rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-5xl  font-spoqaBold text-white hover:opacity-75"
                                    onClick={() => setSignup(true)}
                                >
                                    <p className='mt-1'>회원가입</p>
                                </button> */}
                        </div>

                    </div>
                </div>
            </>
            {/* ) : ( */}
            {toSignup === true ? (
                <div className='bg-register-background bg-repeat-round' style={{ position: 'fixed', top: '0', right: '0', width: '100vw', background: 'rgb(0 0 0 / 30%)', height: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ zIndex: '20', width: '72.75rem', overflowY: 'scroll', background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', marginTop: '2.4rem', padding: '0.1875rem', borderRadius: '2rem' }}>
                        <div style={{ padding: '0 7.6875rem', background: '#323232', width: '100%', height: '104%', borderRadius: '2rem' }} className="w-full h-full z-20">

                            {/* BREAK */}
                            <div className="w-full flex flex-col" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>

                                <label style={{ marginBottom: '7.8rem', fontSize: '4.375rem', marginTop: '11.8125rem', marginLeft: '0.6rem', width: '100%', color: '#ad9e8c', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="text-black font-spoqaMedium tracking-minus05 w-full">회원가입</label>

                                {/* BREAK */}
                                <div style={{ marginBottom: '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 0 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.6rem', marginTop: '1rem' }}>
                                        <input
                                            style={{ letterSpacing: '0' }}
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(0)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            placeholder="louie3"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                {/* BREAK */}
                                {/* <div className="w-full flex flex-col mb-16">
                                    <div className={`${selectedInput === 1 ? "" : ""} w-full space-y-4px mb-5 `}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(1)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            type="password"
                                            placeholder="비밀번호"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div>
                                    <span style={{ color: "#ff3a3a", fontSize: '2.4375rem', lineHeight: '1.2' }} className="m-0 font-spoqaMedium text-gray-bebebe tracking-minus05">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                                </div> */}
                                <div style={{ marginBottom: '1.7rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 1 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(1)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            type="password"
                                            placeholder="비밀번호"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                <span style={{ color: "#e65454", fontSize: '2.4375rem', lineHeight: '1.2', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.4rem', letterSpacing: '-0.015rem', marginBottom: '3rem' }} className="m-0 font-spoqaMedium text-gray-bebebe tracking-minus05">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                                {/* BREAK */}
                                {/* <div style={{ marginBottom: '2.375rem' }} className="w-full flex flex-col space-y-8px">
                                    <div className={`${selectedInput === 2 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(2)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            type="password"
                                            placeholder="환전 비밀번호"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 2 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div>
                                </div> */}
                                <div style={{ marginBottom: '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 2 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                        <input
                                            style={{ letterSpacing: '0' }}
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(2)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            type="password"
                                            placeholder="환전 비밀번호"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                {/* BREAK */}
                                {/* <div style={{ marginBottom: '2.375rem' }} className="w-full flex flex-col space-y-8px">
                                    <div className={`${selectedInput === 3 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(3)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            placeholder="닉네임"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 3 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div>
                                </div> */}
                                <div style={{ marginBottom: '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 3 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(3)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            placeholder="닉네임"
                                            type="password"
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                {/* BREAK */}
                                <div style={{ marginBottom: '0rem', background: '', display: 'flex', justifyContent: 'space-between', padding: '0 0.4rem' }} className="flex space-x-10px w-full">
                                    <div className="w-1/4 flex-shrink-0 space-y-4px h-24">
                                        {/* <DropDownControls className='h-24' buttonChild={carrierButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
                                            {carrierDropdown}
                                        </DropDownControls> */}
                                        <div className="first-dropdown" style={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(238 238 238 / 19%)', alignItems: 'center', position: 'relative' }} >
                                            <Dropdown options={carrierOptions} isSignup={true}>
                                                <img style={{ marginRight: '20%', width: '1.5625rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
                                            </Dropdown>
                                        </div>
                                        <div className={`${selectedInput === 4 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75 mt-5px"} w-full`} />
                                    </div>
                                    {/* <div className={`${selectedInput === 5 ? "space-y-4px" : "space-y-4px"} w-full `} style={{ background: '#eee' }}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                            placeholder="휴대폰번호(숫자만 입력)"
                                            type='number'
                                            pattern="\d*"
                                            onFocus={(e) => {
                                                // e.target.placeholder = ""
                                                setSelectedInput(5)
                                            }}
                                            onBlur={(e) => {
                                                // e.target.placeholder = "휴대폰번호(숫자만 입력)"
                                                setSelectedInput(false)
                                            }}
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 5 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div> */}
                                    <div style={{ marginBottom: '1.5rem', width: '37.75rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 5 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                        <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                            <input
                                                style={{ width: '94%', letterSpacing: '-0.01rem', marginTop: '-0.1rem' }}
                                                className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                                placeholder="휴대폰번호(숫자만 입력)"
                                                type='number'
                                                pattern="\d*"
                                                onFocus={(e) => {
                                                    // e.target.placeholder = ""
                                                    setSelectedInput(5)
                                                }}
                                                onBlur={(e) => {
                                                    // e.target.placeholder = "휴대폰번호(숫자만 입력)"
                                                    setSelectedInput(false)
                                                }}
                                            />
                                            <div className='h-1.5'>
                                                <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* BREAK */}
                                {/* <div style={{ marginBottom: '2.375rem' }} className="flex space-x-10px w-full">
                                    <div className={`${selectedInput === 6 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                            placeholder="가입코드"
                                            onFocus={(e) => {
                                                // e.target.placeholder = ""
                                                setSelectedInput(6)
                                            }}
                                            onBlur={(e) => {
                                                // e.target.placeholder = "가입코드"
                                                setSelectedInput(false)
                                            }}
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 6 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div>
                                </div> */}
                                <div style={{ marginBottom: '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 6 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                            placeholder="가입코드"
                                            onFocus={(e) => {
                                                // e.target.placeholder = ""
                                                setSelectedInput(6)
                                            }}
                                            onBlur={(e) => {
                                                // e.target.placeholder = "가입코드"
                                                setSelectedInput(false)
                                            }}
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                {/* BREAK */}
                                <div style={{ marginBottom: '2.375rem', display: 'flex', justifyContent: 'space-between', padding: '0 0.4rem' }} className="w-full flex flex-col">
                                    <div className="flex flex-col">
                                        <div style={{ marginBottom: '0', display: 'flex' }} className="flex space-x-10px w-full">
                                            <div className="w-1/2 flex-shrink-0 space-y-4px h-24">
                                                {/* <DropDownControls isBank className='h-24' buttonChild={bankButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} >
                    {bankDropdown}
                </DropDownControls> */}
                                                <div
                                                    // onFocus={() => setSelectedInput(4)}
                                                    // onBlur={(e) => setSelectedInput(false)}
                                                    className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05 
                                                    first-dropdown second-dropdown
                                                    "
                                                    style={{
                                                        display: 'flex', justifyContent: 'space-between', background: 'rgb(238 238 238 / 19%)', alignItems: 'center'
                                                        , position: 'relative'
                                                    }}
                                                >
                                                    <Dropdown options={banksOptions} isSignup={true} >
                                                        <img style={{ marginRight: '20%', width: '1.5625rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
                                                    </Dropdown>
                                                </div>
                                                <div className={`${selectedInput === 7 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full mt-5px`} />
                                            </div>
                                            {/* <div className={`${selectedInput === 8 ? "space-y-4px" : "space-y-4px"} w-1/2 `}>
                                                <input
                                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                                    placeholder="예금주"
                                                    onFocus={(e) => {
                                                        // e.target.placeholder = ""
                                                        setSelectedInput(8)
                                                    }}
                                                    onBlur={(e) => {
                                                        // e.target.placeholder = "예금주"
                                                        setSelectedInput(false)
                                                    }}
                                                />
                                                <div className='h-1.5'>
                                                    <div className={`${selectedInput === 8 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                                </div>
                                            </div> */}
                                            <div style={{ marginBottom: '1.5rem', width: '28.7rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 8 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '1.8rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                                <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                                    <input
                                                        className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                                        placeholder="예금주"
                                                        onFocus={(e) => {
                                                            // e.target.placeholder = ""
                                                            setSelectedInput(8)
                                                        }}
                                                        onBlur={(e) => {
                                                            // e.target.placeholder = "예금주"
                                                            setSelectedInput(false)
                                                        }}
                                                    />
                                                    <div className='h-1.5'>
                                                        <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="w-full space-y-4px">
                                            <input
                                                className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                                type='number'
                                                placeholder="계좌번호 (숫자만 입력)"
                                                pattern="\d*"
                                                onFocus={(e) => {
                                                    // e.target.placeholder = ""
                                                    setSelectedInput(9)
                                                }}
                                                onBlur={(e) => {
                                                    // e.target.placeholder = "계좌번호 (숫자만 입력)"
                                                    setSelectedInput(false)
                                                }}
                                            />
                                            <div className='h-1.5'>
                                                <div className={`${selectedInput === 9 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                            </div>
                                        </div> */}
                                        <div style={{ marginBottom: '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 9 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center' }} className="w-full flex flex-col space-y-4px space-x-10px">
                                            <div className='w-full' style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                                <input
                                                    style={{ letterSpacing: '-0.02rem' }}
                                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                                    type='number'
                                                    placeholder="계좌번호(숫자만 입력)"
                                                    pattern="\d*"
                                                    onFocus={(e) => {
                                                        // e.target.placeholder = ""
                                                        setSelectedInput(9)
                                                    }}
                                                    onBlur={(e) => {
                                                        // e.target.placeholder = "계좌번호 (숫자만 입력)"
                                                        setSelectedInput(false)
                                                    }}
                                                />
                                                <div className='h-1.5'>
                                                    <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} style={{ width: '100%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* BREAK */}
                            <div style={{ marginTop: '2.1rem' }} className={`w-full flex flex-col items-center`}>
                                {/* <button
                                    className="mb-32 w-full h-48 rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-5xl  font-spoqaBold text-white hover:opacity-75 pt-2px"
                                    onClick={() => setCompletePopup(true)}
                                >
                                    회원가입
                                </button> */}

                                <div style={{ height: '11.8125rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #4b3b09, #e8b888)', borderRadius: '2rem' }}>
                                    <button
                                        style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', borderRadius: '2rem' }}
                                        className="hover shadow-to-box"
                                        onClick={() => setCompletePopup(true)}
                                    >
                                        <div style={{ color: "#ffdfbd", fontSize: '3.1875rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                            <p className='mt-1'>회원가입</p>
                                        </div>
                                    </button>
                                </div>
                                {/* <div style={{ marginBottom: '11.25rem', marginRight: '-2.8125rem' }} className="flex w-full justify-between items-center h-28">
                                    <div style={{ marginLeft: '-3.25rem', display: 'flex', alignItems: 'center' }} className="flex items-center space-x-2px pr-10px">
                                        <img className="w-40 object-contain" src={KakaoLogo} alt="kakao-icon" />
                                        <span className="text-brown-r351a1e font-roboto text-5xl leading-snug mb-6px tracking-wide">test1234</span>
                                    </div>
                                    <div style={{ marginRight: '1.0625rem' }} className="h-full w-0.5 bg-gray-404040" />
                                    <div className="flex items-center space-x-2px">
                                        <img className="w-40 object-contain" src={TelegramLogo} alt="kakao-icon" />
                                        <span className="text-blue-r2aa1d5 font-roboto text-5xl leading-snug mb-6px tracking-wide">test1234</span>
                                    </div>
                                </div> */}
                                <div style={{ borderBottomRightRadius: '1.1rem', borderBottomLeftRadius: '1.1rem', height: '18.875rem', marginTop: '-6.3rem', paddingTop: '9.3125rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="flex w-full justify-between items-center pt-16 rounded-3xl bg-gray-d9e6f2 ">
                                    <div style={{ marginTop: '-1.3rem', display: 'flex', alignItems: 'center' }} className="flex items-center ml-32">
                                        <img
                                            style={{ width: '7.375rem', margin: '0 1.75rem 0 0' }}
                                            className="object-contain"
                                            src={KakaoLogo}
                                            alt="kakao-icon"
                                        />
                                        <span style={{ marginTop: '', marginLeft: '0.3rem', fontSize: '2.875rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-brown-r351a1e font-roboto text-4xl leading-snug tracking-wide">
                                            test1234
                                        </span>
                                    </div>
                                    <div style={{ height: '6.25rem', width: '0.125rem', marginTop: '-1.3125rem', marginLeft: '0.15rem', background: '#404040' }} className="bg-gray-c1cfdb" />
                                    <div style={{ marginTop: '-1.3rem', marginRight: '0.5rem', display: 'flex', alignItems: 'center' }} className="flex items-center">
                                        <img
                                            style={{ width: '7.5rem' }}
                                            className="object-contain"
                                            src={TelegramLogo}
                                            alt="kakao-icon"
                                        />
                                        <span style={{ marginTop: '', marginLeft: '1.8375rem', fontSize: '2.875rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-blue-r2aa1d5 font-roboto text-4xl leading-snug tracking-wide">
                                            test1234
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>) : (<></>)
            }

            {/* )} */}

            {
                showCompletePopup === true && (
                    <div className=' flex w-screen h-screen bg-black bg-opacity-60 z-50 top-0 fixed justify-center items-center px-12' style={{ position: 'fixed', top: '0', right: '0', width: '100vw', background: 'rgba(0, 0, 0, 0.5)', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SignedUpPopup setCompletePopup={setCompletePopup} setSignup={setSignup} />
                    </div>
                )
            }
        </div >
    )
}

export default AuthenticationPage
