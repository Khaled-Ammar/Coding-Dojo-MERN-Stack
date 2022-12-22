import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link } from '@reach/router'    
const Details = (props) => {
    const [author, setAuthor] = useState({})
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/show/' +props.id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, [props.id]);
    
    return (
        <div>
            <h4>Name: {author.name}</h4>

            <Link to={"/edit/" + author._id }>
    Edit
</Link>


        </div>
    )
}
    
export default Details;