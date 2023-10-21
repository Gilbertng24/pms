import React, {useState, useRef} from "react";
import { useLanguage } from "./LanguageProvider";


function ResidentList({residents, activeRowId, editResident, viewResident, deleteResident}){
  const { translate } = useLanguage();
  const [residentId,setResidentId] = useState("");
  const noOfResidentHeading = residents.length <= 1 ? `${residents.length} ${translate("residents.resident")}` : `${residents.length} ${translate("residents.residents")}`;
  const modalCancelButtonRef = useRef(null);

  const residentEdit = (resident) => {
    editResident(resident);
    //console.log("edit.." + id);
  }

  const residentView = (resident) => {
    viewResident(resident);
    //console.log("view.." + id);
  }

  const residentDelete = (id) => {
    deleteResident(id);
    //close the modal dialog
    modalCancelButtonRef.current.click();
  }


  const confirmModal = (
    <div className="modal fade" id="deleteConfirmModal" tabIndex="-1" aria-labelledby="deleteConfirmModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteConfirmModalLabel">{translate("residentList.confirmDelete")}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          {translate("residentList.deleteMessage")}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={modalCancelButtonRef}>{translate("residentList.cancel")}</button>
            <button type="button" className="btn btn-primary" onClick={() => residentDelete(residentId)}>{translate("residentList.confirm")}</button>
          </div>
        </div>
      </div>
    </div>    
  )

  return (
    <>


      {/* List of residents */}
      <div className="table-responsive-lg mt-5 mb-5">

        {confirmModal}

        <table className="table table-info table-hover table-striped table-bordered border-primary caption-top">
          <caption className="fw-bold">{noOfResidentHeading}</caption>
          <thead> 
            <tr>
              <th scope="col">#</th>
              <th scope="col">{translate("residents.firstName")}</th>
              <th scope="col">{translate("residents.lastName")}</th>
              <th scope="col">{translate("residents.phoneNo")}</th>
              <th scope="col">{translate("residents.email")}</th>
              <th scope="col" className="th-sm">{translate("residents.actions")}</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((res) => (         
                <tr key={`${res.id}`} className={activeRowId === res.id ? "table-active table-warning table-bordered border-primary" : ""}>
                  <th scope="row">{res.id}</th>
                  <td>{res.firstName}</td>
                  <td>{res.lastName}</td>
                  <td>{res.phoneNo}</td>
                  <td>{res.email}</td>
                  <td>
                    <button type="button" className="btn btn-light me-2" key={`${res.id}-edit`} onClick={() => residentEdit(res)}>
                      <i className="bi bi-wrench text-primary"></i>
                    </button>
                    <button type="button" className="btn btn-light me-2" key={`${res.id}-view`} onClick={() => residentView(res)}>
                      <i className="bi bi-ticket-detailed-fill text-success"></i>
                    </button>
                    <button type="button" className="btn btn-light me-2" data-bs-toggle="modal" data-bs-target="#deleteConfirmModal" key={`${res.id}-delete`} onClick={() => setResidentId(res.id)}>
                      <i className="bi bi-trash-fill text-danger"></i>
                    </button>
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