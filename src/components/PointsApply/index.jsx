import React, { useState, useEffect } from 'react'
import PopupControls from '../popups/PopupControls';
import PointsApplyPopup from '../popups/PointsApplyPopup';
import WarningMessage from '../WarningMessage'
// import img18 from '../../img16.png'

const PointsApply = () => {
    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)
    var nf = new Intl.NumberFormat();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const detailButton = (
        <div
            className='shadow-to-box'
            style={{ width: "36.4375rem", height: '7.3125rem', marginLeft: '18.7rem', borderRadius: '1rem', padding: '0.1875rem', marginBottom: '1.6rem', background: 'linear-gradient(to top, #3e4c8e, #679ac0 50%, #87d8e7 )', marginTop: '3.6rem' }}>
            <button

                style={{ width: "100%", height: '100%', marginBottom: '1.5625rem', background: 'linear-gradient(to top, #3a6186, #4676a8 50%, #518aca)', borderRadius: '1rem' }}
                className="hover"
            >
                <div style={{ borderColor: "#ff8f63" }} className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer">
                    <span style={{ fontSize: '2.8125rem', color: '#ffdfbd', display: 'inline-block', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.5rem', marginLeft: '0.2rem' }} className='shadow-to-text'>신청하기</span>
                </div>
            </button>
        </div>
    )

    const Title = ({ text }) => (
        <div style={{ width: "22.9rem", marginRight: '1.8rem', background: '#272726', flexShrink: '0', borderRadius: '0.5rem' }} className="form-Title">
            <div style={{ fontSize: '2.8125rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', padding: '1.6rem 0px 0px 1.2rem', letterSpacing: '-0.25rem' }} className="text-gray-r454545 font-spoqaMedium">{text}</div>
            {/* <div style={{ height: '0.1875rem', marginTop: '1.1875rem' }} className="w-full bg-gray-bebebe"></div> */}
        </div>
    )

    return (
        <div style={{ padding: '1.875rem', paddingTop: '1rem' }} className="flex flex-col items-center">

            <WarningMessage
                title='확인 / 필독사항'
                message1='포인트 전환 시 보유머니로 충전됩니다.'
                mr1='13.5rem'
                message2='최소 10,000P 이상 신청 가능합니다.'
                mr2='6.875rem'
                message3='자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.'
            />
            <div style={{ padding: '0.1875rem', paddingBottom: '0.1875rem', marginTop: '1.875rem', background: 'linear-gradient(to top, #1f1f1e, #333332 50%, #4a4a4a)', borderRadius: '1.3rem' }}>
                <div style={{ padding: '0.9rem 1rem 0 0.8rem', background: '#323232', borderRadius: '1.2rem' }} className="w-full rounded-2xl shadow-subNavbar">
                    <div style={{ padding: '1.4rem 2.0625rem 1.2rem', background: '#252525', border: '0.1875rem solid #404040', borderRadius: '0.5rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', }} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9">
                        <div
                            style={{ fontSize: '2.8125rem', color: '#ffdfbd', marginLeft: '-0.4rem' }}
                            className="font-spoqaMedium tracking-tight text-gray-r393e41 flex items-center"
                        >
                            전환 포인트 입력
                        </div>
                        <div
                            style={{ fontSize: '2.625rem', marginRight: '4rem', marginTop: '0.8rem', marginLeft: '-0.4rem' }}
                            className="font-spoqa tracking-tight text-gray-r7c7c7c flex items-center"
                        >
                            <span style={{ fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8', lineHeight: '1.4' }}>현재 포인트가 보유머니로 전환되며, 최소<span style={{ color: '#4c98ff', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '0' }}> 10,000</span>P부터 신청 가능합니다.</span>
                        </div>

                    </div>

                    <div style={{ marginTop: '1.7rem', padding: '0px 1rem', letterSpacing: '-0.25rem' }} className="flex flex-col">
                        <div className="form-section">
                            <Title text="현재 잔여 포인트" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858">
                                    <span style={{ color: '#4c98ff', fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoBold' }}>278</span>P
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem' }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.55rem' }} className="form-section">
                            <Title text="전환 예정 포인트" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858">
                                    <span style={{ fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoBold' }}>0</span>P
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem' }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.55rem' }} className="form-section">
                            <Title text="전환 후 잔여 포인트" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858">
                                    <span style={{ fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoBold' }}>0</span>P
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem' }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.55rem' }} className="form-section">
                            <Title text="전환 포인트 입력" />
                            <div className="lable-or-input" style={{ paddingLeft: '1rem', paddingTop: '2.3rem' }}>
                                <input
                                    className="w-full font-spoqa text-gray-r585858 outline-none placeholder-gray-bebebe"
                                    style={{ fontSize: '2.625rem', marginBottom: '0.9375rem', letterSpacing: '-0.1rem' }}
                                    placeholder="직접 입력시 숫자만 입력해 주세요."
                                    value={inputValue !== null ? nf.format(inputValue) : ""}
                                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                    onFocus={() => {
                                        const menu = document.querySelector('#main-menu');
                                        menu.style.marginBottom = '-14.075rem'
                                        setInputClicked(true)
                                    }}
                                    onBlur={() => {
                                        const menu = document.querySelector('#main-menu');
                                        menu.style.marginBottom = '0'
                                        setInputClicked(false)
                                    }}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    type="tel"
                                />
                                <div style={{ height: '0.1875rem' }} className={`${inputClicked ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                    </div>


                    {/* <div style={{ marginTop: '1.875rem', marginBottom: '0', padding: '0px 1.125rem' }} className="">
                        <div style={{ marginBottom: '0.9375rem' }} className="flex w-full h-full items-center justify-between">
                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 1000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">1천P</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 5000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">5천P</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 10000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">1만P</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r2068b2 hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 50000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">5만P</span>
                                </div>
                            </button>
                        </div>

                        <div className="flex w-full h-full items-center justify-between">
                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 100000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white pt-1">10만P</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 500000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white pt-1">50만P</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 1000000)}
                            >
                                <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white pt-1">100만P</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                                onClick={() => setInputValue(0)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white pt-1">정정</span>
                                </div>
                            </button>
                        </div>

                    </div> */}
                    <div className="range-btn">
                        <div className="f-div">
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    // style={{  }}
                                    // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                    onClick={() => setInputValue(inputValue + 1000)}
                                >
                                    <div className="s-div">
                                        <span>1천P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                    // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                    onClick={() => setInputValue(inputValue + 5000)}
                                >
                                    <div
                                        className="s-div"
                                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                                    >
                                        <span>5천P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                    // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                    onClick={() => setInputValue(inputValue + 10000)}
                                >
                                    <div className="s-div">
                                        <span className="font-spoqaMedium tracking-tight text-white">1만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 50000)}
                                >
                                    <div
                                        className="s-div"
                                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                                    >
                                        <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">5만P</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="f-div">
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    // style={{  }}
                                    // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                    onClick={() => setInputValue(inputValue + 100000)}
                                >
                                    <div className="s-div">
                                        <span>10만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                    // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                    onClick={() => setInputValue(inputValue + 500000)}
                                >
                                    <div
                                        className="s-div"
                                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                                    >
                                        <span>50만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                    // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                    onClick={() => setInputValue(inputValue + 1000000)}
                                >
                                    <div className="s-div">
                                        <span className="font-spoqaMedium tracking-tight text-white">100만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border' style={{ background: 'linear-gradient(to top, #4d3c0a, #b08b5a 50%, #e7b786)' }}>
                                <button
                                    className="hover"
                                    style={{ background: 'linear-gradient(to top, #80603f, #956f4a 50%, #a57b52)' }}
                                    onClick={() => setInputValue(0)}
                                >
                                    <div
                                        className="s-div"
                                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                                    >
                                        <span style={{ paddingRight: '0' }}>정정</span>
                                    </div>
                                </button>
                            </div>
                        </div>




                        {/* <div className="f-div">
                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 300000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">30만원</span>
                            </div>
                        </button>

                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 500000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">50만원</span>
                            </div>
                        </button>

                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 1000000)}
                        >
                            <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">100만원</span>
                            </div>
                        </button>

                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                            onClick={() => setInputValue(0)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-white">정정</span>
                            </div>
                        </button>
                    </div> */}

                    </div>

                </div>

            </div>
            {/* use PupUp here */}
            <div className='pop-up' style={{ paddingBottom: '15rem' }}>
                <PopupControls isNotFullScreen buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    {/* <img src={img18} alt='' style={{ position: 'absolute', top: '0', opacity: '0.52' }} /> */}
                    <div style={{
                        background: '#000000cc', width: '100vw', height: '100vh', transform: 'translate(-50%)', left: '50%',
                        position: 'fixed', margin: 'auto', display: 'flex', justifyContent: 'center'
                    }}>
                        <PointsApplyPopup setPopupOpen={setPopupOpen} />
                    </div>

                </PopupControls>
            </div>

        </div >
    )
}

// background: red;
// width: 100vw;
// height: 100vh;
// transform: translate(-50 %);
// left: 86 %;
// position: fixed;
// margin: auto;
// /* top: 0; */
// right: 50 %;
// display: flex;
// justify - content: center;
// .BG {
//     background-image: url("BG.png");
//     opacity: 0.8;
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     width: 1242px;
//     height: 2528px;
//     z-index: 117;
//   }

export default PointsApply
