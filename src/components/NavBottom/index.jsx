import React, { useState } from "react";
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
    }, {
        id: 2,
        icon: icon4,
        text: '게시판',
        width: '5.875rem',
        isActive: false,
    }, {
        id: 3,
        icon: icon3,
        text: '홈',
        width: '5.3125rem',
        isActive: true,
    }, {
        id: 4,
        icon: icon2,
        text: '문의',
        width: '4.3125rem',
        isActive: false,
    },
    {
        id: 5,
        icon: icon1,
        text: '마이인포',
        width: '4rem',
        isActive: false,
    }];

export default function NavBottom() {
    const [activeBtn, setActiveBtn] = useState('3');
    return (
        <div className="nav-bottom">
            {navInfo?.map(({ id, icon, text, width, isActive }) => (
                <div key={id} className={`nav-content ${(+activeBtn === id) ? 'active' : ''}`} id={id}
                    onClick={(event) => setActiveBtn(event.target.id) }
                >
                    <img id={id} src={icon} alt="" style={{ width: width }} />
                    <span id={id} className="text">{text}</span>
                </div>
            ))}
        </div>
    )
}