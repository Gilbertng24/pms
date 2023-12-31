import React, {useState} from "react";
import { useLanguage } from "./LanguageProvider";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useEffect } from "react";

function Resident({updateIsUpdating, updateNewResident, mode, activeRowId, editResident, viewResident, resident, updateResident}){
  const [readOnly, setReadOnly] = useState(true);  
  const [id,setId] = useState(0);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const { translate } = useLanguage();
  const [title, setTitle] = useState("");
  const genderOptions = [
    {value: '', text: `${translate("resident.gender.options")}`},
    {value: 'Male', text: `${translate("resident.gender.male")}`},
    {value: 'Female', text: `${translate("resident.gender.female")}`},
    {value: 'Other', text: `${translate("resident.gender.other")}`},
  ];

  //gender
  const [gender,setGender] = useState(genderOptions[0].value);
  const genderChange = (e) => {
    setGender(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    updateIsUpdating(false);  
    mode === "new" ? 
      updateNewResident(firstName, lastName, gender, phoneNo, email, description)
    :
      updateResident(id, firstName, lastName, gender, phoneNo, email, description)
  }

  //phone number
  const [phoneNo,setPhoneNo] = useState();
  const [phoneNoIsValid,setPhoneNoIsValid] = useState(true);
  const defaultCountry = 'CA';
  const phoneNoChange = (number) => {
    setPhoneNo(number);
    const numericNumber = number ? number.replace(/\D/g, '') : '';
    setPhoneNoIsValid(numericNumber.length === 11); //including the country code at the beginning of the phone number.
  };

  //email
  const [email,setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true); // Default to true
  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = emailRegex.test(email);
    setEmailIsValid(valid);
  };

  //description
  const [description,setDescription] = useState("");

  const setDefault = () => {
    if (Object.keys(resident).length !== 0){   
      setFirstName(resident.firstName);
      setLastName(resident.lastName);
      setGender(resident.gender);
      setPhoneNo(resident.phoneNo);
      setEmail(resident.email);
      setDescription(resident.description);
    }
  }

  //initial the value from existing resident
  useEffect(() => {
    if (mode === "new"){
      setReadOnly(false);
      setTitle(translate("resident.titleNew"));
    }
    else if (mode === "view"){
      setTitle(translate("resident.titleView"));
      setReadOnly(true);
      setDefault();
    }
    else if (mode === "edit"){
      setId(resident.id);
      setTitle(translate("resident.titleEdit"));
      setReadOnly(false);
      setDefault();
    }
    else {
      setReadOnly(true);
    }
  },[]);

  return (
    <div className="container mb-8">
      <form onSubmit={handleSubmit}>
        <div className="mt-5 mb-5">
          <h1>{title}</h1>
        </div>      
        <fieldset className="col-md-8 mx-auto">
          <legend className="legend-left">{translate("resident.personalInformation")}</legend>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  id="firstName" 
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e)=>{setFirstName(e.target.value)}}
                  readOnly={readOnly}
                />
                <label htmlFor="firstName">{translate("resident.firstName")}<span style={{color: "red"}}>*</span></label>
              </div>
            </div>

            <div className="col">
              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  id="lastName" 
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e)=>{setLastName(e.target.value)}}
                  readOnly={readOnly}
                />
                <label htmlFor="lastName">{translate("resident.lastName")}<span style={{color: "red"}}>*</span></label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <select value={gender} onChange={genderChange} className="form-select" id="gender" aria-label="gender options" disabled={readOnly}>
                  {genderOptions.map((gender) => (
                    <option 
                      value={gender.value} 
                      key={gender.value}
                    >
                      {gender.text}
                    </option>
                  ))}
                </select>
                <label htmlFor="gender">{translate("resident.gender.gender")}<span style={{color: "red"}}>*</span></label>  
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <PhoneInput 
                  className="form-control" 
                  id="phoneNo" 
                  placeholder={translate("resident.phoneNo")}
                  value={phoneNo}
                  onChange={phoneNoChange}
                  defaultCountry={defaultCountry}
                  readOnly={readOnly}
                />
                <label htmlFor="phoneNo">{translate("resident.phoneNo")}<span style={{color: "red"}}>*</span></label>
              </div>
              {!phoneNoIsValid && (
              <p style={{ color: 'red' }}>{translate("resident.message.phoneTenDigit")}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  onBlur={validateEmail}
                  readOnly={readOnly}
                />
                <label htmlFor="email">{translate("resident.email")}<span style={{color: "red"}}>*</span></label>
              </div>
              {!emailIsValid && (
              <p style={{ color: 'red' }}>{translate("resident.message.emailInvalid")}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input 
                  type="textarea" 
                  className="form-control" 
                  id="description" 
                  placeholder="description"
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                  readOnly={readOnly}
                />
                <label htmlFor="description">{translate("resident.description")}</label>
              </div>
            </div>
          </div>

        </fieldset>


        {mode === "view" ? "" : mode === "new" ? 
          <button 
            type="submit" 
            className="btn btn-primary me-3"
          >
            {translate("resident.addResident")}
          </button>
          :
          <button 
            type="submit" 
            className="btn btn-primary me-3"
          >
            {translate("resident.editResident")}
          </button>
        }
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => {updateIsUpdating(false)}}
        >
          {translate("resident.cancel")}
        </button>
      </form>
    </div>
  )
}

export default Resident;