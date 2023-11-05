import React from "react";
import dog1 from '../images/dog1.jpg'
import { useLanguage } from "./LanguageProvider";

function About(){
  const { translate } = useLanguage();  
  return (
    <div className="container mb-8">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="container justify-content-center mt-4">{translate("about.author")}</h1>
          <div className="card">
            <div className="card-header">
              {translate("about.heading")}
            </div>
            <div>
              <img className="card-img" src={dog1} alt="Oscar" />
              <p className="fst-italic">{translate("about.imageSource")}</p>
            </div>
            {/* <div className="bg-img">
              <p>{translate("about.imageSource")}</p>
            </div> */}
            <div className="card-body">
              <h5 className="card-title">{translate("about.pms")}</h5>
              <p className="card-text lh-sm">{translate("about.description")}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;