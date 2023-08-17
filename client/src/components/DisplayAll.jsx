import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

const DisplayAll = (props) => {

    const [pets, setPets] = useState([])

    let sortedPets = [...pets];
    sortedPets.sort( function(a,b) {
        if(a.type > b.type) return 1;
        if(a.type < b.type) return -1;
        return 0;
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
        .then((res)=>{
            setPets(res.data)
        })
        .catch((err)=>{
        console.log(err)
        })
    }, [])

    return (
        <div>
            <Link to={'/pets/new'}>add a pet to the shelter</Link>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Pet Name</th>
                    <th scope="col">Pet Type</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    sortedPets.map((pet)=>(
                        <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><Link to={`pets/${pet._id}`}>Details</Link> | <Link to={`pets/${pet._id}/edit`}>Edit</Link></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll;