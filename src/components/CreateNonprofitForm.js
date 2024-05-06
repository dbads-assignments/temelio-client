import React, { useState } from 'react';
import axios from 'axios';
import '../css/CreateFoundationForm.css'

const CreateNonprofitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/nonprofit', formData)
      .then(response => {
        console.log(response.data);
        setFormData({name: '', email: '', address: ''})
        
        setSuccessMessage('Non profit successfully created!');

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
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>

        {successMessage && <div className="success-message">{successMessage}</div>}

      </form>
    </div>
  );
};

export default CreateNonprofitForm;
