import React, {useState} from "react";
import { useLanguage } from "./LanguageProvider";

function ResidentList({residents, activeRowId}){
  const { translate } = useLanguage();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  const noOfResidentHeading = residents.length <= 1 ? `${residents.length} ${translate("residents.resident")}` : `${residents.length} ${translate("residents.residents")}`;


//console.log(residents);

  return (
    <>


      {/* List of residents */}
      <div className="table-responsive-lg mt-5 mb-5">
        <table className="table table-info table-hover table-striped table-bordered border-primary caption-top">
          <caption className="fw-bold">{noOfResidentHeading}</caption>
          <thead> 
            <tr>
              <th scope="col">#</th>
              <th scope="col">{translate("residents.firstName")}</th>
              <th scope="col">{translate("residents.lastName")}</th>
              <th scope="col">{translate("residents.gender")}</th>
              <th scope="col" className="th-sm">{translate("residents.actions")}</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((res) => (         
                <tr key={`${res.id}`} className={activeRowId === res.id ? "table-active table-warning table-bordered border-primary" : ""}>
                  <th scope="row">{res.id}</th>
                  <td>{res.firstName}</td>
                  <td>{res.lastName}</td>
                  <td>{res.gender}</td>
                  <td>
                    <button type="button" className="btn btn-light me-2"><i className="bi bi-wrench text-primary"></i></button>
                    <button type="button" className="btn btn-light me-2"><i className="bi bi-ticket-detailed-fill text-success"></i></button>
                    <button type="button" className="btn btn-light me-2"><i className="bi bi-trash-fill text-danger"></i></button>
                  </td>    
                </tr> 
            ))}
   
            
            {/* <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>           
                <button type="button" className="btn btn-light me-2"><i className="bi bi-wrench text-primary"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-ticket-detailed-fill text-success"></i></button>
                <button type="button" className="btn btn-light me-2"><i className="bi bi-trash-fill text-danger"></i></button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default ResidentList;