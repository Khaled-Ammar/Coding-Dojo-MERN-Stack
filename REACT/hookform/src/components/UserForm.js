import React, { useState } from  'react';

    
    
const UserForm = (props) => {
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const fun = (e)=>{

    console.log(e.target.value)
    setFirstname (e.target.value)
}
    
const createUser = (e) => {
e.preventDefault();
const newUser = { firstname,lastname, email, password };
console.log("Welcome", newUser);
};
    
return(
    <>
<form onSubmit={ createUser }>
<div>
<label>firstname: </label> 
<input type="text" onChange={ (e) => setFirstname(e.target.value)  } />


</div>
<div>
<label>lastname: </label> 
<input type="text" onChange={ (e) => setLastname(e.target.value) } />
</div>
<div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
<div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
<input type="submit" value="Create User" />
</form>
<p>First Name :  {firstname}</p>
<p>Last Name :  {lastname}</p>
<p>Email :  {email}</p>
<p>Password :  {password}</p>
</>
);

};
    
export default UserForm;
