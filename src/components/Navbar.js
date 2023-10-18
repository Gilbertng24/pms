import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import { useLanguage } from './LanguageProvider';

function Navbar(){
  const { language, changeLanguage } = useLanguage();
  const { translate } = useLanguage();

  useEffect(() => {
    // This function will run when the component is first loaded
    console.log('Navbar.....Page has been refreshed or loaded for the first time');
  }, []);

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
            <Link to="/" className="nav-item nav-link active" aria-current="page">{translate("navbar.home")}</Link>
            <Link to="/resident" className="nav-item nav-link">{translate("navbar.resident")}</Link>
            <Link to="/Fob" className="nav-item nav-link">{translate("navbar.fob")}</Link>
            <Link to="/Locker" className="nav-item nav-link">{translate("navbar.locker")}</Link>
            <Link to="/about" className="nav-item nav-link">{translate("navbar.about")}</Link>

            {/* button for toggling between English and French */}
            <button className="btn btn-outline-light" onClick={() => changeLanguage(language === "en" ? "fr" : "en")}>
              {language === 'en' ? 'Français' : 'English'}
            </button>

          </div>
          <form className="d-flex ms-3">
            <input className="form-control me-2" type="search" placeholder={translate("navbar.search")} aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">{translate("navbar.go")}</button>   
          </form>
        </div>
      </div>
    </nav>        
  )
};

export default Navbar;