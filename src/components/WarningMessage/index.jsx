import React from 'react'
import AlertIcon from '../../assets/mainPage/icons/warning.png'
import parse from 'html-react-parser';

const WarningMessage = ({ title, message1, mr1 = '', mr2 = '', mr3 = '', mr4 = '', isFirstMessageDark, message2, message3, message4 }) => {

    return (
        <div style={{ paddingLeft: '1.7rem', paddingTop: '1.3rem', paddingBottom: '2.2rem', borderRadius: '1.2rem', border: '0.1875rem solid #594c49', marginBottom: '0.625rem', background: '#413937', letterSpacing: '-0.07rem' }} className="w-full rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
            <div className="flex" style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '3.375rem', height: '3.0625rem', marginRight: '1rem', marginTop: '0.2rem', marginLeft: '0.2rem' }} src={AlertIcon} alt="" />
                <span style={{ fontSize: '2.8125rem', lineHeight: '1.2', marginTop: '0.5rem', color: '#e65454' }} className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">{title}</span>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column' }} className="flex flex-col text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
                {message1 && <span style={{ color: isFirstMessageDark ? "#ffdfbd" : '', fontSize: '2.625rem', marginRight: mr1 }} className="flex"><span style={{ marginRight: '0.3rem', marginLeft: '0.2rem' }} className="font-bold block">✓</span>  {message1}</span>}
                {message2 && <span style={{ color: '#ccc2b6', fontSize: '2.625rem', marginRight: mr2, marginTop: '1.6rem', lineHeight: '1.37' }} className="flex"><span style={{ marginRight: '0.3rem', marginLeft: '0.2rem' }} className="font-bold block">✓</span> <span>{parse(message2)}</span></span>}
                {message3 && <span style={{ color: '#ccc2b6', fontSize: '2.625rem', marginRight: mr3, marginTop: '1.3rem', lineHeight: '1.3' }} className="flex"><span style={{ marginRight: '0.3rem', marginLeft: '0.2rem' }} className="font-bold block">✓</span>  <span>{parse(message3)}</span></span>}
                {message4 && <span style={{ color: '#ccc2b6', fontSize: '2.625rem', marginTop: '1.6rem', marginRight: mr4 }} className="flex"><span style={{ marginRight: '0.3rem', marginLeft: '0.2rem' }} className="font-bold">✓</span>  {message4}</span>}
            </div>
        </div>
    )

}

export default WarningMessage

