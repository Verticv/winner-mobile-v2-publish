import React from 'react'
import PopupControls from '../popups/PopupControls';
// import LiveCasinoHistoryDetailPopup from '../myPage/popups/LiveCasinoHistoryDetailPopup';
// import UploadIcon from '../../images/newImages/upload.png'

const HistoryTable = ({
    isPopup,
    tableData,
    checkedState,
    isCouponUsage = false,
    setCheckedState,
    isPopupOpen,
    wrapButtonText = false,
    setPopupOpen,
    cardHeight = '33.75rem',
    isButtonGradient = true,
    hasLeftInput = true,
    wideDetailButton = false,
    hasButton = true,
    containerBackground
}) => {

    function Cells({ cards }) {
        const detailButton = (
            <button style={{ width: '10.875rem', height: '10.875rem' }} className="common-button flex items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75">
                <div className="flex w-full h-full items-center justify-center flex-wrap bg-black rounded-2xl p-10 border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span style={{ fontSize: '2.7rem', lineHeight: '1.1' }} className="w-full font-font-spoqaMedium tracking-tight text-white">상세 보기</span>
                </div>
            </button>
        )

        const wideDetailButtonComponent = (
            <button style={{ width: '20.25rem', height: '14.0625rem' }} className="common-button flex items-center justify-center rounded-3xl bg-orange-d43712 hover:opacity-75">
                <div className="flex w-full h-full items-center justify-center flex-wrap bg-black rounded-3xl p-10 border border-orange-f07a5f bg-gradient-to-b from-orange-f4603d to-orange-e9451e cursor-pointer">
                    <span style={{ fontSize: '2.7rem', lineHeight: '1.1' }} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px">사용하기</span>
                </div>
            </button>
        )

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        };

        return cards.map((card, index) => (
            <div style={{
                height: cardHeight, width: `${!hasButton ? '73.875rem' : ''}`,
                padding: '0.1875rem',
                marginTop: `${index ? '0' : '1.875rem'}`,
                margin: '1.875rem',
                // background: `${containerBackground && index % 2 ? containerBackground : ''}`,
                background: 'linear-gradient(to top, #1f1f1e, #3b3b3b 50%, #4a4a4a)',
                // margin: 'auto'
                boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.6)',
                borderRadius: '1rem',
                position: 'relative'
            }} className="p-12 bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd flex items-center justify-between shadow-subNavbar rounded-2xl">
                <div style={{ borderRadius: '1rem', width: '100%', height: '100%', background: `${containerBackground && index % 2 ? '#2e2e2e' : '#323232'}`, paddingRight: '1.875rem', padding: '2.125rem', paddingLeft: '2.7rem', paddingTop: hasLeftInput ? '3.3rem' : '2rem', display: 'flex', alignItems: 'center' }} className="flex flex-wrap items-center w-full h-full">
                    {hasLeftInput && (
                        <div style={{ width: '5.8125rem', position: 'relative', marginRight: '-0.15rem', marginTop: '-0.2rem' }} className="relative text-left">
                            <label className="form-control">
                                <input
                                    className='w-12 h-12'
                                    type="checkbox"
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                            </label>
                        </div>
                    )}
                    <div style={{ width: wideDetailButton ? '' : '52rem', lineHeight: '1.45' }}>
                        {card.map((row, index) => {
                            let firstColumnColor = '#7b7b7b';
                            let secondColumnColor = '#c8c8c8';
                            if (row[0]) {
                                const firstRowKeysName = Object.keys(row[0])
                                const secondRowKeysName = Object.keys(row?.[1] || {})
                                if (firstRowKeysName[0] === '적중/손실금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#d52e2e" : "#7b7b7b"
                                }
                                if (firstRowKeysName[0] === '상태') {
                                    firstColumnColor = row[0][firstRowKeysName[0]] === '승' ? "#d52e2e" : "#7b7b7b"
                                }
                                if (firstRowKeysName[0] === '보너스금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#d52e2e" : "#7b7b7b"
                                }
                                if (firstRowKeysName[0] === '금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#d52e2e" : row[0][firstRowKeysName[0]].includes("-") ? '#0056a6' : "#7b7b7b"
                                }
                                if (secondRowKeysName[0] === '적립포인트') {
                                    secondColumnColor = '#0056a6'
                                }
                                if (firstRowKeysName[0] === '쿠폰금액') {
                                    firstColumnColor = '#d52e2e'
                                }
                                if (firstRowKeysName[0] === '처리상태') {
                                    firstColumnColor = row[0][firstRowKeysName[0]] === '사용가능' ? "#c65337" : "#7b7b7b"
                                }
                                return (
                                    <div key={index} style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginBottom: '0.375rem', color: firstColumnColor, letterSpacing: '-0.07rem', marginLeft: '0.15rem' }} className="w-full font-spoqa text-left text-gray-r7b7b7b">
                                        <span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.624375rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium' }}>{firstRowKeysName[0]} : </span>
                                        <span className='font-spoqa' style={{ fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8' }}>
                                            {row[0][firstRowKeysName[0]]}
                                        </span>
                                        {secondRowKeysName?.length > 0 && <><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.624375rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '3.725rem' }}>{secondRowKeysName[0]} : </span><span style={{ fontFamily: 'SpoqaHanSansNeo', color: secondColumnColor }} className='text-blue-r0056a6'> {row[1][secondRowKeysName[0]]}</span></>}
                                    </div>
                                )
                            }
                            return <></>

                        })}
                    </div>
                </div>
                {
                    isButtonGradient ?
                        hasButton && (
                            <div className="text-center">
                                {isPopup ? (
                                    <button
                                        style={{ width: '9rem', height: '9rem', padding: '1px', }}
                                        className="flex items-center bg-blue-r286fce justify-center rounded-2xl hover:opacity-75"
                                    >
                                        <div className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl border border-blue-r70a8f5 bg-gradient-to-b from-blue-r1491fc to-blue-r0675db cursor-pointer">
                                            {/* <img style={{width: '3.1875rem', height: '3.25rem'}} className="object-contain" src={UploadIcon} alt="" /> */}
                                        </div>
                                    </button>
                                ) : (
                                    <>
                                        {!isCouponUsage ? (
                                            <PopupControls isNotFullScreen buttonChild={wideDetailButton ? wideDetailButtonComponent : detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                                {/* <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} /> */}
                                            </PopupControls>
                                        ) : (
                                            <>{wideDetailButtonComponent}</>
                                        )}
                                    </>
                                )}
                            </div>
                        ) : hasButton &&
                        <button style={{ width: '10.875rem', height: '10.875rem', backgroundColor: card[card.length - 1].buttonColor || 'red', position: 'absolute', top: '7.56rem', right: '1.9rem', borderRadius: '1.1rem', boxShadow: '0px 6px 0px 0px rgb(0 0 0 / 60%)' }} className="common-button flex items-center justify-center rounded-2xl hover:opacity-75">
                            {console.log('aaaaaaa', card[card.length - 1].buttonColor)}
                            <div style={{ padding: `${wrapButtonText ? '2.2rem 2rem 2rem 2.1rem' : ''}` }} className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl cursor-pointer">
                                <span style={{ fontSize: '2.7rem', lineHeight: '1.25', width: '10.875rem', marginTop: '0.2375rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffd2d2' }} className="w-full -mt-2 font-font-spoqaMedium tracking-tight text-white"> {card[card.length - 1].buttonColor === '#0056a6' ? <div> {card[card.length - 1].buttonText ? card[card.length - 1].buttonText : <><p>정산</p> <p>완료</p></>} </div> : card[card.length - 1].buttonText || '진행중'} </span>
                            </div>
                        </button>
                }
            </div >
        ))
    }
    return (
        <div style={{ borderRadius: "1em" }} className="overflow-hidden">
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells cards={tableData} />
            </div>
        </div>
    )
}

export default HistoryTable