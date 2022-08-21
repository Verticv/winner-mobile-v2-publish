import './assets/sass/global.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/Main';
import MyPage from './components/pages/MyPage';
import Header from './components/Header';
import NavBottom from './components/NavBottom';
// import img2 from './img2.png';
// import img from './img3.png';
// import img2 from './img4.png';
import FreeBoardCompose from './components/FreeBoardCompose';
import HomePageTopBanner from './components/HomePageTopBanner';
import FreeBoardView from './components/FreeBoardView';
import FreeBoardView2 from './components/FreeBoardView2';

function App() {
  useEffect(() => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const bodyWidth = body.offsetWidth;
    if (bodyWidth <= 1242) {
      const fontSize = (bodyWidth * 16) / 1242;
      html.style.fontSize = `${fontSize}px`;
    }
    window.addEventListener('resize', () => {
      const bodyWidth = body.offsetWidth;
      if (bodyWidth <= 1242) {
        const fontSize = (bodyWidth * 16) / 1242;
        html.style.fontSize = `${fontSize}px`;
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/freeboard" element={<MyPage />} />
      </Routes>
      <Routes>
        <Route
          path="/freeboard/compose"
          element={
            <>
              {/* <img
                className="img"
                src={img2}
                alt=""
                style={{ position: 'absolute', top: '0', opacity: '0.5' }}
              /> */}
              <HomePageTopBanner
                pageTitle="게시판"
                toPath={
                  window.location.pathname.includes('/mypage')
                    ? '/mypage'
                    : '/main'
                }
                isFreeboard={true}
              />
              <FreeBoardCompose />
            </>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/freeboard/view/*"
          element={
            <>
              {/* <img
                src={img}
                alt=""
                style={{ position: 'absolute', top: '0', opacity: '0.5' }}
              /> */}
              <HomePageTopBanner
                pageTitle="게시판"
                toPath={
                  window.location.pathname.includes('/mypage')
                    ? '/mypage'
                    : '/main' 
                }
                isFreeboard={true}
              />
              <FreeBoardView />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/freeboard/view2/*"
          element={
            <>
              {/* <img
                src={img2}
                alt=""
                style={{ position: 'absolute', top: '0', opacity: '0.5' }}
              /> */}
              <HomePageTopBanner
                pageTitle="게시판"
                toPath={
                  window.location.pathname.includes('/mypage')
                    ? '/mypage'
                    : '/main'
                }
                isFreeboard={true}
              />
              <FreeBoardView2 />
            </>
          }
        />
      </Routes>
      <NavBottom />
    </Router>
  );
}

export default App;
