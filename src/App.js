import React, { useState } from "react";
import "./index.css";

export default function App() {
  const[values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  const [submitted,setSubmitted]=useState(false);
  const [valid,setValid] = useState(false);

  const handlefirstchange=(event) =>{
    setValues({...values,firstName:event.target.value})
  }
  const handlelastchange=(event) =>{
    setValues({...values,lastName:event.target.value})
  }
  const handleemailchange=(event) =>{
    setValues({...values,email:event.target.value})
  }

  const handlesubmit=(event) =>{
 event.preventDefault();
 if(values.firstName && values.lastName && values.email){
  setValid(true);
 }
 setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handlesubmit}>
        {submitted && valid ? <div className="success-message">Successfully submitted!!</div>:null} 


        <input
        onChange={handlefirstchange}
        value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
     {submitted && !values.firstName ? <span> Please enter a firstname </span> :null}
        <input
         onChange={handlelastchange}
         value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
{submitted && !values.lastName ? <span> Please enter a lastname </span> :null}
        <input
            onChange={handleemailchange}
         value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
      {submitted && !values.email ? <span> Please enter a email address </span> :null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}