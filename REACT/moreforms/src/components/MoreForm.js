import React, { useState } from  'react';
    
    
    
const MoreForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [firstnameError, setfirstnameError] = useState("");

    const [lastname, setlastname] = useState("");
    const [lastnameError, setlastnameError] = useState("");

    const [email, setemail] = useState("");
    const [emailError, setemailError] = useState("");

    const [password, setpassword] = useState("");
    const [passwordError, setpasswordError] = useState("");
    
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
        
    const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstname,lastname, email, password };
    console.log("Welcome", newUser);
    };


    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
	//     return "Thank you for submitting the form!";
	// } else {
	//     return "Welcome, please submit the form";
	// }
    // };


        const handlefirstname = (e) => {
            setfirstname(e.target.value);
            if(e.target.value.length < 1) {
                setfirstnameError("firstname is required!");
            } else if(e.target.value.length < 3) {
                setfirstnameError("firstname must be 3 characters or longer!");
            } else {
                setfirstnameError("");
            }
        }
        
        const handlelastname = (e) => {
            setlastname(e.target.value);
            if(e.target.value.length < 1) {
                setlastnameError("lastname is required!");
            } else if(e.target.value.length < 3) {
                setlastnameError("lastname must be 3 characters or longer!");
            } else {
                setlastnameError("");
            }
        }

        const handleemail = (e) => {
            setemail(e.target.value);
            if(e.target.value.length < 1) {
                setemailError("email is required!");
            } else if(e.target.value.length < 8) {
                setemailError("email must be 8 characters or longer!");
            } else {
                setemailError("");
            }
        }

        const handlepassword = (e) => {
            setpassword(e.target.value);
            if(e.target.value.length < 1) {
                setpasswordError("password is required!");
            } else if(e.target.value.length < 7) {
                setpasswordError("password must be 7 number or longer!");
            } else {
                setpasswordError("");
            }
        }
    
    return (
        <form onSubmit={ createUser }>
            {/* <h3>{ formMessage() }</h3> */}
            <form onSubmit={ createUser }>
    {/* {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    } */}
</form>
            <div>
<label>firstname: </label> 
<input type="text" onChange={ handlefirstname } />
{
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
</div>
<div>
<label>lastname: </label> 
<input type="text" onChange={ handlelastname } />
{
                    firstnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
</div>
<div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleemail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
<div>
                <label>Password: </label>
                <input type="text" onChange={ handlepassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
<input type="submit" value="Create User" />
        </form>
    );
    }
;

export default MoreForm;
