import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const Pokemon = props => {
// //Note the second argument is an empty array.
// const [responseData, setResponseData] = useState(null);
// useEffect(()=>{
//     axios.get('http://www.example.com')
//         .then(response=>{setResponseData(response.data)})
// }, []); 
// return(
//     <div>
//         {responseData}
//     </div>
// )
// }



// import axios from 'axios';

// const Pokemon = props => {
// //Note the second argument is an empty array.

// [responseData, setResponseData] = useState(null);
// useEffect(()=>{
//     axios.get('http://www.example.com')
//         .then(response=>{setResponseData(response.data)})
// }, []); 
// return(
// <div>
//     {responseData}
// </div>
// )
// }
const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [cond,setCond]=useState(false)

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => setPokemon(response.data.results) )
            .catch(err=>console.log(err))
    }, []);

    const handel=(e)=>{
        cond ? setCond(false) : setCond(true)
    } 

    return (
        
        <div>
            <input type="submit" value="fetch" onClick={handel} />
            
            {cond? pokemon.map((item, i)=>{
                return (<div key={i}>{item.name}</div>) 
            })
            :<p></p>
        }
            
        </div>
    );
}
export default Pokemon;




