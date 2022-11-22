import './assets/sass/global.scss';
import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  // Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/Main';
import MyPage from './components/pages/MyPage';
import Header from './components/Header';
import NavBottom from './components/NavBottom';
import MyPageTest from './components/pages/Test';
import { getCookie, setCookie } from './utils';
// import img20 from './img20.png';
// import img14 from './img14.png';
// import img from './1.png';
import AttendPage from './components/AttendPage';
import FreeBoardCompose from './components/FreeBoardCompose';
import HomePageTopBanner from './components/HomePageTopBanner';
import FreeBoardView from './components/FreeBoardView';
import FreeBoardView2 from './components/FreeBoardView2';
import CSCenterPage from './components/pages/CSCenterPage';
import LiveCasinoPage from './components/LiveCasinoPage';
import EsportsPage from './components/EsportsPage';
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
import BetCombinationPage from './components/BetCombinationPage';
import MinigamesPage from './components/MinigamesPage';
import ScrollToTop from './helpers/scrollToTop';
// import img from './1.png';
import ScrollButton from './components/ScrollButton';
import HotelCasinoPage from './components/HotelCasinoPage';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const pathname = window.location.pathname;

  // const { pathname } = useLocation();
  // console.log(pathname, 'aaaaaaaaaaa');
  useEffect(() => {
    const datePickerInput = document.querySelectorAll(
      '.react-datepicker__input-container input'
    );
    const menu = document.querySelector('#main-menu');
    datePickerInput.forEach((input) => {
      input.addEventListener('focus', () => {
        menu.style.marginBottom = '-14.075rem';
      });
      input.addEventListener('blur', () => {
        menu.style.marginBottom = '0';
      });
    });
  }, []);
  useEffect(() => {
    const previousUrl = getCookie('previousUrl');
    const currentUrl = getCookie('currentUrl');
    if (!previousUrl) {
      setCookie('previousUrl', pathname);
      setCookie('currentUrl', pathname);
    } else {
      setCookie('previousUrl', currentUrl);
      setCookie('currentUrl', pathname);
    }
  }, [pathname]);

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
  useEffect(() => {
    const body = document.querySelector('body');
    console.log(window.location.pathname, 'window.location.pathname');
    if (window.location.pathname === '/') {
      body.style.background = '#000';
    } else {
      body.style.background = '#1e1e1e';
    }
  });

  const [distributorPageActive, setDistributorPageActive] = useState();

  console.log(distributorPageActive);

  return (
    <>
      {/* <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet> */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/live-casino"
            element={
              <LiveCasinoPage
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="/main"
            element={
              <div style={{}}>
                <Header />
                <MainPage />
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/freeboard"
            element={
              <>
                <Header />
                <ScrollButton />
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
                <ScrollButton />
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
                <ScrollButton />
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
                <ScrollButton />
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
                <ScrollButton />
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
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                  distributorPageActive={distributorPageActive}
                  setDistributorPageActive={setDistributorPageActive}
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
                <Header />
                <DistributorPage
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                  distributorPageActive={distributorPageActive}
                  setDistributorPageActive={setDistributorPageActive}
                />
                <NavBottom />
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
        <Routes>
          <Route
            path="/attendance"
            element={
              <>
                <AttendPage
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </>
            }
          ></Route>
        </Routes>
        {/* <Outlet /> */}
        <Routes>
          <Route
            path="/esports/*"
            element={
              <>
                <ScrollButton />
                <EsportsPage
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/hotelcasino/*"
            element={
              <>
                <ScrollButton />
                <HotelCasinoPage
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/bet-combination/*"
            element={
              <>
                <ScrollButton />
                <BetCombinationPage
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/minigame/*"
            element={
              <>
                {/* <img
                  className="img"
                  src={img}
                  alt=""
                  style={{ position: 'absolute', top: '0', opacity: '0.5' }}
                /> */}
                <ScrollButton />
                <MinigamesPage
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
