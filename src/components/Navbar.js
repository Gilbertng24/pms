import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useLanguage } from './LanguageProvider';

function Navbar(){
  const { language, changeLanguage } = useLanguage();
  const { translate } = useLanguage();
  const [ searchValue, setSearchValue] = useState("");
  const searchResident = () => {
    <Link to="/residents"></Link>
  }

  return (
    <nav className="navbar navbar-expand-xl bg-primary navbar-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar_pms_toggler" aria-controls="navbar_pms_toggler" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand">
          <i className="bi bi-heart-fill me-2 text-danger"></i>
          {translate("navbar.company")}
        </div>
        <div className="collapse navbar-collapse" id="navbar_pms_toggler">
          <div className="navbar-nav navbar-nav-scroll ms-auto">
            <Link to="/pms" className="nav-item nav-link active" aria-current="page">{translate("navbar.home")}</Link>
            <Link to={{
                pathname: '/residents',
                state: {
                  prop: {searchValue}
                },
              }} 
              className="nav-item nav-link"
            >
              {translate("navbar.resident")}
            </Link>
            <Link to="/about" className="nav-item nav-link">{translate("navbar.about")}</Link>
            <Link to="/documentation" className="nav-item nav-link">{translate("navbar.documentation")}</Link>

            {/* button for toggling between English and French */}
            <button className="btn btn-outline-light" onClick={() => changeLanguage(language === "en" ? "fr" : "en")}>
              {language === 'en' ? 'Français' : 'English'}
            </button>

          </div>
          <form className="d-flex ms-3" onSubmit={searchResident}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder={translate("navbar.search")} 
              aria-label="Search" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Link to={{
                pathname: '/residents',
                state: {
                  prop: {searchValue}
                },
              }}
            className="nav-item nav-link" >
            <button 
              className="btn btn-outline-light" type="submit">{translate("navbar.go")}</button>   
              </Link>
          </form>
        </div>
      </div>
    </nav>        
  )
};

export default Navbar;