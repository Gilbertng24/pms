import React from "react";
import { useLanguage } from "./LanguageProvider";
// import { nanoid } from "nanoid";
// import { format } from 'date-fns-tz';

function AdviceItem(props){
  const { translate } = useLanguage();
  // const dateTimeFormat = 'MMMM dd, yyyy HH:mm:ss';
  // const vancouverTimeZone = 'America/Vancouver';

console.log(props);

  //id, destination, routeNo, vehicleNo
//console.log(props);  
  return (    
    // <div className="row">
      <div className="col">
        {/* <h1 className="container mt-4">{`Stop No: ${props.stopNo}`}</h1> */}
        <div className="card" style={{width: "400px"}}>
          <div className="card-header  mt-4 fw-bold bg-primary text-white">
            {translate("adviceItem.advice")}
          </div>
          {/* <img className="card-img" src="https://pixelprowess.com/i/mug-rex.jpg" alt="Oscar" /> */}
          <div className="card-body">
            {/* <h5 className="card-title">Active buses</h5> */}
            {/* <h5 className="card-subtitle">Mayor of Binaryville</h5> */}
            {
              props.data == null ? "" : 
                <p className="card-text lh-sm">
                  {translate("adviceItem.forYou")}: {props.data} 
                </p>
            }
            <p className="card-text lh-sm"></p>
            {/* <a href="#" className="card-link">more info</a> */}
          </div>
          {/* <div className="card-footer">
            Now on sale
          </div>  */}
        </div>        
      </div>
    // </div>
  );
}

export default AdviceItem;