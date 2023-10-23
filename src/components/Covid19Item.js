import React from "react";
import { useLanguage } from "./LanguageProvider";
// import { nanoid } from "nanoid";
// import { format } from 'date-fns-tz';

function Covid19Item(props){
  const { translate } = useLanguage();
  // const dateTimeFormat = 'MMMM dd, yyyy HH:mm:ss';
  // const vancouverTimeZone = 'America/Vancouver';

console.log(props);

  //id, destination, routeNo, vehicleNo
//console.log(props);  
  return (    
    <div className="row">
      <div className="col">
        {/* <h1 className="container mt-4">{`Stop No: ${props.stopNo}`}</h1> */}
        <div className="card" style={{width: "400px"}}>
          <div className="card-header  mt-4 fw-bold bg-primary text-white">
            {`Stop No: ${props.stopNo}`}
          </div>
          {/* <img className="card-img" src="https://pixelprowess.com/i/mug-rex.jpg" alt="Oscar" /> */}
          <div className="card-body">
            <h5 className="card-title">{translate("activeBus.activeBus")}</h5>
            {/* <h5 className="card-subtitle">Mayor of Binaryville</h5> */}
            {
              props.data == null ? "" : 
                props.data.map((route) => {
                  return (
                    <p className="card-text lh-sm" key={route.id}>
                      {translate("activeBus.destination")}: {route.destination} - {translate("activeBus.routeNo")}: {route.routeNo} - {translate("activeBus.vehicleNo")}: {route.vehicleNo}
                    </p>
                  )
                })
            }
            <p className="card-text lh-sm"></p>
            {/* <a href="#" className="card-link">more info</a> */}
          </div>
          {/* <div className="card-footer">
            Now on sale
          </div>  */}
        </div>
      </div>
    </div>
  );
}

export default Covid19Item;