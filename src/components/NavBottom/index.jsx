import React from "react";
import { useNavigate } from 'react-router-dom';
import icon1 from '../../assets/nav-bottom-icon1.png'
import icon2 from '../../assets/nav-bottom-icon2.png'
import icon3 from '../../assets/nav-bottom-icon3.png'
import icon4 from '../../assets/nav-bottom-icon4.png'
import icon5 from '../../assets/nav-bottom-icon5.png'

const navInfo = [
    {
        id: 1,
        icon: icon5,
        text: '출석부',
        width: '4.3125rem',
        isActive: false,
        path: '/aa1'
    }, {
        id: 2,
        icon: icon4,
        text: '게시판',
        width: '5.875rem',
        isActive: false,
        path: '/freeboard'
    }, {
        id: 3,
        icon: icon3,
        text: '홈',
        width: '5.3125rem',
        isActive: true,
        path: '/main'
    }, {
        id: 4,
        icon: icon2,
        text: '문의',
        width: '4.3125rem',
        isActive: false,
        path: '/cscenter/all/contact/all'
    },
    {
        id: 5,
        icon: icon1,
        text: '마이인포',
        width: '4rem',
        isActive: false,
        path: '/5'
    }];

export default function NavBottom() {
    let navigate = useNavigate();

    return (
        <div className="nav-bottom">
            {navInfo?.map(({ id, icon, text, width, isActive, path }) => (
                <div key={id} className={`nav-content ${(window.location.pathname.includes(path)) ? 'active' : ''}`} id={id}
                    onClick={(event) => {
                        navigate(path);
                    }}
                >
                    <img id={id} src={icon} alt="" style={{ width: width }} />
                    <span id={id} className="text">{text}</span>
                </div>
            ))}
        </div>
    )
}