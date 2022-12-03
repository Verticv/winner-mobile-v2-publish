import React from 'react'
import Image1 from '../../assets/tvBet/tv2_1.png'
import Image2 from '../../assets/tvBet/tv2_2.png'
import Dot from '../../assets/sports/dot.png'

const TvBetInfo = () => {

  const LongItem2 = ({ number = "8.", title = "메뉴", marginTop, text = "내베팅 : 상세한 베팅내역 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text3, text1_1, marginBottom }) => (
    <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.625rem', marginBottom: marginBottom }}>
      <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <div className="flex" style={{ marginTop: '-0.2rem', display: 'flex', alignItems: 'center' }}>
        <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem', marginTop: '-0.2' }} />
        <span style={{ color: "#8c8c8c", }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text}</span>
      </div>
      {text1_1 && (
        <div className="flex" style={{ marginTop: '-0.2rem', display: 'flex', alignItems: 'center' }}>
          <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem', marginTop: '-0.2', visibility: 'hidden' }} />
          <span style={{ color: "#8c8c8c", }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text1_1}</span>
        </div>
      )}
      <div className="flex" style={{ marginTop: '-0rem', display: 'flex', alignItems: 'center' }}>
        <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem' }} />
        <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
      </div>
      {text3 && (
        <div className="flex" style={{ marginTop: '-0rem', display: 'flex', alignItems: 'center' }}>
          <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem' }} />
          <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
        </div>
      )}
    </div>
  )

  return (
    <div style={{ borderRadius: "1em", }} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">

      <div className="flex space-x-20px items-start" style={{ marginTop: '-0.3rem' }}>
        <img className="object-none" src={Image1} alt="" style={{ width: '70rem' }} />
        <div style={{ backgroundColor: "#2b2b2a", height: "", marginTop: '1.5rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
          <div style={{ padding: '1.8rem', letterSpacing: '-0.06rem', paddingTop: '2.8rem' }}>
            <LongItem2 number='1.' title='게임 및 배당선택' text='① 게임종류를 선택합니다.' text2='원하는 ② ③ 배당을 선택합니다.' marginTop='-0.5rem' />

            <div style={{ width: "fit-content", padding: '0.2rem 0.9rem', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.825rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px mt-60px">알아두세요!</div>
            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '0.35rem' }}>
              <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">
                ※ ④[이벤트정보] 화면에서 현재 ‘라이브’ 중인 게임과
              </span>
              <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">
                ‘예정된’ 게임이벤트를 확인할 수 있습니다.
              </span>
              <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">
                원하는 이벤트를 선택하면 ‘배당판’이 활성화되며
              </span>
              <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">
                배당을 선택하면 베팅이 가능합니다.
              </span>
            </div>

            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '3rem' }}>
              <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">
                ※ ⑤[플레이방법] 메뉴에서 각 게임별 이용방법과
              </span>
              <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">
                규정 등 확인 가능합니다.
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="h-px w-full bg-gray-dddddd" />
      <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
      <div className="flex space-x-20px items-start" style={{ padding: '0rem 0 0.5rem' }}>
        <img className="object-none" src={Image2} alt="" style={{ width: '70rem' }} />
        <div style={{
          backgroundColor: "#2b2b2a", height: "",
          marginTop: '1.5rem', borderRadius: '0.5rem'
        }} className="w-full h-full rounded-xl p-20px">
          <div style={{ padding: '1.8rem', letterSpacing: '-0.06rem', paddingTop: '2.8rem' }}>
            <LongItem2 number='2.' title='금액입력 및 베팅완료' text='① 베팅금액을 입력합니다.' text2='② [베팅하기] 버튼을 누르면 베팅이 완료됩니다.' text3='③ [베팅기록] 메뉴에서 베팅내역을' marginTop='-0.5rem' />
            <span style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">
              확인 할 수 있습니다.
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TvBetInfo
