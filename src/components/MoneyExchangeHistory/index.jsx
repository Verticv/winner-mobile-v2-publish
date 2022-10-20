import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import SelectAllButton from '../SelectAllButton'
// import ScrollButton from 'components/common/ScrollButton'

const tableData = [
    [
        {
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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
            0: { 환전금액: '12,000' },
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


const MoneyExchangeHistory = ({ subActiveButton, setSubActiveButton }) => {

    const [page, setPage] = useState(0)
    // const [inputValue, setInputValue] = useState(null)
    // const [passwordValue, setPasswordValue] = useState("")
    // const [inputClicked, setInputClicked] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    // var nf = new Intl.NumberFormat();
    useEffect(() => {
        setSubActiveButton('/mypage/money/exchange/currency/history')
    }, [setSubActiveButton]);

    return (
        <div className="flex flex-col items-center">

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
                    cardHeight='16.625rem'
                    isButtonGradient={false}
                />
            </div>

            <div className='w-full'>
                {/* <SelectAllButton buttonsNumber={2} count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} /> */}
                <SelectAllButton count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>

            <div style={{ paddingBottom: '0.01rem' }}>
                <Pagination page={page} setPage={setPage} />
            </div>

        </div>
    )
}

export default MoneyExchangeHistory
