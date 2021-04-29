import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AnimalNew = () => {
  const [animal, setAnimal] = useState({
    name: '',
    aclass: 'mammals',
    img: '',
    desc: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setAnimal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e, animal) => {
    e.preventDefault();

    //Checking if there is such animal already in the database
    //making POST request
    await axios.post('http://localhost:3004/animals', animal);
    //Clear the form
    setAnimal({
      name: '',
      aclass: 'mammals',
      img: '',
      desc: '',
    });
    //Re-render the animals list

    history.push('/');
  };

  return (
    <React.Fragment>
      <h2>Create New Animal</h2>
      <form
        method='POST'
        className='form'
        onSubmit={(e) => handleFormSubmit(e, animal)}
      >
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            className='form-input'
            onChange={handleChange}
            value={animal.name}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='aclass'>Class</label>
          <select
            id='aclass'
            name='aclass'
            className='form-input'
            onChange={handleChange}
            value={animal.aclass}
            required
          >
            <option value='mammals'>mammals</option>
            <option value='birds'>birds</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='img'>Image url</label>
          <input
            id='img'
            name='img'
            className='form-input'
            onChange={handleChange}
            value={animal.img}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='desc'>Description</label>
          <input
            id='desc'
            name='desc'
            className='form-input'
            onChange={handleChange}
            value={animal.desc}
            required
          />
        </div>

        <button type='submit'>Create Animal</button>
      </form>
    </React.Fragment>
  );
};

export default AnimalNew;
