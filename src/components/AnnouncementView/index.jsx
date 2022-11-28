import React from 'react'
import { useNavigate } from 'react-router'
import WinnerLogo from '../../assets/logo.png'
import './_announcementView.scss'


const AnnouncementView = () => {

    const SubtitleText = "스페셜 - 1쿼터 및 3쿼터 실시간 \n (3쿼터는 2쿼터 종료 후 업데이트됩니다.)"
    const BodyText1 = "1,3쿼터 [핸디캡] \n 양 팀의 1,3쿼터 승패를 맞추는 게임입니다. \n 1,3쿼터 [오버/언더] \n 1,3쿼터 양 팀 득점 총합의 언더/오버를 맞추는 게임입니다. \n 1쿼터 핸디 + 언더/오버 + 첫2 + 첫3 + 첫자 크로스 배팅 가능"
    const BodyText2 = "1쿼터/3쿼터 핸디캡[1Q], 1쿼터 언더/오버[1Q 언더/오버] 종목 대상경기의 1쿼터 경기기록만을 기준점에 따라 핸디캡과 언더/오버 규칙에 적용하는 방식입니다. \n 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다."
    const BodyText3 = "모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다."
    const BodyText4 = "https://www.nba.com \n https://www.kbl.or.kr \n https://www.wkbl.or.kr/main/index.asp"
    const BodyText5 = "[첫 블로킹 득점] \n 처음으로 블로킹 득점을 기록한 팀을 맞추는 게임 입니다. \n  블로킹으로 점수를 획득한 팀으로 마감 처리됩니다."
    const BodyText6 = "[첫 서브 득점] \n 처음으로 서브 득점을 기록한 팀을 맞추는 게임 입니다. \n 서브로 점수를 획득한 팀으로 마감 처리됩니다. \n 세트 핸디캡 및 오버/언더 [세트] 종목은 대상경기의 [세트] 양 팀의 총 득점의 합산으로 경기결과가 적용됩니다. \n WINNER 크로스배팅의 경우 세트별 오버/언더로 업데이트 되지만, [세트]의 경우 양팀 합산 [세트] 점수로 결과값이  적용된다는점 참고 바랍니다."
    const BodyText7 = "[세트] 핸디 + 오버/언더 크로스배팅 가능 \n [세트 핸디 및 오버/언더]  + [첫 서브 득점] +  [첫 블로킹 득점] 크로스배팅 가능 \n 1세트 / 2세트 / 3세트 /4세트 실시간 업데이트 진행 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다."

    const BodyText8 = "모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다."
    const BodyText9 = "https://www.kovo.co.kr/main.asp"


    const navigate = useNavigate();
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) : str;
    }

    return (
        <div className="w-full announcementView">

            <div style={{}} className='announcementView-1'>
                <div className="announcementView1 rounded-2xl overflow-hidden shadow-subNavbar border border-gray-dddddd mt-20px">
                    {/* TITLE */}
                    <div className="announcementView2 bg-gray-fafafa border-b border-gray-ededed flex flex-wrap  items-center">
                        <div className='announcementView3 flex w-full justify-center'>
                            <div
                                // style={{ backgroundColor: "#41b06c", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', paddingBottom: '0', width: 'fit-content' }}
                                className="announcementView4 rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                            >
                                {truncate('스포츠스포츠스포츠', 6, 6)}
                            </div>
                        </div>
                        <div className="announcementView5 flex justify-center text-5xl w-full font-spoqaMedium tracking-tight text-gray-r454545">
                            농구[쿼터]/배구[세트] 스페셜 규정
                        </div>
                    </div>

                    <div className="announcementView6 relative bg-gray-fafafa border-b border-gray-dddddd flex items-center">
                        <img className="h-12 object-contain" src={WinnerLogo} alt="" />
                        <div className='announcementView7 flex mt-5'>
                            <div style={{backgroundColor:'#555555'}} className='announcementView8 bg-gray-dddddd'></div>
                            <p className="text-gray-r7b7b7b tracking-tight -mt-1 font-spoqa">2021.06.28</p>
                        </div>
                    </div>

                    {/* SENDER */}
                    <div className="announcementView9">
                        <p className="announcementView9-p1">
                            {SubtitleText.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText1.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText2.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText3.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText4.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText5.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText6.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText7.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText8.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                        <p className="announcementView9-p1">
                            {BodyText9.split('\n').map((item, i) =>
                                <p key={i} className="announcementView9-p2">{item}</p>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* <div style={{ margin: '1.875rem', marginTop: '3.75rem', marginBottom: '14rem', paddingBottom: '0.1rem' }} className="flex items-start justify-between">
                <button style={{ height: '7.3125rem', padding: '1px', fontSize: '2.8125rem', marginRight: '0.75rem' }} className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75">
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">이전</span>
                    </div>
                </button>

                <button
                    style={{ height: '7.3125rem', padding: '1px', fontSize: '2.8125rem', marginRight: '0.75rem' }}
                    className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75"
                    onClick={() => navigate('/cscenter/all/announcement')}
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">목록보기</span>
                    </div>
                </button>

                <button
                    style={{ height: '7.3125rem', padding: '1px', fontSize: '2.8125rem' }}
                    className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75"
                // onClick={() => history.push('/freeboard/view2')}
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">다음</span>
                    </div>
                </button>
            </div> */}
            {/* <NavBottom /> */}

            <div style={{ margin: '2.4rem 1.86rem', paddingBottom: '19.225rem' }} className="w-full flex items-start justify-between">
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="hover shadow-to-box">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '', display: 'flex', marginTop: '0.2rem'
                            }}>이전</span>
                        </div>
                    </div>
                </button>
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="hover shadow-to-box">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                            onClick={() => navigate('/cscenter/all/announcement')}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '', display: 'flex', marginTop: '0.2rem'
                            }}>목록보기</span>
                        </div>
                    </div>
                </button>

                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="hover shadow-to-box">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}

                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '', display: 'flex', marginTop: '0.2rem'
                            }}>다음</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AnnouncementView
