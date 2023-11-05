import React, {useState, useEffect} from "react";
import ResidentList from "./ResidentList";
import FilterButton from "./FilterButton";
import Resident from "./Resident";

function Residents(props){
  const [isUpdating, setIsUpdating] = useState(false);
  const [residents, setResidents] = useState([]);
  const [mode, setMode] = useState("view"); // initial to view mode.
  const [activeRowId, setActiveRowId] = useState(0); // 0 means no active row, as the first row id started from 1.
  const [filteredResidents, setFilteredResident] = useState([]);
  const [resident, setResident] = useState({}); //initial empty object

  useEffect(()=>{
    const DATA_RESIDENTS = JSON.parse(localStorage.getItem('pms_residents'));
    if (DATA_RESIDENTS != null && DATA_RESIDENTS.length > 0){
      setResidents(DATA_RESIDENTS);
      setFilteredResident(DATA_RESIDENTS);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('pms_residents', JSON.stringify(residents))
  },[residents])


  useEffect(() => {
    if (props.location.state.prop.searchValue === ""){
      setFilteredResident(residents);
    }
    else {  
      const searchList = residents.filter((resident) => {
        return (resident.firstName.toLowerCase().includes(props.location.state.prop.searchValue.toLowerCase()) || 
                resident.lastName.toLowerCase().includes(props.location.state.prop.searchValue.toLowerCase()) || 
                resident.phoneNo.toLowerCase().includes(props.location.state.prop.searchValue.toLowerCase()) || 
                resident.email.toLowerCase().includes(props.location.state.prop.searchValue.toLowerCase()))
      });
      setFilteredResident(searchList);
    }
  },[residents, props.location.state.prop.searchValue])

  const updateIsUpdating = (status) => {
    setIsUpdating(status)
  }

  const updateNewResident = (firstName, lastName, gender, phoneNo, email, description) =>{
    const newId = residents.length + 1;
    const newResident = {id: newId, firstName, lastName, gender, phoneNo, email, description };
    setResidents([...residents, newResident ])
    setFilteredResident([...residents, newResident ]);
    setActiveRowId(newId);
  }

  const updateResident = (id, firstName, lastName, gender, phoneNo, email, description) =>{
    const updateList = residents.map((resident) =>{
      if (resident.id === id){
        return {id, firstName , lastName, gender, phoneNo, email, description}
      }
      return resident;
    })
    setResidents(updateList);
    setActiveRowId(id);
    setFilteredResident(updateList);
  }

  const updateFilter = (filterData) => {
    const filteredList = residents.filter((resident) => {
      return ((!filterData.firstName || resident.firstName.toLowerCase().includes(filterData.firstName.toLowerCase())) && 
              (!filterData.lastName || resident.lastName.toLowerCase().includes(filterData.lastName.toLowerCase())) && 
              (!filterData.phoneNo || resident.phoneNo.toLowerCase().includes(filterData.phoneNo.toLowerCase())) && 
              (!filterData.email || resident.email.toLowerCase().includes(filterData.email.toLowerCase())) 
      );
    })
    setFilteredResident(filteredList);
  }

  const deleteResident = (id) => {
    const updated = residents.filter((resident) => resident.id !== id);
    setResidents(updated);
    setFilteredResident(updated);
  }

  const editResident = (resident) => {
    setIsUpdating(true);
    setMode("edit");
    setResident(resident);
    setActiveRowId(resident.id);
  }

  const viewResident = (resident) => {
    setIsUpdating(true);
    setMode("view");
    setResident(resident);
    setActiveRowId(resident.id);
  }

  const setResidentMode = (mode) =>{
    setMode(mode);
  }

  const setResidentActiveRowId = (id) =>{
    setActiveRowId(id);
  }

  return (
    <div className="container col-md-10 mx-auto">

      { isUpdating ? (
        <Resident 
          updateIsUpdating={updateIsUpdating}  
          updateNewResident={updateNewResident}
          mode={mode}
          activeRowId={activeRowId}
          editResident={editResident}
          viewResident={viewResident}
          resident={resident}
          updateResident={updateResident}
        />)
        :(
          <>
            <FilterButton 
              updateIsUpdating={updateIsUpdating}  
              updateFilter={updateFilter}
              setResidentMode={setResidentMode}
              setResidentActiveRowId={setResidentActiveRowId}
            />
            <ResidentList 
              residents={filteredResidents}
              activeRowId={activeRowId}
              editResident={editResident}
              viewResident={viewResident}
              deleteResident={deleteResident}
            />
          </>
        )
      }

    </div>
  )
}

export default Residents;