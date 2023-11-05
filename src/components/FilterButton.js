import React, {useState, useEffect} from "react";
import { useLanguage } from "./LanguageProvider";

function FilterButton({updateIsUpdating, updateFilter, setResidentMode, setResidentActiveRowId}){
  const { translate } = useLanguage();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phoneNo,setPhoneNo] = useState("");
  const [email,setEmail] = useState("");
  const [filterData, setFilterData] = useState({firstName: "", lastName: "", phoneNo: "", email: ""});

  useEffect(()=>{
    updateFilter(filterData);
  },[filterData]);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
    //updateFilter("firstName", e.target.value);
    setFilterData({...filterData, firstName: e.target.value});
    console.log(firstName);
    console.log('----------');    
console.log(filterData);
  }
  const updateLastName = (e) => {
    setLastName(e.target.value);
    //updateFilter("lastName", e.target.value);
    setFilterData({...filterData, lastName: e.target.value});
    //updateFilter(filterData);
  }
  const updatePhoneNo = (e) => {
    setPhoneNo(e.target.value);
    //updateFilter("phoneNo", e.target.value);
    setFilterData({...filterData, phoneNo: e.target.value});
    //updateFilter(filterData);
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
    //updateFilter("email", e.target.value);
    setFilterData({...filterData, email: e.target.value});
    //updateFilter(filterData);
  }

  const clearFilter = () => {
    setFirstName("");
    setLastName("");
    setPhoneNo("");
    setEmail("");
    updateFilter("firstName", firstName);
    updateFilter("lastName", lastName);
    updateFilter("phoneNo", phoneNo);
    updateFilter("email", email);
  }

  const newResident = () =>{
    updateIsUpdating(true);
    setResidentMode("new");
    setResidentActiveRowId(0);
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
            <label htmlFor="firstName">{translate("filterButton.firstName")}</label>
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
            <label htmlFor="lastName">{translate("filterButton.lastName")}</label>
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
            <label htmlFor="phoneNo">{translate("filterButton.phoneNo")}</label>
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
            <label htmlFor="email">{translate("filterButton.email")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={clearFilter}
            >
              {translate("filterButton.clear")}
            </button>
          </div>
        </div>

        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => {newResident()}}
            >
              {translate("filterButton.newResident")}
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default FilterButton;