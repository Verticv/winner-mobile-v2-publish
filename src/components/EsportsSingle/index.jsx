import React from 'react'
import Image3 from '../../assets/sports/3.png'
import Image4 from '../../assets/sports/4.png'
import Image5 from '../../assets/sports/5.png'
import Image6 from '../../assets/sports/6.png'
import Image7 from '../../assets/sports/7.png'
// import Image4 from '../../images/esports/4.png'
import Dot from '../../assets/sports/dot.png'

const EsportsSingle = () => {

    const Item = ({ number = "1.", title = "보유머니", text = "본인의 보유머니가 표시됩니다.", text2 = null, text3 = null, color1 = null, color2 = null, color3 = null, withoutP }) => (
        <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', letterSpacing: '-0.04rem' }}>
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.25rem' }}>
                <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <span style={{ color: "#828282", fontSize: '2.0625rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text} <span className="ml-2px text-blue-r0056a6" style={{ color: '#2980b9', marginLeft: '0.5rem', marginRight: '0.2rem' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem' }} className="mr-2px">{color2}</span><p style={{ margin: withoutP ? '0' : '' }}>{color3}</p></span>
            {text2 && (
                <span style={{ color: "#8c8c8c", display: 'flex', fontSize: '2.0625rem', marginTop: '-0.3rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            )}
            {text3 && (
                <span style={{ color: "#8c8c8c", display: 'flex' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
            )}
        </div>
    )

    return (
        <div style={{ borderRadius: "1em", marginTop: '-0.3rem' }} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image3} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '2.3rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="1." title="종목 및 경기선택" text="가. ① 게임종류를 선택합니다." text2="나. ② 경기를 선택합니다." withoutP />
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.6rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image4} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '2.3rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="2." title="배당항목 선택" text="원하는 ① 배당을 선택합니다." withoutP />
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.6rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start" style={{}}>
                <img className="object-none" src={Image5} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '1.7rem', borderRadius: '0.5rem', letterSpacing: '-0.05rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="3." title="베팅금액 입력" text="가. ① 베팅금액을 입력합니다." text2="나. ② [확인] 버튼을 누르면 베팅이 완료됩니다." withoutP />
                    <div style={{ width: "fit-content", padding: '0.2rem 0.9rem', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.25rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px mt-60px">알아두세요!</div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" style={{ width: '0.75rem', marginRight: '0.8rem', marginTop: '-0.2' }} />
                        <span style={{ color: "#828282", fontSize: '2.0625rem' }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">1/8 최대 : 최대 한도금액을 8로 나눈 금액 베팅</span>
                    </div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.1rem' }}>
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" style={{ width: '0.75rem', marginRight: '0.8rem', marginTop: '-0.2' }} />
                        <span style={{ color: "#828282", fontSize: '2.0625rem' }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-5px">1/4 최대 : 최대 한도금액을 4로 나눈 금액 베팅</span>
                    </div>
                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '0.2rem' }}>
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" style={{ width: '0.75rem', marginRight: '0.8rem', marginTop: '-0.2' }} />
                        <span style={{ color: "#828282", fontSize: '2.0625rem' }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-5px">1/2 최대 : 최대 한도금액을 2로 나눈 금액 베팅 </span>
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.8rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image6} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '1.7rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="4." title="베팅완료" text="베팅이 완료되면 ① 베팅내역 화면이 나타나며" text2="상세 베팅내역을 확인할 수 있습니다." withoutP />
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.7rem auto 3.7rem' }} />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image7} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.1rem 1.8rem", marginTop: '2.2rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <Item number="5." title="베팅내역확인" text="가. ① [내 베팅] 메뉴를 선택합니다." text2="나. ② 베팅내역을 확인할 수 있습니다." withoutP />
                </div>
            </div>

            {/* <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.8rem auto 3.7rem' }} /> */}

        </div>
    )
}

export default EsportsSingle