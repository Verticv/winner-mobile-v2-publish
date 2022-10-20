import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
// import ScrollButton from '../ScrollButton'

const tableData = [
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '취소'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],

]



const PointsTransactionHistory = ({ SubMenuList,  subActiveButton, setSubActiveButton  }) => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setSubActiveButton('/mypage/points/all/points-transaction-history')
    }, [setSubActiveButton]);

    return (
        <div className="flex flex-col items-center">

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
            <div className="h-full w-full">
                <HistoryTable
                    containerBackground='#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='21rem'
                    isButtonGradient={false}
                    hasLeftInput={false}
                />
            </div>


            <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                <Pagination page={page} setPage={setPage} />
            </div>

        </div>
    )
}

export default PointsTransactionHistory