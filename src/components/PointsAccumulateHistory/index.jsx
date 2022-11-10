import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import { useNavigate } from 'react-router-dom'
// import ScrollButton from 'components/common/ScrollButton'


const tableData = [
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50P" }
        }
    ],
]

// const SubMenuList = (
//     <>
//         <div style={{ padding: '1.75rem 1.875rem 0.975rem 1.9rem', display: 'flex' }} className='w-full flex'>
//             <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '1rem', height: '13.125rem', background: 'linear-gradient(to top, #846241, #97714a 50%, #a47b51)', width: '36.5rem' }} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
//                 <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium' }} className="w-full h-full bg-white flex items-center flex-col">
//                     <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>잔여 포인트</div>
//                     <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }} className="tracking-tight flex items-center">
//                         <span className="font-spoqaBold text-blue-r0056a6" style={{ color: '#4c98ff', fontFamily: 'SpoqaHanSansNeoBold' }}>278</span>
//                         <span className="font-spoqa text-gray-r616161">P</span>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '', height: '13.125rem', background: '#404040', width: '36.5rem' }} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
//                 <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium' }} className="w-full h-full bg-white flex items-center flex-col">
//                     <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>당월 적립포인트</div>
//                     <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }} className="tracking-tight flex items-center">
//                         <span className="font-spoqaBold text-blue-r0056a6" style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>50</span>
//                         <span className="font-spoqa text-gray-r616161">P</span>
//                     </div>
//                 </div>
//             </div>
//         </div>


//         <div style={{ padding: '1.875rem', paddingTop: '0', display: 'flex' }} className='w-full flex'>
//             <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '1rem', height: '13.125rem', background: '#404040', width: '24rem' }} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
//                 <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium', paddingRight: '0.35rem' }} className="w-full h-full bg-white flex items-center flex-col">
//                     <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>전월 적립포인트</div>
//                     <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }} className="tracking-tight flex items-center">
//                         <span className="font-spoqaBold text-blue-r0056a6" style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>228</span>
//                         <span className="font-spoqa text-gray-r616161">P</span>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '1rem', height: '13.125rem', background: '#404040', width: '24rem' }} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
//                 <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium', paddingRight: '0.26rem' }} className="w-full h-full bg-white flex items-center flex-col">
//                     <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>총 누적포인트</div>
//                     <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }} className="tracking-tight flex items-center">
//                         <span className="font-spoqaBold text-blue-r0056a6" style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>278</span>
//                         <span className="font-spoqa text-gray-r616161">P</span>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '', height: '13.125rem', background: '#404040', width: '24rem' }} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
//                 <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium', paddingRight: '0.26rem' }} className="w-full h-full bg-white flex items-center flex-col">
//                     <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>총 사용포인트</div>
//                     <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }} className="tracking-tight flex items-center">
//                         <span className="font-spoqaBold text-blue-r0056a6" style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>228</span>
//                         <span className="font-spoqa text-gray-r616161">P</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// )


const PointsAccumulateHistory = ({ SubMenuList, subActiveButton, setSubActiveButton  }) => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.onpopstate = e => {
            navigate('/mypage/points')
            setSubActiveButton('/mypage/points/all/points-accumulate-history')
        }
        return (() => {
            setSubActiveButton('/mypage/points/all/points-accumulate-history')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    return (
        <>
            <div className="flex flex-col items-center" style={{
                // dispaly: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center'
            }}>


                <div style={{
                    fontSize: '2.624375rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: '2.5rem', letterSpacing: '-0.07rem', marginBottom: '1.4rem',
                }} className="font-spoqaMedium tracking-tight my-4 text-gray-r8c8c8c">
                    <span className="font-spoqaBold text-blue-r0056a6" style={{
                        color: '#aa9264', fontFamily: 'SpoqaHanSansNeoBold'
                    }}>louie3</span>
                    <span className="" style={{ color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }}>님의 포인트적립 정보입니다.</span>
                </div>


                {SubMenuList}
                <div className='date-div'
                    style={{ marginTop: '-1.1rem' }}
                >

                    <DateSearchBar isLeagueSearch={false} withBlackButton isPoints='true' />
                </div>
                {/* <ScrollButton /> */}
                <div className="h-full">
                    <HistoryTable
                        containerBackground='#f7f9fc'
                        tableData={tableData}
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        cardHeight='25.25rem'
                        isButtonGradient={false}
                        hasLeftInput={false}
                        hasButton={false}
                    />
                </div>


                <div style={{ marginTop: '3.875rem', paddingBottom: '0.01rem' }}>
                    <Pagination page={page} setPage={setPage} />
                </div>

            </div>
        </>
    )
}

export default PointsAccumulateHistory
