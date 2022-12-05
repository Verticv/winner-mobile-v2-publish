import React from 'react'
import Image8 from '../../assets/sports/8.png'
import Image9 from '../../assets/sports/9.png'
import Image10 from '../../assets/sports/10.png'
import Image11 from '../../assets/sports/11.png'
import Image12 from '../../assets/sports/12.png'
import Dot from '../../assets/sports/dot.png';

const EsportsMulti = () => {

    const Item = ({ number = "1.", title = "보유머니", text = "본인의 보유머니가 표시됩니다.", text2 = null, text3 = null, text4 = null, text5 = null, text6 = null, text7 = null, color1 = null, color2 = null, color3 = null, withoutP }) => (
        <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', letterSpacing: '-0.05rem', fontSize: '2.625rem' }}>
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
                <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <span style={{ color: "#828282", fontSize: '2.625rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text} <span className="ml-2px text-blue-r0056a6" style={{ color: '#4c98ff', marginLeft: '0.1rem', marginRight: '0.2rem',fontWeight: '600' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem', fontWeight: '600' }} className="mr-2px">{color2}</span><p style={{ margin: '0', display: 'inline-block' }}>{color3}</p></span>
            {text2 && (
                <span style={{ color: "#8c8c8c", display: 'flex', fontSize: '2.625rem', marginTop: '-0.3rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            )}
            {text3 && (
                <span style={{ color: "#8c8c8c", display: 'flex', marginTop: '-0.3rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
            )}
            {text4 && (
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text4}</span>
            )}
            {text5 && (
                <span style={{ color: "#8c8c8c", display: 'flex', margin: '-0.25rem 0 0 0.4rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text5}</span>
            )}
            {text6 && (
                <span style={{ color: "#8c8c8c", display: 'flex', marginTop: '-0.3rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text6}</span>
            )}
            {text7 && (
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text7}</span>
            )}
        </div>
    )

    return (
        <div style={{ borderRadius: "1em", marginTop: '-0.3rem' }} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image8} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '2.3rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="1." title="종목 및 경기선택" text="가. ① 게임종류를 선택합니다." text2="나. ② 경기를 선택합니다." withoutP />
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.6rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image9} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '2.4rem', borderRadius: '0.5rem', letterSpacing: '-0.05rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="w-full h-full rounded-xl p-20px">
                    <Item
                        number="2."
                        title="배당항목선택"
                        text="가. ①"
                        color1="[+]"
                        color2="[+]"
                        color3="버튼을 눌러서 원하는 배당을 선택합니다,"
                        // text2="선택합니다,"
                        text3="나. 선택한 경기(배당)가 ② 팔레이 리스트에 추가됩니다."
                        // text4="추가됩니다,"
                        text5="-최소 2개 이상 각각 다른 경기를 &nbsp;추가하세요."
                        text6="다. 2경기 이상 추가되면 ② 팔레이 버튼을 누릅니다."
                    // text7="누릅니다."
                    />

                    <div style={{ width: "fit-content", padding: '0.2rem 0.9rem', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.825rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px mt-60px">알아두세요!</div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.35rem' }}>
                        <span style={{ color: "#8c8c8c", fontSize: '2.625rem', display: 'flex' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-5px">※ 각 팀의 좌/우 가장자리에 있는 ①<p className="ml-2px text-blue-r0056a6" style={{ margin: '0 0.5rem 0 0', color: '#4c98ff',fontWeight: '600' }}>[+]</p><p style={{ color: "#e65454", margin: '0 0.5rem 0 0', fontWeight: '600' }}>[+]</p> 버튼을 누르면</span>
                    </div>
                    <div className="flex items-center" style={{ color: '#8c8c8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-4px"> 선택한 경기(배당)가 ②팔레이 리스트에 추가됩니다.</span>
                    </div>
                    <div className="flex items-center">
                        {/* <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-4px">②팔레이 리스트에 추가됩니다.</span> */}
                    </div>
                    <div className="flex items-center" style={{ color: '#8c8c8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-4px">※ 팔레이베팅은 최소 2개 이상 각각 다른 경기를 조합하여 </span>
                    </div>
                    <div className="flex items-center">
                        {/* <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-4px">다른 경기를 조합하여 베팅할 수 있습니다.</span> */}
                    </div>
                    <div className="flex items-center" style={{ color: '#8c8c8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-4px">베팅할 수 있습니다. (같은 게임 팔레이베팅 불가) </span>
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.3rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start" style={{}}>
                <img className="object-none" src={Image10} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '1.7rem', borderRadius: '0.5rem', letterSpacing: '-0.05rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="3." title="베팅금액 입력" text="가. ① 베팅금액을 입력합니다." text2="나. ② [확인] 버튼을 누르면 베팅이 완료됩니다." withoutP />
                    <div style={{ width: "fit-content", padding: '0.2rem 0.9rem', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.825rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px mt-60px">알아두세요!</div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" style={{ width: '0.75rem', marginRight: '0.8rem', marginTop: '-0.2' }} />
                        <span style={{ color: "#828282", fontSize: '2.625rem' }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">1/8 최대 : 최대 한도금액을 8로 나눈 금액 베팅</span>
                    </div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.1rem' }}>
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" style={{ width: '0.75rem', marginRight: '0.8rem', marginTop: '-0.2' }} />
                        <span style={{ color: "#828282", fontSize: '2.625rem' }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-5px">1/4 최대 : 최대 한도금액을 4로 나눈 금액 베팅</span>
                    </div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.2rem' }}>
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" style={{ width: '0.75rem', marginRight: '0.8rem', marginTop: '-0.2' }} />
                        <span style={{ color: "#828282", fontSize: '2.625rem' }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-5px">1/2 최대 : 최대 한도금액을 2로 나눈 금액 베팅 </span>
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.8rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image11} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '1.7rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="4." title="베팅완료" text="베팅이 완료되면 ① 베팅내역 화면이 나타나며" text2="상세 베팅내역을 확인할 수 있습니다." withoutP />
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.7rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image12} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.1rem 1.8rem", marginTop: '2.2rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="5." title="베팅내역확인" text="가. ① [내 베팅] 메뉴를 선택합니다." text2="나. ② 베팅내역을 확인할 수 있습니다." withoutP />
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />

        </div>
    )
}

export default EsportsMulti