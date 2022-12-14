import React, { useEffect, useState } from 'react';

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
const Example = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPokemon(response.results) )
    }, []);

    return (
        <div>
            { pokemon.map((item, i)=>{
                return (<div key={i}>{item.name}</div>)
            })}
        </div>
    );
}
export default Example;



