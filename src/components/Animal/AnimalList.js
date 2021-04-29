import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchAnimals = async () => {
        const uri = 'http://localhost:3004/animals';
        const res = await axios.get(uri);

        setAnimals(res.data);
        setIsLoading(false);
      };
      fetchAnimals();
    } catch (error) {
      console.log('Error fro Animalist: ', error);
    }
  }, []);

  const renderedResults = isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className='posts'>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} {...animal} />
      ))}
    </div>
  );

  return renderedResults;
};

export default AnimalList;
