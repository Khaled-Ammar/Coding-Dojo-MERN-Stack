import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
const ListPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Teams')
            .then(res => setPlayers(res.data));
            setLoaded(true)
    }, [])
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId))
    }
    const style1 ={
        textAligncenter :'center',
        width:'100%',
        margin:'2% 35%'
    }
    return (
    <div style={style1}>
                    <table border="1">
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    {loaded && players.map((player, idx) => {
                        return (
                        <>
                        
                        <tr>
                            <td> <Link to={"/show/"+player._id}>{player.name}</Link></td>
                            <td>{player.position}</td>
                            <td><DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)} />
                            <Link to={"/edit/"+ player._id } style={{marginLeft:"15px",marginRight:"15px"}}>Edit</Link></td>

                        </tr>
                        </>
                            )})}
                    </table>
        
                            
            
                            
    </div>
    )
}

export default ListPlayers