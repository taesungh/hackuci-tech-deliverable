import React, { useState } from 'react';
import "./form-input.css";
import "./floating-labels.css";
import "./applicationForm.css";


const ApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [fullNameValid, setFullNameValid] = useState(null);
  const checkFullName = (value) => value !== "";

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  // based on RFC 3696 standard
  const checkEmail = (value) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(value);

  const [funFact, setFunFact] = useState("");
  const [funFactValid, setFunFactValid] = useState(null);
  const checkFunFact = (value) => value !== "";


  // send form values as GET request to postman-echo server
  async function sendData() {
    console.log("sending form data")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullNameValid && emailValid && funFactValid) {
      // perform GET request to postman-echo api
      sendData();
    }
  };

  return (
    <div className="application-form">
      <h2>Hack UCI Application</h2>

      <form onSubmit={handleSubmit} noValidate>

        <TextInput
          type="text"
          label="fullName"
          labelText="Name"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
            setFullNameValid(checkFullName(event.target.value));
          }}
          placeholder="Name"
          invalid={fullNameValid === false}
          invalidText="Please enter a name."
        />

        <TextInput
          type="email"
          label="email"
          labelText="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setEmailValid(checkEmail(event.target.value));
          }}
          placeholder="Email"
          invalid={emailValid === false}
          invalidText="Please enter a valid email address."
        />

        <TextAreaInput
          label="funFact"
          labelText="Fun Fact"
          value={funFact}
          onChange={(event) => {
            setFunFact(event.target.value);
            setFunFactValid(checkFunFact(event.target.value));
          }}
          placeholder="Fun Fact"
          invalid={funFactValid === false}
          invalidText="Please enter a fun fact."
        />

        <button
          type="submit"
          className="btn btn-submit"
          style={{float: "right"}}
        >
          Submit
        </button>

      </form>
    </div>
  );
};

const TextInput = ({ type, label, labelText, value, onChange, placeholder, invalid, invalidText }) => {
  return (
    <div className="form-label-group">
      <input
        type={type}
        id={label}
        className={`form-control${invalid ? ' is-invalid' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <label htmlFor={label}>{labelText}</label>
      <div className="invalid-feedback">
        {invalidText}
      </div>
    </div>
  )
};

const TextAreaInput = ({ label, labelText, value, onChange, placeholder, invalid, invalidText }) => {
  return (
    <div className="form-label-group">
      <textarea
        id={label}
        className={`form-control${invalid ? ' is-invalid' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <label htmlFor={label}>{labelText}</label>
      <div className="invalid-feedback">
        {invalidText}
      </div>
    </div>
  )
};

export default ApplicationForm;
