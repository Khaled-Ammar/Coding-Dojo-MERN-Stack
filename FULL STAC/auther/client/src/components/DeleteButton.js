import React from 'react'
import axios from 'axios';

const DeleteButton = props => {

    const { authorId, successCallback } = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button  variant="contained" size="medium" onClick={deleteAuthor}>Delete</button>
    )
}

export default DeleteButton ;