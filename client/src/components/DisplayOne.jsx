import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const DisplayOne = (props) => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [pet, setPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            setPet(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
        <Link to={'/'}>back to home</Link>    
        <div className="border border-5 p-4">
            <h4>Details about: {pet.name}</h4>
            <button className="bg-danger" type="submit" onClick={() => deleteHandler(pet._id)}>Adopt {pet.name}</button>
            <hr />
            <div className="d-flex">
                <h5>Pet Type: </h5>
                <h6 className="ms-3 mt-1">{pet.type}</h6>
            </div>
            <div className="d-flex">
                <h5>Description: </h5>
                <h6 className="ms-3 mt-1">{pet.description}</h6>
            </div>
            <div className="d-flex">
                <h5>Skills: </h5>
            {
                pet.skillOne ?
                <h6 className="ms-3 mt-1">{pet.skillOne}</h6> :
                <h6 className="ms-3 mt-1">No skills available</h6>
            }
            {
                pet.skillTwo ?
                <h6 className="ms-3 mt-1">{pet.skillTwo}</h6> :
                <h6></h6>
            }
            {
                pet.skillThree ?
                <h6 className="ms-3 mt-1">{pet.skillThree}</h6> :
                <h6></h6>
            }
            </div>

        </div>
        </div>
    )
}

export default DisplayOne;