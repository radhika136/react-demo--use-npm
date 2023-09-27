// src/DataDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataDisplay () {
    const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/products/?format=json') // Replace with your Django API endpoint
      .then(response => {
        console.log('API Response:', response.products);
        setProducts(response.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.CWS_Description}</p>
            <p>{product.HSI_Date_Revision_Date}</p>
            <p>{product.MSDS_Date_Revision_Date}</p>
            <p>{product.F13 }</p>
            <p>{product.Classification}</p>
            <p>{product.Symbols}</p>
            <p>{product.Used_In}</p>
            <p>{product.Approved_Quantity}</p>
            <p>{product.Register_Number}</p>
            <p>{product.Responsible}</p>
            <p>{product.PH_No}</p>
            <p>${product.Send_Reminder}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
