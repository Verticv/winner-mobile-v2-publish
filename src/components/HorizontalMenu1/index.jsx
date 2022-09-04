/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';
import inactive from '../../assets/cscenter/leftMenu/inactive-btn.png'
import activeBG from '../../assets/cscenter/leftMenu/active-btn.png'
import moneyActive from '../../assets/mainPage/icons/active-bg.png';
import moneyInactive from '../../assets/mainPage/icons/inactive-bg.png';

const HorizontalMenu1 = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null,
    withSmallMarginTop = false,
    isMoneyPage
}) => {

    const navigate = useNavigate();
    let pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    const Image = React.memo(function Image({ icon, activeIcon, width, marginLeft, isSameLink }) {
        return <img style={{ width: width, marginLeft: marginLeft, WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} className="mt-5 object-contain select-none" src={isSameLink ? activeIcon : icon} alt="" />
    });

    useEffect(() => {
        horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
    }, [itemsArray])

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isSameLink = pathname === item.path

            if (item.hasSameParent) {
                const pagePath = window.location.pathname.split('/')
                pagePath?.pop()
                const parentPath = item.path.split('/')
                if (parentPath.join('/') === pagePath.join('/')) {
                    isSameLink = true
                }
            }

            if (window.location.pathname.includes('/cscenter/all/policy/') && item.path.includes('/cscenter/all/policy/')) {
                isSameLink = true
            }

            if (window.location.pathname.includes('/mypage/gameresults/minigame/') && item.path.includes('/mypage/gameresults/minigame/')) {
                isSameLink = true
            }

            return (
                <button
                    id={`t${index}`}
                    key={item.id}
                    style={{
                        // {isSameLink ? '' : ''}
                        background: !isMoneyPage ? `url(${isSameLink ? activeBG : inactive}) round` : `url(${isSameLink ? moneyActive : moneyInactive}) round`,
                        // backgroundSize: 'cover'
                        // borderRadius: "1.625rem",
                        // width: '60%',
                        // height: '13.18rem',
                        // marginRight: items?.length - 1 === index ? '' : '1px',
                        // padding: '1px'
                    }}
                    className={`${isSameLink
                        ? "display-active"
                        : "display-inactive"
                        } overflow-hidden flex items-end w-1/2`}
                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div
                        style={{
                            // width: "100%",
                            // borderRadius: "1.625rem",
                            // paddingTop: '0.5rem',
                        }}
                        className={`flex w-full justify-end h-full items-end bg-white ${isSameLink
                            ? "bg-blue-r58baf7"
                            : "bg-white"
                            }`}
                    >
                        <div
                            // style={{
                            //     background: isSameLink
                            //         ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            //         : isHover === item.id ? "#d0e8ff"
                            //             : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            //     borderRadius: "1.625rem",
                            //     borderTopLeftRadius: "1.625rem 1.3rem",
                            //     borderTopRightRadius: "1.625rem 1.3rem",
                            //     borderColor: isSameLink ? "#1a73ce" : "#d6dfe8",
                            //     boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                            // }}
                            className='btn-content'
                        >
                            <div className='img'>
                                <Image icon={item.icon} activeIcon={item.activeIcon} width={item.width} marginLeft={item.marginLeft} isSameLink={isSameLink} />
                            </div>
                            {/* <img style={{width: '6.9rem', marginLeft: '0.5625rem', WebkitUserDrag:"none", MozUserDrag:"none", userDrag:"none"}} className="mt-5 object-contain select-none" src={item.icon} alt="" /> */}
                            <div className='text'>
                                <span
                                    // className='text'
                                    // style={{ marginTop: withSmallMarginTop ? '0.25rem' : '' }}
                                    // className={`${isSameLink
                                    //     ? "text-white"
                                    //     : "text-gray-r616161"
                                    style={{ color: isSameLink ? '#252525' : '#ccc2b6' }}
                                //     } text-4xl font-spoqaMedium tracking-tight select-none`}
                                >{item.text}</span>
                            </div>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div id="container-nav">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu1
