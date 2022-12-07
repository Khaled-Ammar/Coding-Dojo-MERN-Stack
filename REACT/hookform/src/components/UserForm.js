import React, { useState } from  'react';

    
    
const UserForm = (props) => {
const [firstname, setfirstname] = useState("");
const [lastname, setlastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
    
const createUser = (e) => {
e.preventDefault();
const newUser = { firstname,lastname, email, password };
console.log("Welcome", newUser);
};
    
return(
<form onSubmit={ createUser }>
<div>
<label>firstname: </label> 
<input type="text" onChange={ (e) => setfirstname(e.target.value) } />
</div>
<div>
<label>lastname: </label> 
<input type="text" onChange={ (e) => setlastname(e.target.value) } />
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
);
};
    
export default UserForm;
