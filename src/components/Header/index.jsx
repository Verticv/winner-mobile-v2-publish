import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import DropDownControls from '../dropdowns/DropDownControls';
import CountryDropDown from '../dropdowns/DropDownControls';
import arrow from '../../assets/Arrow.png'
import Koreaflag from '../../assets/Koreaflag.png'

function Header() {
  const [country, setCountry] = useState("KR")
  const [isCountryOpen, setCountryOpen] = useState()
  const navigate = useNavigate();
  

  const DropdownArrow = ({ isOpen, isWhite }) => (
    <>
      {isWhite ? (
        <img className="arrow" src={isOpen ? arrow : arrow} alt="arrow" />
      ) : (
        <img style={{ width: "5px" }} className="w-4 object-contain" src='' alt="arrow" />
      )}
    </>
  )
  const CountryButton = (
    <div className="country">
      <div className="rounded-full flex items-center justify-center">
        <img className="flag" src={country === "KR" ? Koreaflag : Koreaflag} alt="flag"></img>
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

        <div className="country-container">
          <DropDownControls
            buttonChild={CountryButton}
            isDropdownOpen={isCountryOpen}
            setDropdownOpen={setCountryOpen}
          >
            <div className="absolute" style={{ marginRight: "-90px" }}>
              <CountryDropDown setCountry={setCountry} country={country} />
            </div>
          </DropDownControls>
        </div>
      </div>
    </div>
  );
}

export default Header;
