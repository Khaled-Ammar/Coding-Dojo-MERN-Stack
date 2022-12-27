import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';
import Form from '../components/Form';
    
const Update = (props) => {
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/Team/show/' + props.id)
            .then(res => { setPlayer(res.data); setLoaded(true); })
    }, [])

    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/Team/edit/' + props.id, player)
            .then(res => {setPlayers([...players, res.data] ,navigate('/'))})
            .catch(err =>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    const cancel = e => {
        navigate('/')}

    return (
        <div>
        {/* <Link to="/">Home Page</Link> */}
        {loaded && <Form  onSubmitProp={updatePlayer} initialName={player.name}   initialPosition={player.position}  errors={errors}/>}

        <button  variant="contained" size="medium" onClick={cancel}>Cancel</button>
    </div>
    )
    
}
    
export default Update;