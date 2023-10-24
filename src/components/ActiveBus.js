import React from "react";
import { useLanguage } from "./LanguageProvider";

function ActiveBus(props){
  const { translate } = useLanguage();
  return (    
    <div className="col">
      <div className="card" style={{width: "400px"}}>
        <div className="card-header  mt-4 fw-bold bg-primary text-white">
          {`Stop No: ${props.stopNo}`}
        </div>
        <div className="card-body">
          <h5 className="card-title">{translate("activeBus.activeBus")}</h5>
            {
              <div className="table-responsive-lg">
                <table className="table table-info table-hover table-striped table-bordered border-primary caption-top">
                  <thead> 
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">{translate("activeBus.destination")}</th>
                      <th scope="col">{translate("activeBus.routeNo")}</th>
                      <th scope="col">{translate("activeBus.vehicleNo")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      props.data == null ? <tr><td colSpan="4"></td></tr> : props.data === "error" ? <tr><td colSpan="4">{translate("errorMessage")}</td></tr> :
                        props.data.map((route) => {       
                          return (
                            <tr key={`${route.id}`}>
                              <th scope="row">{route.id}</th>
                              <td>{route.destination}</td>
                              <td>{route.routeNo}</td>
                              <td>{route.vehicleNo}</td>
                            </tr> 
                        )})}
                  </tbody>
                </table>
              </div>
            }
          </div>
        </div>
      </div>
  );
}

export default ActiveBus;