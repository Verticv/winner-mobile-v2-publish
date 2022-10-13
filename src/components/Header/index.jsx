import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import DropDownControls from '../dropdowns/DropDownControls';
import CountryDropDown from '../CountryDropDown';
import arrow from '../../assets/Arrow.png'
import Koreaflag from '../../assets/Koreaflag.png'
import UKflag from '../../assets/second-flag.png'

function Header() {
  const [country, setCountry] = useState("KR")
  const [isCountryOpen, setCountryOpen] = useState()
  const navigate = useNavigate();


  const DropdownArrow = ({ isOpen, isWhite }) => (
    <>
      {isWhite ? (
        <img className="arrow" src={isOpen ? arrow : arrow} alt="arrow" />
      ) : (
        <img className="arrow" src={isOpen ? arrow : arrow} alt="arrow" />
      )}
    </>
  )
  const CountryButton = (
    <div className="country">
      <div className="rounded-full flex items-center justify-center">
        <img className="flag" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
      </div>
      <label className="font-spoqaBold text-white cursor-pointer">{country}</label>
      <DropdownArrow isWhite isOpen={isCountryOpen} />
    </div>
  )
  return (
    <div className="header-container">
      <div className="header">
        <img
          style={{
            marginTop: "2.0625rem", width: '20.3rem',
            height: '5rem'
          }}
          className=" object-contain cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => navigate('/')}
        />

        <div className="country-container" onClick={() => setCountryOpen((prev => !prev))}>
          <DropDownControls
            buttonChild={CountryButton}
            isDropdownOpen={isCountryOpen}
            setDropdownOpen={setCountryOpen}
          >
            <div className="absolute" style={{ right: "0.7rem", top: '2rem', position: 'absolute', zIndex: '40' }}>
              <CountryDropDown setCountry={setCountry} country={country} />
            </div>
          </DropDownControls>
        </div>
      </div>
    </div>
  );
}

export default Header;
