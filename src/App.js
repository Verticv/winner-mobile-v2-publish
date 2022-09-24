import './assets/sass/global.scss';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/Main';
import MyPage from './components/pages/MyPage';
import Header from './components/Header';
import NavBottom from './components/NavBottom';
import MyPageTest from './components/pages/Test';
// import img20 from './img20.png';
// import img14 from './img14.png';
// import img13 from './img13.png';
// import img26 from './img26.png';
import FreeBoardCompose from './components/FreeBoardCompose';
import HomePageTopBanner from './components/HomePageTopBanner';
import FreeBoardView from './components/FreeBoardView';
import FreeBoardView2 from './components/FreeBoardView2';
import CSCenterPage from './components/pages/CSCenterPage';
// import ContactViewPage from './components/pages/ContactViewPage';
// import ContactCompose from './components/ContactCompose';
// import Faq from './components/Faq';
// import MinigamePolicy from './components/MinigamePolicy';
// import EditInfo from './components/EditInfo';
// import Inbox from './components/Inbox';
// import MoneyPage from './components/MoneyPage';
// import PointsPage from './components/PointsPage';
// import PointsAccumulateHistory from './components/PointsAccumulateHistory';
import DistributorPage from './components/DistributorPage';
import AuthenticationPage from './components/AuthenticationPage';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
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
      {/* <Header /> */}
      <Routes>
        <Route
          path="/main"
          element={
            <>
              <Header />
              <MainPage />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/freeboard"
          element={
            <>
              <Header />
              <MyPage />
              <NavBottom />
            </>
          }
        />
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
              <Header />
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
              <NavBottom />
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
              <Header />
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
              <NavBottom />
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
              <Header />
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
              <NavBottom />
            </>
          }
        />
      </Routes>
      <Routes>
        {/* cscenter  page*/}
        <Route
          path="/cscenter/*"
          element={
            <>
              {/* <Header /> */}
              <CSCenterPage />
              {/* <NavBottom /> */}
            </>
          }
        />
      </Routes>
      {/* my page */}
      <Routes>
        <Route
          path="/mypage/*"
          element={
            <>
              {/* <img
                src={img20}
                alt=""
                style={{ position: 'absolute', top: '0', opacity: '0.5' }}
              /> */}
              <MyPageTest
              // isAuthenticated={isAuthenticated}
              // setAuthenticated={setAuthenticated}
              />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/distributor-page"
          element={
            <>
              {/* <img
                src={img26}
                alt=""
                style={{ position: 'absolute', top: '0', opacity: '0.5' }}
              /> */}
              <DistributorPage
              // isAuthenticated={isAuthenticated}
              // setAuthenticated={setAuthenticated}
              />
            </>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AuthenticationPage
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
              />
              {/* hello */}
            </>
          }
        ></Route>
      </Routes>

      <Outlet />
    </Router>
  );
}

export default App;
