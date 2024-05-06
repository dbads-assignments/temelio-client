import React, { useState } from 'react';
import axios from 'axios';
import '../css/CreateFoundationForm.css'

const SendEmailsForm = () => {
  const [formData, setFormData] = useState(
    []
  )

  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData([...value.split(",")]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/nonprofit/sendEmails', formData)
      .then(response => {
        console.log(response.data);
        setFormData([])
        
        setSuccessMessage('Emails sent to non profits successfully!');

        setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 
        // Handle success, e.g., show a success message
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Enter the email of non profits comma seperated:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>

        {successMessage && <div className="success-message">{successMessage}</div>}

      </form>
    </div>
  );
};

export default SendEmailsForm;
