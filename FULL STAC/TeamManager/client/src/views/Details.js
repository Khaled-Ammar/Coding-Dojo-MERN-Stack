import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link } from '@reach/router'    
const Details = (props) => {
    const [player, setPlayer] = useState({})
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Team/show/' +props.id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err));
    }, [props.id]);
    
    return (
        <div>
            <h4>Name: {player.name}</h4>
            <h4>Position: {player.position}</h4>


            <Link to={"/edit/" + player._id }>
    Edit
</Link>


        </div>
    )
}
    
export default Details;