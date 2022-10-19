import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Pagination from '../Pagination'
import CouponGiftPopup from '../popups/CouponGiftPopup'
// import ScrollButton from 'components/common/ScrollButton'
// import Navbar from 'components/mainPage/Navbar'
// import BottomNavbar from '../bottomNavbar/BottomNavbar'
import HorizontalMenu1 from '../HorizontalMenu1'
import PopupControls from '../popups/PopupControls'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../HomePageTopBanner';
import HistoryTable from '../HistoryTable'
// import AccountProfileComponent from 'components/common/AccountProfileComponent'
// import LeftMenu from "components/myPage/LeftMenu";
// import Logo from "../../images/newImages/mainPage/icons/logo.png";
// import img18 from '../../img19.png'
import couponActive from '../../assets/coupon/coupon-bg.png'

import Icon1 from '../../assets/coupon/coupon1.png'
import Icon2 from '../../assets/coupon/coupon2.png'
import Icon3 from '../../assets/coupon/coupon3.png'
import Icon1Active from '../../assets/coupon/coupon1-active.png'
import Icon2Active from '../../assets/coupon/coupon2-active.png'
import Icon3Active from '../../assets/coupon/coupon3-active.png'
import Logo from "../../assets/myInfo/Logo.png";
import LeftMenu from "../LeftMenu";
import AccountProfileComponent from '../AccountProfileComponent'
import subIcon1 from '../../assets/bigIcons/leftMenu/18.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/19.png';
import subIcon3 from '../../assets/bigIcons/leftMenu/20.png';
import NavBottom from '../NavBottom'
import Header from '../Header'

// import subIcon1 from '../../images/newImages/mainPage/coupon/1.png';
// import subIcon2 from '../../images/newImages/mainPage/coupon/2.png';
// import subIcon3 from '../../images/newImages/mainPage/coupon/3.png';

const tableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#d43712'
        }
    ],
]

const giftsTableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
]

const historyTableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#0056a6',
            buttonText: '사용 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#454545',
            buttonText: '기간 만료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#279140',
            buttonText: '회수 쿠폰'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337',
            buttonText: '사용 가능'
        }
    ],
]

const sentHistoryTableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료',
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#92278f',
            buttonText: '선물 완료'
        }
    ],
]



