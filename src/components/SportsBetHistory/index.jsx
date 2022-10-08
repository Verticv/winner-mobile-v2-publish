import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from '../SportsBetHistoryPanel'
// import ScrollButton from '../ScrollButton'
import SelectAllButton from '../SelectAllButton'

const SportsBetHistory = ({ checkedState, setCheckedState, showSub = true, attachedArray, setAttachedArray, setPopupOpen }) => {

    const [isAllSelected, setAllSelected] = useState(false)

    return (
        <div className="SportsBetHistory" style={{

        }}>

            <DateSearchBar isGameResultsSearch={true} />

            {/* isLeagueSearch={false} withBlackButton hasDateSuggestion={false} */}
            <div className="w-full h-full z-10" style={{ margin: '1.9rem 1.875rem 3.75rem' }}>

                {/* <ScrollButton /> */}

                <div className="">
                    <SportsBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen} />
                </div>

                <div style={{ marginTop: '3.75rem' }}></div>
                <SelectAllButton btn2Text='내역올리기' buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />


            </div>

        </div>
    )
}

export default SportsBetHistory
