import React, { useState } from 'react';
import axios from 'axios';
import '../css/CreateFoundationForm.css'
import TableComponent from './TableContent';

const SentEmailsList = () => {
  const [sentEmails, setSentEmails] = useState(
    []
  )


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/nonprofit/getSentEmails')
      .then(response => {
        console.log(response.data);
        setSentEmails(response.data)
      
        // Handle success, e.g., show a success message
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="form-container" onSubmit={handleSubmit}>
    
    <form className="form">
        <button type="submit" onClick={handleSubmit}> List the sent emails </button>

        <br />
        <br />
        <TableComponent data={sentEmails} />    

    </form>
    </div>
  );
};

export default SentEmailsList;
