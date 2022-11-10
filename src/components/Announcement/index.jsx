import Pagination from '../Pagination'
import React, { useEffect, useState } from 'react'
import AnnouncementTable from '../AnnouncementTable'
import Search from '../Search'
import NavBottom from '../NavBottom'
import './_announcementTable.scss'
import { useNavigate } from 'react-router-dom'

const Announcement = ({
    setSubActiveButton
}) => {

    const inboxArray = [
        {
            id: 0,
            type: "스포츠",
            title: "농구[쿼터] / 배구[세트] 스페셜 규정",
            isNew: true,
            time: "2021.06.28"
        },
        {
            id: 1,
            type: "스포츠",
            title: "야구스포츠 스페셜 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 2,
            type: "스포츠",
            title: "예비 도메인 안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 3,
            type: "기타",
            title: "은행별 점검시간안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 4,
            type: "기타",
            title: "스포츠 종목별 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 5,
            type: "미니게임",
            title: "미니게임 통합 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 6,
            type: "미니게임",
            title: "스포츠게임 관련 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 7,
            type: "카지노",
            title: "에볼루션카지노 이용안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 8,
            type: "스포츠",
            title: "라이브 베팅 기본 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 9,
            type: "스포츠",
            title: "에볼루션카지노 이용안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 10,
            type: "스포츠",
            title: "농구스포츠 스페셜 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 11,
            type: "스포츠",
            title: "핸디캡의 이해",
            isNew: false,
            time: "2021.06.28"
        },

    ]

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {
            setTimeout(() => {
                navigate('/cscenter')
                setSubActiveButton('/cscenter/all/announcement')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/cscenter/all/announcement')
        })
    }, [setSubActiveButton, navigate]);

    return (
        <div>
            <div className="" />

            <div style={{ borderRadius: "1em", margin: '1.875rem', marginTop: '0' }} className="shadow-subNavbar overflow-hidden">
                <div className="flex flex-col w-full announcementTable-container">
                    <AnnouncementTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                </div>
            </div>

            <div style={{ margin: '3.75rem 0' }} className="flex w-full justify-center">
                <Pagination withMarginBottom={false} page={page} setPage={setPage} />
            </div>

            <Search />
            <NavBottom />
        </div>
    )
}

export default Announcement
