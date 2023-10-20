import React, {useState} from "react";
import { useLanguage } from "./LanguageProvider";

function ResidentView(){
  const { translate } = useLanguage();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  return (
    <div className="container col-md-10 mx-auto">
      <div className="row mt-5">
        <div className="col mt-4">
          <label>{translate("resident.firstName")}</label>
        </div>  

        <div className="col">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="firstName" 
              placeholder="First Name"
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <label htmlFor="firstName">{translate("resident.firstName")}</label>
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
              onChange={(e)=>{setLastName(e.target.value)}}
            />
            <label htmlFor="lastName">{translate("resident.lastName")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="firstName" 
              placeholder="First Name"
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <label htmlFor="firstName">{translate("resident.firstName")}</label>
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
              onChange={(e)=>{setLastName(e.target.value)}}
            />
            <label htmlFor="lastName">{translate("resident.lastName")}</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <button type="button" className="btn btn-primary">{translate("resident.addResident")}</button>
          </div>
        </div>

      </div>



      <div className="table-responsive-lg mt-5 mb-5">
        <table className="table table-info table-hover table-striped table-bordered border-primary caption-top">
          <caption>List of users</caption>
          <thead> 
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col" className="th-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo This is a tsting Waht aabout ...OOODD </td>
              <td>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-wrench text-primary"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-ticket-detailed-fill text-success"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-trash-fill text-danger"></i></button>
              </td>
            </tr>
            <tr className="table-active table-warning">
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-wrench text-primary"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-ticket-detailed-fill text-success"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-trash-fill text-danger"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>           
                <button type="button" className="btn btn-light me-2"><i className="bi bi-wrench text-primary"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-ticket-detailed-fill text-success"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-trash-fill text-danger"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ResidentView;