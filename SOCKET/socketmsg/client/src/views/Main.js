import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorsList from '../components/AuthorsList';

const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[author]);
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
    // const createAuthor = author  => {
    //     axios.post('http://localhost:8000/api/author', author )
    //         .then(res=>{
    //             setAuthor([...author, res.data]);
    //         })
    // }
    return (
        <div>
            {/* <Form onSubmitProps={createAuthor} initialName="" /> */}
            <hr/>
            {loaded && <AuthorsList author={author} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;