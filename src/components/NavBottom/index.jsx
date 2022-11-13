import React from "react";
import { useNavigate } from 'react-router-dom';
import icon1 from '../../assets/nav-bottom-icon1.png'
import icon2 from '../../assets/nav-bottom-icon2.png'
import icon3 from '../../assets/nav-bottom-icon3.png'
import icon4 from '../../assets/nav-bottom-icon4.png'
import icon5 from '../../assets/nav-bottom-icon5.png'
import i1 from '../../assets/nav-bottom-icon1-active.png'
import i2 from '../../assets/nav-bottom-icon2-active.png'
import i3 from '../../assets/nav-bottom-icon3-active.png'
import i4 from '../../assets/nav-bottom-icon4-active.png'
import i5 from '../../assets/nav-bottom-icon5-active.png'


const navInfo = [
    {
        id: 1,
        icon: icon5,
        text: '출석부',
        activeIcon: i5,
        isActive: false,
        path: '/attendance'
    }, {
        id: 2,
        icon: icon4,
        text: '게시판',
        activeIcon: i4,
        isActive: false,
        path: '/freeboard'
    }, {
        id: 3,
        icon: icon3,
        text: '홈',
        activeIcon: i3,
        isActive: true,
        path: '/main'
    }, {
        id: 4,
        icon: icon2,
        text: '문의',
        activeIcon: i2,
        isActive: false,
        path: '/cscenter/all/contact/all'
    },
    {
        id: 5,
        icon: icon1,
        text: '마이인포',
        activeIcon: i1,
        isActive: false,
        path: '/mypage'
    }];

export default function NavBottom() {
    let navigate = useNavigate();
    
    return (
        <div className="nav-bottom">
            {navInfo?.map(({ id, icon, text, width, isActive, path, activeIcon }) => {
                let isActiveButton = window.location.pathname.includes(path)

                if (path === '/mypage' && window.location.pathname.includes('/mypage/freeboard')){
                    isActiveButton = false
                }

                return (
                    <div key={id} className={`nav-content ${isActiveButton ? 'active' : ''}`} id={id}
                        onClick={(event) => {
                            navigate(path);
                        }}
                    >
                        <img id={id} src={isActiveButton ? activeIcon : icon} alt="" style={{ width: '6.625rem' }} />
                        <span id={id} className="text">{text}</span>
                    </div>
                )
            })}
        </div>
    )
}