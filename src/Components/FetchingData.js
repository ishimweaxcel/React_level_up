 import React, { useState, useEffect } from 'react';
import './FetchingData.css';

const FetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://puce-helpful-xerus.cyclic.app/blogs')
      .then((response) => response.json())
      .then((completedata) => {
        console.log('Fetched data:', completedata);
        if (Array.isArray(completedata)) {
          setData(completedata);
        } else {
          console.log('Data is not an array:', completedata);
        }
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="cards">
      {Array.isArray(data) ? (
        data.map((values) => (
          <div key={values.id} className="card">
            <h1 className="title">{values.author}</h1>
            <img src={values.image} alt="img" className="images" />
            <p>{values.description}</p>
            <p className="category">{values.comments}</p>
            <p className="dates">{values.createdAt}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default FetchingData;
