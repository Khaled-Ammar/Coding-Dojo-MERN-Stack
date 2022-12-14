import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
//Note the second argument is an empty array.
const [responseData, setResponseData] = useState(null);
useEffect(()=>{
    axios.get('http://www.example.com')
        .then(response=>{setResponseData(response.data)})
}, []); 
return(
    <div>
        {responseData}
    </div>
)
}

