import React from 'react'
import AlertIcon from '../../assets/mainPage/icons/warning.png'
import parse from 'html-react-parser';

const WarningMessage = ({ title, message1, mr1 = '', mr2 = '', mr3 = '', mr4 = '', isFirstMessageDark, message2, message3, message4 }) => {

    return (
        <div className="WarningMessageClass">
            <div className="alert-icon-and-text">
                <img src={AlertIcon} alt="" />
                <span>{title}</span>
            </div>
            <div className="alert-messages">
                {message1 && <span style={{ color: isFirstMessageDark ? "#ffdfbd" : '#ffdfbd', marginRight: mr1 }} className="first-span"><span className='correct'>✓</span>  {message1}</span>}
                {message2 && <span style={{ marginRight: mr2 }} className="second-span"><span className='correct'>✓</span> <span>{parse(message2)}</span></span>}
                {message3 && <span style={{ marginRight: mr3 }} className="third-span"><span className='correct'>✓</span>  <span>{parse(message3)}</span></span>}
                {message4 && <span style={{ marginRight: mr4 }} className="forth-span"><span className='correct' >✓</span>  {message4}</span>}
            </div>
        </div>
    )

}

export default WarningMessage

