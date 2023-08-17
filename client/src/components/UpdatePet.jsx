import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdatePet = (props) => {

    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skillOne: '',
        skillTwo: '',
        skillThree: ''
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            setPet(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const handlePet = (e) => {
        setPet({...pet, [e.target.name]: e.target.value})
}

const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/updatePet/${id}`, pet)
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>{
            setErrors(err.response.data.errors)
        })
}
    
    return (
        <div>
            <Link to={'/'}>back to home</Link>
            <h3>Edit {pet.name}</h3>
            <form onSubmit={submitHandler}>
            <div className="d-flex border border-5 p-4">

                    <div>
                        <h5>Pet Info</h5>
                        <div className="mb-3">
                            <label className="me-3" htmlFor="name">Pet Name: </label>
                            <input className="me-3" type="text" placeholder={pet.name} onChange={handlePet} name="name"/>
                        </div>
                        {
                            errors.name ?
                            <p className="text-danger">{errors.name.message}</p>: null
                        }
                        <div className="mb-3">
                            <label className="me-3" htmlFor="type">Pet Type: </label>
                            <input className="me-3" type="text" placeholder={pet.type} onChange={handlePet} name="type"/>
                        </div>
                        {
                            errors.type ?
                            <p className="text-danger">{errors.type.message}</p>: null
                        }
                        <div className="mb-3">
                            <label className="me-3" htmlFor="description">Description: </label>
                            <input className="me-3" type="text" placeholder={pet.description} onChange={handlePet} name="description"/>
                        </div>
                        {
                            errors.description ?
                            <p className="text-danger">{errors.description.message}</p>: null
                        }
                    </div>
                    <div>
                        <h5>Skills (optional)</h5>
                        <div className="mb-3">
                            <label className="me-3" htmlFor="skills">Skill 1: </label>
                            <input className="me-3" type="text" placeholder={pet.skillOne} onChange={handlePet} name="skillOne"/>
                        </div>
                        {
                            errors.skillOne ?
                            <p className="text-danger">{errors.skillOne.message}</p>: null
                        }
                        <div className="mb-3">
                            <label className="me-3" htmlFor="skillTwo">Skill 2: </label>
                            <input className="me-3" type="text" placeholder={pet.skillTwo} onChange={handlePet} name="skillTwo"/>
                        </div>
                        {
                            errors.skillTwo ?
                            <p className="text-danger">{errors.skillTwo.message}</p>: null
                        }
                        <div className="mb-3">
                            <label className="me-3" htmlFor="skillThree">Skill 3: </label>
                            <input className="me-3" type="text" placeholder={pet.skillThree} onChange={handlePet} name="skillThree"/>
                        </div>
                        {
                            errors.skillThree ?
                            <p className="text-danger">{errors.skillThree.message}</p>: null
                        }
                    </div>
                </div>
                <button className="mt-3" type="submit">Edit Pet</button>
            </form>
        </div>
    )
}

export default UpdatePet;