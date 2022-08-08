import React from "react";
import jackpot from '../../assets/Jackpot.png';

function Jackpot() {
    return (
        <div className="jackpot-container">
            <img src={jackpot} alt="" />
            <div className="jackpot-range">
                <p>₩1,234,567,890</p>
            </div>
        </div>
    );
}

export default Jackpot;
