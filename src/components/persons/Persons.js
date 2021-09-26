import React, { useEffect, useState } from 'react';
import Person from '../person/Person';
import './persons.css'
const Persons = () => {
    const [persons, setPersons] = useState([])
    const [addedPersons, setAddedPerson] = useState([])
    useEffect(() => {
        fetch('./persons.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    const handleAddedPerson = (props) => {
        const singlePerson = persons.find(person => person.id === props.id )
        const addedPerson = [...addedPersons, singlePerson]
        setAddedPerson(addedPerson)
    }
    const total = addedPersons.reduce((previous , current) => previous + current.salary,0 )
    return (
        <div className='person-data-container'>
            <div className='person-container'>
                {
                    persons.map(person => <Person key={person.id} persons={person}  handleAddedPerson={handleAddedPerson}/>)
                }
            </div>
            <div className='person-data'>
                <p>Player Added: {addedPersons.length} </p>
                <p>Total Cost: {total} </p>
            </div>
        </div>
    );
};

export default Persons;