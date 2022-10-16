import React from "react";
// import { useNavigate } from 'react-router-dom';

function Card({ id, inactivBackground, activeBackground, icon, text, isActive, cardActive, setCardActive, path, disable, group, extra }) {
    // const navigate = useNavigate();
    return (
        <div className="card-container" id={id}
            onClick={(e) => {
                setCardActive(e.target.id);
                // console.log('aa');
                // navigate(path);
            }}

        >
            <div id={id} className={`main-div ${(+cardActive === id) ? 'active' : ''}`}
                style={{ background: `url(${(+cardActive === id) ? activeBackground : inactivBackground}) round` }}
            >
                <div className="card-content" id={id}>
                    <div className="content">
                        <p style={{ marginTop: !icon ? '-4.3rem' : '' }} id={id}>{text}</p>
                    </div>
                    <div className={`card-btn ${disable ? 'disable-style' : ''}`} id={id}>
                        <button id={id} className={`${(+cardActive === id) ? 'active-btn' : ''}`}>
                            <span className="text-btn" style={{ color: disable ? '#cccccc' : '' }} id={id}>
                                {disable ? '준비중' : (extra ? '설명보기' : '게임시작')}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
