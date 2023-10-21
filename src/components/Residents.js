import React, {useState, useEffect} from "react";
import { useLanguage } from "./LanguageProvider";
import ResidentList from "./ResidentList";
import FilterButton from "./FilterButton";
import Resident from "./Resident";

function Residents(){
  const { translate } = useLanguage();
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [residents, setResidents] = useState([]);
  const [mode, setMode] = useState("view"); // initial to view mode.
  const [activeRowId, setActiveRowId] = useState(0); // 0 means no active row, as the first row id started from 1.
  const [filteredResidents, setFilteredResident] = useState([]);
  const [resident, setResident] = useState({}); //initial empty object

//console.log(filteredResidents);



  useEffect(()=>{
    // const DATA_RESIDENTS = [
    //   {"id": 1, "firstName": "Gilbert", "lastName": "Ng", "gender": "Male", "telephone": "1234567890", "email": "abc@gil.com", "description": "d"},
    //   {"id": 2, "firstName": "G2", "lastName": "Ng", "gender": "Male", "telephone": "1234567890", "email": "abc@gil.com", "description": "d"},
    //   {"id": 3, "firstName": "G3", "lastName": "Ng", "gender": "Male", "telephone": "2234567890", "email": "abc2@gil.com", "description": "d"},
    //   {"id": 4, "firstName": "G4", "lastName": "Ng", "gender": "Male", "telephone": "3234567890", "email": "abc3@gil.com", "description": "d"},
    //   {"id": 5, "firstName": "G5", "lastName": "Ng", "gender": "Male", "telephone": "4234567890", "email": "abc4@gil.com", "description": "d"}
    // ];

    const DATA_RESIDENTS = JSON.parse(localStorage.getItem('pms_residents'));
    if (DATA_RESIDENTS != null && DATA_RESIDENTS.length > 0){
      setResidents(DATA_RESIDENTS);
      setFilteredResident(DATA_RESIDENTS);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('pms_residents', JSON.stringify(residents))
  },[residents])

  const updateIsUpdating = (status) => {
    setIsUpdating(status)
  }

  const updateNewResident = (firstName, lastName, gender, phoneNo, email, description) =>{
  // console.log("first name = " + firstName);
  // console.log("beginning....");
  // console.log(residents);

    const newId = residents.length + 1;
    const newResident = {id: newId, firstName, lastName, gender, phoneNo, email, description };
    setResidents([...residents, newResident ])
    setFilteredResident([...residents, newResident ]);
    setActiveRowId(newId);

    // console.log("after....");
    // console.log(residents);
  
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

  const updateFilter = (key, value) => {
    console.log("key:" + key);
    console.log("value:" + value);
    //console.log("updateFilterFirstName...." + firstName);
    //console.log(firstName.toLowerCase().includes('a'));
    //console.log("LAP".toLowerCase().includes("a".toLowerCase()));

    //update the filter by the firstName
    const filteredList = residents.filter((resident) => {
      let list = [];
      switch (key) {
        case "firstName":
          list = resident.firstName.toLowerCase().includes(value.toLowerCase());
          break;
        case "lastName":
          list = resident.lastName.toLowerCase().includes(value.toLowerCase());
          break;
        case "phoneNo":
          list = resident.phoneNo.toLowerCase().includes(value.toLowerCase());
          break;
        case "email":
          list = resident.email.toLowerCase().includes(value.toLowerCase());
          break;
        default:
          break;
      } 
      return list;
      //return resident.firstName.toLowerCase().includes(firstName.toLowerCase())
    })
    setFilteredResident(filteredList);
  }

  const deleteResident = (id) => {
    console.log("deleteResident:" + id);
    const updated = residents.filter((resident) => resident.id != id);

    console.log(updated);
    setResidents(updated);
    setFilteredResident(updated);
  }

  const editResident = (resident) => {
//console.log("edit mode: " + id);
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