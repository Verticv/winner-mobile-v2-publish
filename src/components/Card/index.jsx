import React from "react";

function Card({ id, inactivBackground, activeBackground, icon, text, isActive, cardActive, setCardActive }) {
    return (
        <div className="card-container" id={id}
            onClick={(e) => setCardActive(e.target.id)}
        >
            <div id={id} className={`main-div ${(+cardActive === id) ? 'active' : ''}`}
                style={{ background: `url(${(+cardActive === id) ? activeBackground : inactivBackground}) round` }}
            >
                <div className="card-content" id={id}>
                    <div className="content">
                        <p style={{ marginTop: !icon ? '-4.3rem' : '' }} id={id}>{text}</p>
                    </div>
                    <div className="card-btn" id={id}>
                        <button id={id} className={`${(+cardActive === id) ? 'active-btn' : ''}`}>
                            <span className="text-btn" id={id}>
                                게임시작
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
