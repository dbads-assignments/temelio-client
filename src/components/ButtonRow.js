import React, { useState } from 'react';
import '../css/ButtonRow.css'; // Import CSS file for styling
import CreateNonprofitForm from '../components/CreateNonprofitForm';
import CreateFoundationForm from '../components/CreateFoundationForm';
import SentEmailsList from '../components/SentEmailsList';
import SendEmailsForm from '../components/SendEmailsForm';

const ButtonRow = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'nonprofits':
        return <> <br /><h3> Nonprofits </h3> <CreateNonprofitForm /></>;
        case 'foundations':
          return <> <br /><h3> Foundations </h3> <CreateFoundationForm /></>;
        case 'sendEmails':
            return <> <br /><h3> Send Emails </h3> <SendEmailsForm /></>;
        case 'sentEmails':
            return <> <br /><h3> Sent Emails </h3> <SentEmailsList /></>;
        default:
            return <> <br /><h3> Foundations </h3> <CreateFoundationForm /></>;
    }
  };

  return (
    <div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('foundations')}> Foundations </button>
        <button className="button" onClick={() => handleButtonClick('nonprofits')}> Non Profits </button>
        <button className="button" onClick={() => handleButtonClick('sendEmails')}> Send Emails </button>
        <button className="button" onClick={() => handleButtonClick('sentEmails')}> Sent Emails </button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
};


export default ButtonRow;
