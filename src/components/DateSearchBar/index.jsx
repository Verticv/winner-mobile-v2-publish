import React, { useState } from 'react'
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import DropDownInput from '../../components/DropDownInput'
import CalendarIcon from '../../assets/myPage/CalendarIcon.png';
// import DropDownControls from 'components/dropdowns/DropDownControls';
// import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'
import './DatePicker.css'
registerLocale('ko', ko)

const DateSearchBar = ({
    isLeagueSearch = false,
    hasIdSearch = false,
    has3MonthSearch = false,
    isGameResultsSearch = false,
    withBlackButton = false,
    withMargin = true,
    hasDateSuggestion = true,
    isFreeboard,
    isPoints
}) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const CustomInput = (props) => {
        return (
            <input
                className="place-color-grey date-picker left-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b"
                onClick={props.onClick}
                value={props.value}
                type="text"
                readOnly={true}
            />
        )
    }
    return (
        <div style={{ margin: withMargin ? (!isFreeboard ? '0.9rem 1.875rem' : '1.2rem 1.875rem') : '0 3.875rem 0 0', width: withMargin ? '' : '73.875rem', background: '#2e2e2e', borderRadius: '1.1rem', paddingTop: isPoints ? '0' : '0.7rem', marginTop: isPoints ? '1.1rem' : '' }} className="date12">

            {isLeagueSearch === true && (
                <div className="space-x-5px">
                    <input
                        placeholder="리그선택"
                        className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />
                    <input
                        placeholder="팀명검색"
                        className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />

                </div>
            )}

            {isGameResultsSearch === true && (
                <div className="first-row">
                    <input
                        // style={{ height: '6.75rem', width: '34.06rem', fontSize: '2.625rem', marginLeft: '1.875rem' }}
                        placeholder="리그선택"
                        className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" />
                    {/* <DropDownInput /> */}
                    {/* <span style={{ fontSize: '2.6rem', marginTop: '1.875rem', width: '1.880875rem' }} className="invisible text-center font-spoqaMedium text-gray-r454545 mt-px">~</span> */}
                    <input
                        style={{ marginLeft: '2.05rem' }}
                        placeholder="팀명검색"
                        className="place-color-grey placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />
                </div>
            )}

            <div className="second-row">
                <div className="date-picker">
                    <DatePicker
                        customInput={
                            <CustomInput />
                        }
                        className="place-color-grey date-picker left-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b"
                        locale="ko"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        dateFormatCalendar="yyyy년 MM월"
                        disabledKeyboardNavigation={true}
                        onKeyDown={(e) => {
                            e.preventDefault();
                        }}
                        onChangeRaw={(e) => e.preventDefault()}
                        popperPlacement="bottom"
                        popperModifiers={{
                            flip: {
                                behavior: ["bottom"] // don't allow it to flip to be above
                            },
                            preventOverflow: {
                                enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                            },
                            hide: {
                                enabled: false // turn off since needs preventOverflow to be enabled
                            }
                        }}
                    />
                    <img src={CalendarIcon} alt="" style={{ width: '3.5rem' }} className="w-14 absolute right-8" />
                </div>
                <span className='Signal'>~</span>
                <div className="date-picker">
                    {hasDateSuggestion ? (
                        <>
                            <div className=' -ml-8'>
                                <DatePicker
                                    customInput={<CustomInput />}
                                    // className="place-color-grey date-picker right-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b" 
                                    locale="ko"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    dateFormatCalendar="yyyy년 MM월"
                                    disabledKeyboardNavigation={true}
                                    onKeyDown={(e) => {
                                        e.preventDefault();
                                    }}
                                    onChangeRaw={(e) => e.preventDefault()}
                                    popperPlacement="bottom"
                                    popperModifiers={{
                                        flip: {
                                            behavior: ["bottom"] // don't allow it to flip to be above
                                        },
                                        preventOverflow: {
                                            enabled: true // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                        },
                                        hide: {
                                            enabled: true // turn off since needs preventOverflow to be enabled
                                        }
                                    }}
                                />
                            </div>
                            <img style={{ top: '3.44rem', right: '2rem' }} src={CalendarIcon} alt="" className="w-14 absolute" />
                        </>
                    ) : (
                        <div className='mt-7 -ml-8 text-15px'>
                            <DropDownInput isLeagueSelection={false} />
                        </div>
                    )}
                </div>
            </div>
            {hasDateSuggestion ? (
                <div
                    // style={{ margin: '0.75rem 1.875rem', marginBottom: withBlackButton ? '0.75rem' : '0' }} 
                    className="buttons-container2">
                    <div className="common-button">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">오늘</span>
                        </div>
                    </div>

                    <div className="common-button">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">1주일</span>
                        </div>
                    </div>

                    <div className="common-button">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">15일</span>
                        </div>
                    </div>

                    <div className="common-button">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">1개월</span>
                        </div>
                    </div>

                    {has3MonthSearch && (
                        <div className="common-button">
                            <div className="text-con">
                                <span className="font-spoqaMedium tracking-tight text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}

                    {!hasIdSearch ? (
                        <div className="common-button" style={{ background: 'linear-gradient(to top, #4d3c0a, #997947 50%, #e6b786)' }}>
                            <div className="text-con" style={{ background: 'linear-gradient(to top, #805f3f, #936e49 50%, #a57b52)' }}>
                                <span className="font-spoqaMedium tracking-tight text-white pt-px">{withBlackButton ? "3개월" : "검색"}</span>
                            </div>
                        </div>
                    ) : (
                        <div style={{ width: '13.25rem', height: '7.3125rem' }} className="common-button flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75">
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}

                </div>
            ) : (<div style={{ margin: '0.45rem' }}></div>)}


            <div style={{ margin: '0.75rem 1.8rem', marginBottom: withMargin ? '1.8rem' : '1.375rem', marginTop: '0', paddingBottom: '0.1rem' }} className="flex w-full h-full items-center justify-between">
                {withBlackButton && !withMargin && (
                    <div>
                        <input
                            style={{ width: '41.625rem', height: '6.9375rem', fontSize: '2.625rem', paddingLeft: '2.25rem' }}
                            className="mr-3.5 border border-gray-dddddd place-color-grey rounded-2xl placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                            placeholder="아이디"
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }}
                        />
                    </div>
                )}
                {withBlackButton && (
                    <div style={{ minWidth: '27.4375rem', height: '7.3125rem', background: 'linear-gradient(to top, #4c3c0a, #9f7e4d 50%, #e6b786)', padding: '0.1875rem', margin: '-1.1rem 0 1.875rem 0', borderRadius: '0.5rem' }} className="common-button flex w-full items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75">
                        <div style={{ background: 'linear-gradient(to top, #80603f, #946f49 50%, #a57b52)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0.5rem' }} className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span style={{ fontSize: '2.625rem', color: '#ffdfbd', fontFamily: 'SpoqaHanSansNeoMedium', marginTop: '0.4rem' }} className="font-spoqaMedium tracking-tight text-white">검색</span>
                        </div>
                    </div>
                )}
            </div>


            {hasIdSearch && (
                <div className="flex space-x-5px">
                    <input
                        className="w-138px h-42px rounded-lg border border-gray-dddddd bg-white outline-none text-15px font-spoqaMedium tracking-tight text-gray-r8c8c8c px-10px"
                        placeholder="아이디"
                    />
                    <div
                        style={{
                            width: "75px",
                            height: "42px",
                            borderRadius: "4px",
                        }}
                        className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                    >
                        <div
                            style={{
                                width: "73px",
                                height: "40px",
                                background: "linear-gradient(to bottom, #585b5e, #303337)",
                            }}
                            className="flex items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                        >
                            <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-14px text-white">검색</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DateSearchBar
