import React from "react";
import { useLanguage } from "./LanguageProvider";

function AdviceItem(props){
  const { translate } = useLanguage();
  return (    
    <div className="col">
      <div className="card" style={{width: "400px"}}>
        <div className="card-header  mt-4 fw-bold bg-primary text-white">
          {translate("adviceItem.advice")}
        </div>
        <div className="card-body">
          {
            props.data == null ? "" : 
              <p className="card-text lh-sm">
                <span className="fw-bold">{translate("adviceItem.forYou")}</span>
                <i className="bi-chat-text-fill ms-2 me-2 text-danger"></i>
                <span className="fw-bold">:</span> {props.data} 
              </p>
          }
          <p className="card-text lh-sm"></p>
        </div>
      </div>        
    </div>
  );
}

export default AdviceItem;