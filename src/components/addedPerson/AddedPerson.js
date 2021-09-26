import React from 'react';
import './addedPerson.css'
const AddedPerson = (props) => {
    const {image,name} = props.person
    return (
        <div className='addedPerson'>
          <div className='addedPerson-image'>
              <img src={image} alt="" />
          </div>
              <p><b>{name}</b></p>
              <i className="fas fa-window-close"></i>
        </div>
    );
};

export default AddedPerson;