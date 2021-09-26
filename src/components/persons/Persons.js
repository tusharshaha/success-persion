import React, { useEffect, useState } from 'react';
import AddedPerson from '../addedPerson/AddedPerson';
import Person from '../person/Person';
import './persons.css'
const Persons = () => {
    // state for load data
    const [persons, setPersons] = useState([])
    // state for person data
    const [addedPersons, setAddedPerson] = useState([])
    // load data from json
    useEffect(() => {
        fetch('./persons.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    // selected persion showing eventHandler
    const handleAddedPerson = (props) => {
        const singlePerson = persons.find(person => person.id === props.id )
        const addedPerson = [...addedPersons, singlePerson]

        // remove duplicate person from added person

        const removeDuplicatePerson = addedPerson.filter((person, index,array)=> array.indexOf(person) === index )
        setAddedPerson(removeDuplicatePerson)
    }
    // total salary
    const total = addedPersons.reduce((previous , current) => previous + current.salary,0)

    return (
        <div className='person-data-container'>
            <div className='person-container'>
                {/* this is person card */}
                {
                    persons.map(person => <Person key={person.id} persons={person}  handleAddedPerson={handleAddedPerson}/>)
                }
            </div>
            <div className='person-data'>
                {/* this is person data  */}

                <p>Player Added: {addedPersons.length} </p>
                <p>Total Cost: $ {total} </p>
                {
                    addedPersons.map(person => <AddedPerson key={person.id} person={person}/>)
                }
            </div>
        </div>
    );
};

export default Persons;