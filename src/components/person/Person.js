import React from 'react';
import './person.css'
const Person = (props) => {
    const {name, company,image,age,salary, country} = props.persons
    return (
        <div className='card'>
            <div className="person-img">
                <img src={image} alt="" />
            </div>
            <table>
                <tbody>
                    <tr>
                        <td><b>Name:</b></td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td><b>Company:</b></td>
                        <td >{company}</td>
                    </tr>
                    <tr>
                        <td><b>Age:</b></td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td><b>Country:</b></td>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <td><b>Salary:</b></td>
                        <td>{salary}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => props.handleAddedPerson(props.persons)} className='addToCart'><i className="fas fa-user-circle"></i> Add to Cart </button>
        </div>
    );
};

export default Person;