import React from "react";
// import img from '../../img.png'
import FreeBoardMain from "../FreeBoardMain";
import HomePageTopBanner from "../HomePageTopBanner";
// import Button from "../NavButtons/NavButtons";

export default function MyPage() {
    return (
        <>
            {/* <img style={{
                opacity: '0.5',
                position: 'absolute',
                top: '0'
            }} src={img} alt=""/> */}
            <HomePageTopBanner pageTitle='게시판' toPath={window.location.pathname.includes('/mypage') ? '/mypage' : '/main'} isFreeboard={true} />
            <FreeBoardMain />
        </>
    )
}
