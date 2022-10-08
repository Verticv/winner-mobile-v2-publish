/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import horizontalsScroll from '../../utils/horizontalsScroll';
// import Botton from '../NavButtons';

const HorizontalMenu = ({
    itemsArray,
    selectedSubTab,
    setSelectedSubTab = null,
    withoutFirst = true,
    setSelectedTab,
    popup
}) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isHover, setHover] = useState(null)

    console.log('selectedSubTab', selectedSubTab);

    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
        }
    }, [itemsArray])

    function TabsList({ items }) {
        // const [btnActive, setBtnActive] = useState('0')
        return items.map((item, index) => {
            const isActive = selectedSubTab === item.id
            let isSameLink = pathname === item.path


            if (item.hasSameParent) {
                const pagePath = window.location.pathname.split('/')
                pagePath?.pop()
                const parentPath = item.path.split('/')
                if (parentPath.join('/') === pagePath.join('/')) {
                    isSameLink = true
                }
            }

            if (window.location.pathname.includes('/mypage/bet-history/all/minigame') && item.path.includes('/mypage/bet-history/all/minigame')) {
                isSameLink = true
            }
            // console.log(pathname.includes('/minigame'), 'pathname');
            //     <div className={`nav-button`} id={id}
            //     onClick={(event) => setBtnActive(event.target.id)}
            // >
            //     <button id={id} className={`${(+btnActive === id) ? 'active' : ''}`}>
            //         <img id={id} className='icon' src={(+btnActive === id) ? activeIcon : icon} alt='' style={{ width: width, height: height, marginTop: marginTop }} />
            //         <span id={id} className='text' >{text}</span>
            //     </button>
            // </div>
            return (
                <div className={`nav-button ${(isActive && popup) || (isSameLink && !popup) ? 'active' : ''}`}
                    id={`t${index}`}
                    key={item.id}
                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                        navigate(item.path)
                        setSelectedSubTab(item.id)
                        setSelectedTab(item.id)
                        // if (setSelectedSubTab !== null) {
                        //     setSelectedSubTab(0)
                        // }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                // onClick={(event) => setBtnActive(event.target.id)}
                >
                    {console.log(item.id, 'withoutFirst')}
                    <button
                        id={`t${index}`}
                        key={item.id}
                        style={{
                            // background: 'red'
                            // background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                            // borderRadius: "1.625rem",
                            // width: '18.68375rem',
                            // height: '13.18rem',
                            // marginRight: items.length - 1 === index ? '1.875rem' : '1px',
                            // padding: '1px'
                            // padding: '1px'
                        }}
                    // className={`${isActive ? 'active' : ''}`}
                    // ? "bg-blue-r58baf7"
                    // : "bg-white"
                    // } overflow-hidden flex items-end`}
                    // onPointerDown={() => setHover(item.id)}
                    // onPointerUp={() => {
                    //     setHover(null)
                    //     horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                    //     navigate(item.path)
                    //     setSelectedSubTab(item.id)
                    //     setSelectedTab(item.id)
                    // if (setSelectedSubTab !== null) {
                    //     setSelectedSubTab(0)
                    // }
                    // }}
                    // onPointerOut={() => setHover(null)}
                    // onPointerCancel={() => setHover(null)}
                    >
                        {/* <div
                            style={{
                                // height:"78px",
                                width: "100%",
                                borderRadius: "1.625rem",
                                paddingTop: '0.5rem'
                            }}
                            className={`flex w-full justify-end h-full items-end bg-white ${isActive
                                ? "bg-blue-r58baf7"
                                : "bg-white"
                                }`}
                        > */}
                        {/* <div
                                style={{
                                    background: isActive
                                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                                        : isHover === item.id
                                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                                    borderRadius: "1.625rem",
                                    borderTopLeftRadius: "1.625rem 1.3rem",
                                    borderTopRightRadius: "1.625rem 1.3rem",
                                    borderColor: isActive ? "#1a73ce" : "#d6dfe8",
                                    boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                                }}
                                className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                            > */}
                        <div style={{ width: '100%', textAlign: 'center', height: '6.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: item.marginIcon ? item.marginIcon : '' }}>
                            <img id={item.id} className='icon' src={((isActive && popup) || (isSameLink && !popup)) ? (item.activeIcon ? item.activeIcon : item.icon) : item.icon} alt='' style={{ width: item.width || '7.875rem', height: item.height, marginTop: item.marginTop }} />
                        </div>
                        {/* <img style={{ width: '6.8rem', marginLeft: '0.5625rem', WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} className="mt-4 object-contain select-none icon" src={item.icon} alt="" /> */}
                        <div style={{ width: '100%', textAlign: 'center', height: '4.97rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span
                                id={item.id}
                                style={{ marginTop: item.marginTop, marginLeft: item.textMargin }}
                                className='text'>{item.text}</span>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </button>
                </div>
            )
        });
    }

    return (
        // <div className='div-shadow'>
            <div id="container" className="HorizontalMenu flex justify-start items-start">
                {/* <Botton /> */}
                <TabsList items={itemsArray} />
            </div>
            // {/* <div className='nav-shadow' style={{ height: '12.4rem' }}></div> */}
        // </div>
    )
}

export default HorizontalMenu
