import React from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsMatchResultPanel from '../SportsMatchResultPanel'

const SportsContent = ({ checkedState, setCheckedState, showSub = true, attachedArray, setAttachedArray, setPopupOpen }) => {
    return (
        <div className="w-full" style={{ marginTop: '1rem' }}>
            <DateSearchBar isGameResultsSearch={true} />
            <SportsMatchResultPanel />
        </div>
    )
}

export default SportsContent
