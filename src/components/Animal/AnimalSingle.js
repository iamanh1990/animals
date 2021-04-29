import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const AnimalSingle = () => {
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    try {
      const fetchAnimal = async () => {
        const url = `http://localhost:3004/animals/${id}`;
        const res = await axios.get(url);
        const data = await res.data;
        setAnimal({ ...data });
        setIsLoading(false);
      };

      fetchAnimal();
    } catch (error) {
      console.log('Error from single animal: ', error);
    }
  }, [id]);

  const renderedResult = isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div>
        <img src={animal.img} alt='animal' />
        <h2>{animal.name}</h2>
        <p>{animal.desc}</p>
        <button onClick={() => history.goBack()}>Go Back Home</button>
      </div>
    </main>
  );

  return renderedResult;
};

export default AnimalSingle;
