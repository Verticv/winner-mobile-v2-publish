import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import SelectAllButton from '../SelectAllButton'
// import ScrollButton from '../ScrollButton'

const tableData = [
    [
        {
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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



const MoneyChargeHistory = ({ subActiveButton, setSubActiveButton }) => {

    const [page, setPage] = useState(0)
    // const [inputValue, setInputValue] = useState(null)
    // const [passwordValue, setPasswordValue] = useState("")
    // const [inputClicked, setInputClicked] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    // var nf = new Intl.NumberFormat();
    useEffect(() => {
        setSubActiveButton('/mypage/money/charge/history')
    }, [setSubActiveButton]);

    return (
        <div className="flex flex-col items-center MoneyChargeHistory">

            <DateSearchBar isLeagueSearch={false} withBlackButton />
            {/* <ScrollButton /> */}
            <div className="h-full">
                <HistoryTable
                    containerBackground='#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='20.9375rem'
                    isButtonGradient={false}
                />
            </div>

            <div className='w-full'>
                <SelectAllButton count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>
            {/* <div className="two-buttons-container">
                <button style={{ height: '7.3125rem' }}
                    // onClick={() => navigate("/freeboard")} 
                    className="flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-blue-r0070d9">
                    <div style={{ width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #3a6287, #4777ab 50%, #518bcb)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ color: '#d6f3ff' }}>신청하기</span>
                        </div>
                    </div>
                </button>
                <button style={{ background: 'linear-gradient(to top, #4e3d0b, #a3814f 50%, #e7b887)', height: '7.3125rem', padding: '1px', fontSize: '2.8125rem' }}
                    // onClick={() => navigate("/freeboard")} 
                    className="flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d">
                    <div style={{ background: 'linear-gradient(to top, #4e3d0b, #a3814f 50%, #e7b887)', width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                        <div
                            style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e49 50%, #a57b51)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <span style={{ color: '#ffdfbd' }}>취소하기</span>
                        </div>
                    </div>
                </button>
            </div> */}
            {/* <div className="two-buttons">
                <button
                    className='hover'
                    style={{ background: 'linear-gradient(to top, #4d0a25, #a34f63 50%, #e78694 )' }}>
                    <div className='div-border'
                        style={{ background: 'linear-gradient(to top, #97351d, #bb4c32 50%, #df6345)' }}
                    >
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">계좌문의</span>
                        </div>
                    </div>
                </button>
                <button
                    className='hover'
                    style={{ background: 'linear-gradient(to top, #4d3c0a, #a3814f 50%, #e7b786 )' }}
                //  onClick={() => navigate('/cscenter/all/contact/compose')} 
                >
                    <div className='div-border' style={{ background: 'linear-gradient(to top, #80603f, #96704a 50%, #a57b52 )', color: '#ffdfbd' }}>
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">문의작성</span>
                        </div>
                    </div>
                </button>
            </div> */}



            <div style={{ marginTop: '1.25rem', marginBottom: '-18rem' }}>
                <Pagination page={page} setPage={setPage} />
            </div>
        </div>
    )
}

export default MoneyChargeHistory
