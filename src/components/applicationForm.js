import React, { useState } from 'react';


const ApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [funFact, setFunFact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform GET request to postman-echo api
  };

  return (
    <div className="application-form">
      <h2>Hack UCI Application</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-label-group">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
            placeholder="Name"
          />
        </div>

        <div className="form-label-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="form-label-group">
          <label htmlFor="funFact">Fun Fact</label>
          <textarea
            id="funFact"
            value={funFact}
            onChange={(event) => {
              setFunFact(event.target.value);
            }}
            placeholder="Fun Fact"
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>

      </form>
    </div>
  );
};

export default ApplicationForm;
