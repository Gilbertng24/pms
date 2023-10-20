import React, {useState} from "react";
import { useLanguage } from "./LanguageProvider";

function FilterButton({updateIsUpdating, updateFilter}){
  const { translate } = useLanguage();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phoneNo,setPhoneNo] = useState("");
  const [email,setEmail] = useState("");

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
    updateFilter("firstName", e.target.value);
  }
  const updateLastName = (e) => {
    setLastName(e.target.value);
    updateFilter("lastName", e.target.value);
  }
  const updatePhoneNo = (e) => {
    setPhoneNo(e.target.value);
    updateFilter("phoneNo", e.target.value);
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
    updateFilter("email", e.target.value);
  }


  return (
    <>

      {/* Filter and new resident button */}
      <div className="row mt-5 border-bottom border-danger">
        <div className="col mt-4 fw-bold">
          <label>{translate("residents.filterBy")}</label>
        </div>  

        <div className="col">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="firstName" 
              placeholder="First Name"
              value={firstName}
              onChange={updateFirstName}
            />
            <label htmlFor="firstName">{translate("residents.firstName")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="lastName" 
              placeholder="Last Name"
              value={lastName}
              onChange={updateLastName}
            />
            <label htmlFor="lastName">{translate("residents.lastName")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="phoneNo" 
              placeholder="Phone No"
              value={phoneNo}
              onChange={updatePhoneNo}
            />
            <label htmlFor="phoneNo">{translate("residents.phoneNo")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="email" 
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
            <label htmlFor="email">{translate("residents.email")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => {updateIsUpdating(true)}}
            >
              {translate("residents.newResident")}
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default FilterButton;