const HistoryMenu = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isActive = pathname === item.path
            if (item.path.includes('/cscenter/all/policy/sportsgame')) {
                isActive = true
            }
            return (
                <button
                    className={`${isActive
                        ? "bg-blue-r0056a6"
                        : "bg-white border border-gray-b7b7b7"
                        } w-1/2 rounded-full font-spoqaMedium`}
                    style={{ background: isActive ? '#826140' : '#1e1e1e', fontFamily: 'SpoqaHanSansNeoMedium', color: isActive ? '#ffdfbd' : '#ccc2b6', width: '49.2%', borderRadius: '4rem', marginTop: '1rem', height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '1.15rem' : ''}`, border: `${pathname !== item.path && !isActive ? '0.1875rem solid #555555' : ''}`, letterSpacing: '-0.07rem' }}
                    key={item.id}

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div >
                        <div className='mt-2' style={{ marginRight: '-0.2rem', paddingTop: '0.3rem' }}>
                            <span
                                className={`${isActive
                                    ? "text-white"
                                    : "text-gray-r7b7b7b"
                                    }`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}


const GiftButton = (
    <div className='button-class-div'>
        <button className='button-class hover'>
            <div style={{ marginTop: '0.2rem' }}>
                <span>쿠폰선물하기</span>
            </div>
        </button>
    </div>
)


const CouponUsage = ({ isAuthenticated, setAuthenticated }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))

    const CouponTitle = ({ text = '사용 가능한 쿠폰', number = '10', numberColor = '#e65454' }) => {
        return (
            <div className="flex items-center space-x-20px" style={{ display: 'flex', justifyContent: 'center', marginTop: "2.6rem" }}>
                <div style={{
                    fontSize: '2.624375rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.6rem'
                }} className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                    <span>{text} </span>
                    <span style={{ color: numberColor, fontFamily: 'RobotoBold' }} className="font-robotoBold">&nbsp;{number}</span>
                    <span>장</span>
                </div>
            </div>
        )
    }

    const [page, setPage] = useState(0)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)

    console.log(selectedTab, selectedSubTab)

    const tabsArray = [
        { text: "쿠폰사용", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/mypage/coupon/all", activeBG: couponActive, width: '7.875rem' },
        { text: "쿠폰선물", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/mypage/coupon/all/coupon-gift", activeBG: couponActive, width: '7.875rem' },
        { text: "쿠폰내역", icon: Icon3, activeIcon: Icon3Active, id: 2, path: "/mypage/coupon/all/coupon-history", hasSameParent: true, activeBG: couponActive, width: '7.875rem' },
    ];

    const LeftMenuSubArray = [
        {
            text: "쿠폰사용",
            icon: subIcon1,
            id: 0,
            path: "/mypage/coupon/all",
            width: '9.9375rem'
        },
        {
            text: "쿠폰선물",
            icon: subIcon2,
            id: 1,
            path: "/mypage/coupon/all/coupon-gift",
            width: '9.9375rem'
        },
        {
            text: "쿠폰내역",
            icon: subIcon3,
            id: 2,
            path: "/mypage/coupon/all/coupon-history",
            width: '9.9375rem'
        }
    ]

    const historyTabsArray = [
        { text: "쿠폰발급내역", icon: Icon1, id: 0, path: "/mypage/coupon/all/coupon-history" },
        { text: "쿠폰선물내역", icon: Icon2, id: 1, path: "/mypage/coupon/all/coupon-history/sent" }
    ]
    const MyInfo = () => {
        return (
            <>
                <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                    />
                </div>
                <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                    <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                </div>
            </>
        )
    }


    return (
        <div style={{ maxWidth: '1242px' }} className="relative w-full flex flex-col justify-center overflow-hidden">
            <Routes>
                <Route index
                    element={
                        <>
                            <MyInfo />
                        </>
                    }
                >
                    {/* <AccountProfileComponent isAuthenticated={isAuthenticated} />
                <div style={{ marginTop: '1.875rem', marginBottom: '36.375rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                    />
                </div>
                <div className="flex justify-center mb-40">
                    <img style={{ width: '22.3125rem' }} className="object-contain" src={Logo} alt="logo" />
                </div> */}
                </Route>

                <Route path="/all/*"
                    element={
                        <>
                            <div className="w-full z-30 flex flex-col items-center">
                                {/* <NoticeBanner /> */}
                                <Header />
                                {/* <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} /> */}
                                <HomePageTopBanner pageTitle='쿠폰관리' />
                            </div>
                            {/* <ScrollButton /> */}



                            <div className="flex flex-col items-start limit:items-center w-full h-full">

                                {/* <div style={{ padding: '1.8rem', paddingBottom: '1.875rem' }} className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full"> */}
                                <div className='coupon-usage' id='container-nav'>

                                    <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} isCouponPage='true' />
                                </div>
                                {/* {(selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 4 && selectedTab !== 7 && selectedTab !== 8) && (
                                    <div style={{marginLeft: `${selectedTab * 116 + 49}px`}} className={`absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                                        <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
                                    </div>
                                )} */}
                                {/* </div>
                                    </div>
                                </div> */}

                                <div className="flex w-full">
                                    <div className="w-full">

                                        <Routes>

                                            <Route index
                                                element={
                                                    <>
                                                        <div style={{ marginBottom: '-0.8125rem' }} className='mt-4 flex justify-center'>
                                                            <CouponTitle text='사용 가능한 쿠폰' number='10' />
                                                        </div>
                                                        <div className="">
                                                            <HistoryTable
                                                                containerBackground='#f7f9fc'
                                                                tableData={tableData}
                                                                wideDetailButton
                                                                checkedState={checkedState}
                                                                setCheckedState={setCheckedState}
                                                                isPopupOpen={isPopupOpen}
                                                                setPopupOpen={setPopupOpen}
                                                                cardHeight='29.5625rem'
                                                                hasLeftInput={false}
                                                                isCouponUsage={true}
                                                            />
                                                        </div>
                                                        <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                                                            <Pagination page={page} setPage={setPage} />
                                                        </div>
                                                        <NavBottom />

                                                    </>
                                                }
                                            >

                                            </Route>
                                            <Route exact path="/coupon-gift"
                                                element={
                                                    <div className='coupon-all'>
                                                        {/* <img src={img18} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
                                                        <div style={{
                                                            marginBottom: '-0.8125rem',
                                                            marginTop: '2.6rem',
                                                            letterSpacing: '-0.07rem',
                                                            marginLeft: '-0.7rem',
                                                        }} className='mt-4 flex justify-center'>
                                                            <CouponTitle text='선물 가능한 쿠폰' number='7' />
                                                        </div>
                                                        <div className="">
                                                            <HistoryTable
                                                                containerBackground='#f7f9fc'
                                                                wrapButtonText
                                                                tableData={giftsTableData}
                                                                checkedState={checkedState}
                                                                setCheckedState={setCheckedState}
                                                                isPopupOpen={isPopupOpen}
                                                                setPopupOpen={setPopupOpen}
                                                                cardHeight='25.3125rem'
                                                                isButtonGradient={false}
                                                            />
                                                        </div>
                                                        <div style={{ marginBottom: '2.9375rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', letterSpacing: '-0.07rem', color: '#c8c8c8', marginTop: '3.7rem' }} className='mt-4'>
                                                            <p className='font-spoqaMedium text-gray-r7c7c7c text-center' style={{ fontSize: '2.625rem' }}>
                                                                <span className='text-blue-r0056a6 font-spoqaBold' style={{ fontFamily: 'SpoqaHanSansNeoBold', color: '#4c98ff' }}>쿠폰선물하기</span> 버튼을 클릭하여 쿠폰받을 회원을 선택하세요.
                                                            </p>
                                                        </div>
                                                        <div className="popup-style">
                                                            <PopupControls buttonChild={GiftButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                                                {/* <img src={img18} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}

                                                                <CouponGiftPopup setPopupOpen={setPopupOpen} />
                                                            </PopupControls>
                                                        </div>
                                                        <div style={{ marginTop: '3.86rem', paddingBottom: '0.1rem' }}>
                                                            <Pagination page={page} setPage={setPage} />
                                                        </div>
                                                        <NavBottom />
                                                        {/* <CouponGiftPopup setPopupOpen={setPopupOpen} /> */}
                                                    </div>
                                                }
                                            >


                                                {/* <BottomNavbar /> */}
                                                {/* <PointsAccumulateHistory />
                                <BottomNavbar /> */}
                                            </Route>
                                            <Route
                                                path='/coupon-history'
                                                element={
                                                    <>
                                                        <div style={{ margin: '1.875rem', marginTop: '0.5rem', marginBottom: '0' }}>
                                                            <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                                                        </div>

                                                        <div style={{ marginBottom: '-0.8125rem', display: 'flex', justifyContent: 'center' }} className='mt-4 flex justify-center'>
                                                            <CouponTitle text='사용가능' number='32' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3rem 0.9375rem 0', background: '#323231' }} className='bg-gray-c5c5c5'></div>
                                                            <CouponTitle text='사용완료' number='8' numberColor='#0056a6' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3rem 0.9375rem 0', background: '#323231' }} className='bg-gray-c5c5c5'></div>
                                                            <CouponTitle text='기간만료' number='0' numberColor='#000000' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3rem 0.9375rem 0', background: '#323231' }} className='bg-gray-c5c5c5'></div>
                                                            <CouponTitle text='회수된쿠폰' number='0' numberColor='#279140' />
                                                        </div>
                                                        <div className="">
                                                            <HistoryTable
                                                                containerBackground='#f7f9fc'
                                                                wrapButtonText
                                                                tableData={historyTableData}
                                                                checkedState={checkedState}
                                                                hasLeftInput={false}
                                                                setCheckedState={setCheckedState}
                                                                isPopupOpen={isPopupOpen}
                                                                setPopupOpen={setPopupOpen}
                                                                cardHeight='25.3125rem'
                                                                isButtonGradient={false}
                                                            />
                                                        </div>
                                                        <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                                                            <Pagination page={page} setPage={setPage} />
                                                        </div>
                                                        <NavBottom />
                                                    </>
                                                }
                                            >

                                            </Route>
                                            <Route
                                                path='/coupon-history/sent'
                                                element={
                                                    <>
                                                        <div style={{ margin: '1.875rem', marginTop: '0.5rem', marginBottom: '0' }}>
                                                            <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                                                        </div>

                                                        <div style={{ marginBottom: '-0.8125rem', display: 'flex', justifyContent: 'center' }} className='mt-4 flex justify-center'>
                                                            <CouponTitle text='사용가능' number='32' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                            <CouponTitle text='사용완료' number='8' numberColor='#0056a6' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                            <CouponTitle text='기간만료' number='0' numberColor='#000000' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                            <CouponTitle text='회수된쿠폰' number='0' numberColor='#279140' />
                                                        </div>
                                                        <div className="">
                                                            <HistoryTable
                                                                containerBackground='#f7f9fc'
                                                                wrapButtonText
                                                                tableData={sentHistoryTableData}
                                                                hasLeftInput={false}
                                                                checkedState={checkedState}
                                                                setCheckedState={setCheckedState}
                                                                isPopupOpen={isPopupOpen}
                                                                setPopupOpen={setPopupOpen}
                                                                cardHeight='29.5rem'
                                                                isButtonGradient={false}
                                                            />
                                                        </div>
                                                        <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                                                            <Pagination page={page} setPage={setPage} />
                                                        </div>
                                                        <NavBottom />
                                                    </>
                                                }
                                            ></Route>
                                            {/* <Route exact path="/mypage/coupon/all/coupon-history">
                                                <div style={{ margin: '1.875rem', marginTop: '0', marginBottom: '2.875rem' }}>
                                                    <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                                                </div>

                                                <div style={{ marginBottom: '-0.8125rem' }} className='mt-4 flex justify-center'>
                                                    <CouponTitle text='사용가능' number='32' />
                                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                    <CouponTitle text='사용완료' number='8' numberColor='#0056a6' />
                                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                    <CouponTitle text='기간만료' number='0' numberColor='#000000' />
                                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                    <CouponTitle text='회수된쿠폰' number='0' numberColor='#279140' />
                                                </div>
                                                <div className="">
                                                    <HistoryTable
                                                        containerBackground='#f7f9fc'
                                                        wrapButtonText
                                                        tableData={historyTableData}
                                                        checkedState={checkedState}
                                                        hasLeftInput={false}
                                                        setCheckedState={setCheckedState}
                                                        isPopupOpen={isPopupOpen}
                                                        setPopupOpen={setPopupOpen}
                                                        cardHeight='25.3125rem'
                                                        isButtonGradient={false}
                                                    />
                                                </div>
                                                <div style={{ marginTop: '1.875rem' }}>
                                                    <Pagination page={page} setPage={setPage} />
                                                </div>
                                            </Route> */}
                                            {/* <Route exact path="/mypage/coupon/all/coupon-history/sent">
                                                <div style={{ margin: '1.875rem', marginTop: '0', marginBottom: '2.875rem' }}>
                                                    <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                                                </div>

                                                <div style={{ marginBottom: '-0.8125rem' }} className='mt-4 flex justify-center'>
                                                    <CouponTitle text='사용가능' number='32' />
                                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                    <CouponTitle text='사용완료' number='8' numberColor='#0056a6' />
                                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                    <CouponTitle text='기간만료' number='0' numberColor='#000000' />
                                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem' }} className='bg-gray-c5c5c5'></div>
                                                    <CouponTitle text='회수된쿠폰' number='0' numberColor='#279140' />
                                                </div>
                                                <div className="">
                                                    <HistoryTable
                                                        containerBackground='#f7f9fc'
                                                        wrapButtonText
                                                        tableData={sentHistoryTableData}
                                                        hasLeftInput={false}
                                                        checkedState={checkedState}
                                                        setCheckedState={setCheckedState}
                                                        isPopupOpen={isPopupOpen}
                                                        setPopupOpen={setPopupOpen}
                                                        cardHeight='29.5rem'
                                                        isButtonGradient={false}
                                                    />
                                                </div>
                                                <div style={{ marginTop: '1.875rem' }}>
                                                    <Pagination page={page} setPage={setPage} />
                                                </div>
                                            </Route> */}
                                        </Routes>
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                >

                </Route>

            </Routes>

        </div>
    )
}

export default CouponUsage
