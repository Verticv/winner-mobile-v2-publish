import React from 'react';

const TableHeader = ({ smallCard = false, isMinigame = false, middleText = "무" }) => {

    if (isMinigame === true) return (
        <div style={{ paddingTop: '1.7625rem', paddingBottom: '1.375rem', display: 'flex', justifyContent: 'right', alignItems: 'center', paddingRight: smallCard ? '1.8rem' : '13.9rem', letterSpacing: '-0.07rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '', marginBottom: '0.3rem' }} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '11rem' : '' }} className="h-full flex items-center justify-end">회차</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '13.5rem' : '13.3rem' }} className="h-full flex items-center justify-end">승</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '12.25rem' : '16.2rem' }} className="h-full flex items-center justify-end">VS</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '9rem' : '16.1rem' }} className="h-full flex items-center justify-end">패</div>
        </div>
    )
    else return (
        <div style={{ paddingTop: smallCard ? '1.69rem' : '1.8rem', paddingBottom: '1.375rem', display: 'flex', justifyContent: 'right', alignItems: 'center', paddingRight: smallCard ? '1.8rem' : '2rem', letterSpacing: '-0.07rem', color: 'rgb(204, 194, 182)', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: smallCard ? '' : '0.3rem' }} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '' : '' }} className="h-full flex items-center justify-end">승(홈)</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '13.5rem' : middleText === "VS" ? '13.75rem' : '14.45rem' }} className="h-full flex items-center justify-end">{middleText}</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '13.2rem' : '13.2rem' }} className="h-full flex items-center justify-end">패(원정)</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '10rem' : '10rem' }} className="h-full flex items-center justify-end">결과</div>
        </div>
    )
}

export default TableHeader;
