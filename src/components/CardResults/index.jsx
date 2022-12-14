import React from 'react';
import UpIcon from '../../assets/up-red.png'
import DownIcon from '../../assets/blue-down.png'

const CardResults = ({
    bet,
    result,
    score,
    team1,
    team2,
    stat1,
    stat2,
    stat3,
    isAttached = false,
    hasUp,
    hasDown = false,
    smallCard = false,
    withoutRadius,
    smallContent = false,
    isMinigame = false,
    shouldTruncate = true.valueOf,
    secondCard,
    withTopBorder,
    width92,
    isFreeboard
}) => {

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    if (isMinigame === true) return (
        <div style={{ borderBottomLeftRadius: withoutRadius ? '' : '0.5rem', borderBottomRightRadius: withoutRadius ? '' : '0.5rem', display: 'flex', alignItems: 'center', marginTop: withTopBorder ? '0.7rem' : '0.8rem', borderTop: withTopBorder ? '0.1875rem solid #252525' : '', paddingTop: withTopBorder ? '0.6rem' : '' }} className={`${withoutRadius && "border-b"} flex items-center w-full p-3 pr-0 bg-gray-fefefe shadow-plain11`}>

            <div style={{ marginLeft: '1.1rem', fontSize: '2.625rem', fontFamily: 'RobotoMedium', marginRight: '1rem' }} className="flex px-5 font-spoqaMedium justify-center tracking-tight text-center">
                <div
                    style={{ marginRight: isAttached && "5px", fontSize: '2.5rem' }}
                    className={`text-gray-r454545 font-spoqaMedium `}
                >
                    <p style={{ marginTop: "2.2rem", }} className='text-gray-subNavbar font-roboto'>{score}</p>
                </div>
            </div>
            <div className="flex w-full justify-end pr-3" style={{ display: 'flex' }}>
                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)',
                    boxShadow: '0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.5)',
                    padding: '0.1875rem', width: smallCard ? '26.875rem' : '26.875rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem;" : "", borderRadius: '0.6rem',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            textShadow: bet === 'left' ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                            background: bet === "left" ? "linear-gradient(to top, rgb(101, 79, 57), rgb(125, 99, 72) 50%, rgb(151, 120, 89))" : "#252525",
                            borderRadius: '0.6rem',
                            color: bet === "left" ? '#ffdfbd' : '#c8c8c8 ',


                        }}
                        className="flex items-center justify-center h-36px rounded-lg bg-gray-dddddd"
                    >
                        <div
                            style={{ paddingLeft: bet === "left" ? '0.7rem' : '0.8rem', letterSpacing: '-0.07rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "left" ? '' : '0.1rem', paddingRight: bet === "left" ? '' : '0.15rem' }}
                            className={`${bet === "left"
                                ? "text-white border-red-f99097 bg-gradient-to-b from-red-ff535f to-red-d7434f"
                                : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f8f8f8 via-gray-ececec to-gray-dfdfdf"} 
                    flex items-center justify-between h-full w-full rounded-lg border bg-gradient-to-b cursor-pointer pr-3.5`
                            }>
                            <span style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', marginTop: '0.1rem' }} className="truncate text-left font-spoqaMedium tracking-tight text-14px mt-1">{shouldTruncate ? truncate(team1, 10, 7) : team1}</span>
                            <div className="flex items-center" style={{ width: '7rem', textAlign: 'center' }}>
                                {hasUp && <img style={{ marginRight: '0.4375rem', width: '2rem', height: '1.75rem' }} className="object-contain w-8 h-7" src={UpIcon} alt="" />}
                                <span style={{ fontSize: '2.625rem', fontFamily: 'RobotoMedium', marginRight: '0.3rem' }} className="font-roboto tracking-tight text-14px mt-1">{stat1}</span>
                            </div>
                        </div>
                    </button>
                </div>

                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '10rem' : '10rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem;" : "", borderRadius: '0.6rem',
                    boxShadow: '0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.5)',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: bet === "left" ? "#252525" : "#252525",
                            borderRadius: '0.6rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'RobotoMedium',
                            color: bet === "left" ? '#ffdfbd' : '#c8c8c8 ',
                        }}
                        className={`flex group items-center justify-center w-40 rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
                    >
                        <div
                            style={{ paddingLeft: '0rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "middle" ? '' : '0.1rem' }}
                            className={`${bet === "middle"
                                ? "text-white border-red-f99097 bg-gradient-to-b from-red-ff535f to-red-d7434f"
                                : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f8f8f8 via-gray-ececec to-gray-dfdfdf"}
                    pt-px flex items-center justify-center h-full w-full rounded-lg border border-white cursor-pointer pr-3.5`}
                        >
                            <span style={{ fontSize: '2.625rem', color: '#c8c8c8' }} className="font-roboto tracking-tight text-14px">{stat2}</span>
                        </div>
                    </button>
                </div>
                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '25.02rem' : '26.875rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem;" : "", borderRadius: '0.6rem',
                    cursor: 'pointer',
                    boxShadow: '0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.5)',
                }}>
                    <button style={{
                        width: '100%',
                        height: '100%',
                        textShadow: bet === 'right' ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                        background: bet === "right" ? "linear-gradient(to top,  #654f39,  #7d6348 50%, #977859)" : "#252525",
                        borderRadius: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'RobotoMedium',
                        color: bet === "right" ? '#ffdfbd' : '#c8c8c8 '
                    }}
                        className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
                        <div
                            style={{
                                textShadow: bet === "right" ? "rgb(0 0 0) 0rem 0rem rem;" : "",
                                paddingRight: team2?.length > 11 ? '0.2rem' : '0.8rem',
                                paddingLeft: '0.5rem',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                width: '100%',
                                marginTop: bet === "right" ? '0.1rem' : ''
                            }}
                            className={`${bet === "right"
                                ? "text-white border-red-ff7982 bg-gradient-to-b from-red-ff535f to-red-d7434f"
                                : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f8f8f8 via-gray-ececec to-gray-dfdfdf"} 
                    pt-px flex items-center justify-between h-full w-full rounded-lg border border-white cursor-pointer pr-3.5`}
                        >
                            <div className="flex items-center" style={{ width: hasDown ? '9rem' : '6rem', textAlign: 'center' }}>
                                <span style={{ fontSize: '2.625rem' }} className="font-roboto tracking-tight">{stat3}</span>
                                {hasDown && <img style={{ marginLeft: '0.4375rem' }} className="object-contain w-8 h-7" src={DownIcon} alt="" />}
                            </div>
                            <span style={{ fontSize: '2.625rem', maxWidth: smallContent ? '15.6rem' : '15.6rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '1.4rem', letterSpacing: '-0.07rem' }} className="font-spoqaMedium tracking-tight text-right overflow-hidden">{shouldTruncate ? truncate(team2, 10, 7) : team2}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div style={{ borderBottomLeftRadius: withoutRadius ? '' : '0.5rem', borderBottomRightRadius: withoutRadius ? '' : '0.5rem', display: 'flex', alignItems: 'center', height: '8.8rem', padding: '1rem 0.3rem 0.4rem 0.4rem', paddingTop: secondCard ? '0.5rem' : '1rem', marginBottom: secondCard ? '0.05rem' : '', borderTop: secondCard ? '0.1875rem solid #252525' : '', marginTop: secondCard ? '0.5rem' : '' }} className={`flex items-center w-full p-3 pr-0 bg-gray-fefefe shadow-plain11`}>
            <div className="flex" style={{ display: 'flex', width: width92 ? '92%' : '' }} >
                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '26.875rem' : '26.875rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "", borderRadius: '0.6rem',
                    boxShadow: '0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.5)',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            background: bet === "left" ? "linear-gradient(to top, rgb(101, 79, 57), rgb(125, 99, 72) 50%, rgb(151, 120, 89))" : "#252525",
                            borderRadius: '0.6rem',
                            color: bet === "left" ? '#ffdfbd' : '#c8c8c8',
                            textShadow: bet === 'left' ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                            cursor: 'pointer'
                        }}
                        className="flex items-center justify-center h-36px rounded-lg bg-gray-dddddd"
                    >
                        <div
                            style={{
                                paddingLeft: bet === "left" ? '0.7rem' : '0.7rem', letterSpacing: '-0.07rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "left" ? '' : '0.1rem', paddingRight: bet === "left" ? '' : '0.15rem',
                                color: bet === "left" ? '#ffdfbd' : '#c8c8c8',
                            }}
                        >
                            <span style={{
                                fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', marginTop: '0.1rem', whiteSpace: 'nowrap',
                                maxWidth: hasUp ? '15.6rem' : '15.6rem',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>{truncate(team1, 7, 7)}</span>
                            <div style={{ marginRight: '0.6rem' }}>
                                {hasUp && <img style={{ marginRight: '0.4375rem', width: '2rem', height: '1.75rem' }} src={UpIcon} alt="" />}
                                <span style={{ fontSize: '2.625rem', fontFamily: 'RobotoMedium', marginRight: '0.2rem', textAlign: 'right' }}>{stat1}</span>
                            </div>
                        </div>
                    </button>
                </div>

                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '10rem' : '10rem', height: '7.4375rem', marginRight: '0.375rem',
                    borderRadius: '0.6rem',
                    boxShadow: '0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.5)',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            background: bet === "middle" ? "linear-gradient(to top,  #654f39,  #7d6348 50%, #977859)" : "#252525",
                            textShadow: bet === "middle" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                            borderRadius: '0.6rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'RobotoMedium',
                            color: bet === "middle" ? '#ffdfbd' : '#c8c8c8',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ paddingLeft: '0rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "middle" ? '' : '0.1rem' }}>
                            <span style={{ fontSize: '2.625rem' }} className="font-roboto tracking-tight text-14px">{stat2}</span>
                        </div>
                    </button>
                </div>
                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '26.875rem' : '26.875rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "", borderRadius: '0.6rem',
                    boxShadow: '0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.5)',
                }}>
                    <button style={{
                        width: '100%',
                        height: '100%',
                        textShadow: bet === "right" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                        background: bet === "right" ? "linear-gradient(to top,  #654f39,  #7d6348 50%, #977859)" : "#252525",
                        borderRadius: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'RobotoMedium',
                        color: bet === "right" ? '#ffdfbd' : '#c8c8c8'
                    }}>
                        <div
                            style={{
                                textShadow: bet === "right" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                                paddingRight: isFreeboard ? '0.8rem' : team2?.length > 11 ? '0.2rem' : '0.8rem',
                                paddingLeft: '',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                width: '100%',
                                marginTop: bet === "right" ? '0.1rem' : ''
                            }}
                        >
                            <div style={{ marginLeft: '0.6rem' }}>
                                <span style={{ fontSize: '2.625rem', width: '6rem', textAlign: 'center' }} >{stat3}</span>
                                {hasDown && <img style={{ marginLeft: '0.4375rem', width: '2rem' }} src={DownIcon} alt="" />}
                            </div>
                            <span style={{
                                fontSize: '2.625rem', maxWidth: smallContent ? '17.4rem' : hasDown ? '15.6rem' : '15.6rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '', letterSpacing: '-0.07rem', whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>{team2}</span>
                        </div>
                    </button>
                </div>
            </div>

            {score ? (
                <div style={{
                    marginRight: isAttached && "5px",
                    fontSize: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1.6',
                    fontFamily: 'SpoqaHanSansNeoMedium',
                    textAlign: 'center',
                    width: '5.5rem',
                    // backgroundColor:'#fff',
                    flexShrink: 0
                }}
                >
                    {
                        result === "cancel"
                            ? <p style={{ color: result === "cancel" ? '#4c98ff' : '', marginLeft: '0.45rem', letterSpacing: '-0.06rem' }}>취소</p>
                            : (result === "win" || result === "lose" || result === "equality")
                                ? (
                                    <>
                                        <p
                                            style={{
                                                marginBottom: score.length > 4 ? '-0.5rem' : '-1.4rem',
                                                fontFamily: 'SpoqaHanSansNeoMedium',
                                                marginLeft: '-0.2rem',
                                                color: result === "win" ? '#e65454' : result === "lose" ? '#c8c8c8' : result === 'equality' ? '#44bb60' : ''
                                            }}
                                        >
                                            {result === "win" ? "승" : result === "lose" ? "패" : result === "equality" ? "무" : ""}
                                        </p>
                                        <p style={{ margin: '0 0 2.2rem -0.4rem', fontFamily: 'RobotoMedium', letterSpacing: score.length > 4 ? '-0.2rem' : '-0.07rem', fontSize: score.length > 4 ? '2rem' : '', lineHeight: score.length > 4 ? '2.3rem' : '' }}>{score}</p>
                                    </>
                                )
                                : "결과없음"
                    }
                </div>
            ) : (
                <div style={{
                    marginRight: isAttached && "5px",
                    fontSize: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1.6',
                    fontFamily: 'SpoqaHanSansNeoMedium',
                    textAlign: 'center',
                    width: '5.5rem',
                    flexShrink: 0
                }}
                >
                    {
                        result === "cancel"
                            ? <p style={{ color: result === "cancel" ? '#4c98ff' : '', marginLeft: '0.45rem', letterSpacing: '-0.06rem' }}>취소</p>
                            : (result === "win" || result === "lose" || result === "equality")
                                ? (
                                    <p
                                        style={{
                                            fontFamily: 'SpoqaHanSansNeoMedium',
                                            marginLeft: '0.45rem',
                                            color: result === "win" ? '#e65454' : result === "lose" ? '#c8c8c8' : result === 'equality' ? '#44bb60' : ''
                                        }}
                                    >
                                        {result === "win" ? "승" : result === "lose" ? "패" : result === "equality" ? "무" : ""}
                                    </p>
                                )
                                : "결과없음"
                    }
                </div>
            )}


        </div>
    )
}

export default CardResults;
