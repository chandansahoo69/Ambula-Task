import useToast from "hooks/useHooks";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const { showToast } = useToast();
  const initialState = { name: "", email: "", queries: "" };
  const [inputs, setInputs] = useState(initialState);
  const [error, setError] = useState({ type: "", message: "" });

  // error text for validation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError({ type: "", message: "" });
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error]);

  const handleOnChange = (e) => {
    // restriction check
    if (e.target.name === "name") {
      if (e.target.value.length > 50) {
        setError({
          type: "name",
          message: "Name should less than 50 characters.",
        });
        return;
      }
    }
    if (e.target.name === "queries") {
      if (e.target.value.length > 100) {
        setError({
          type: "queries",
          message: "Queries should less than 100 characters.",
        });
        return;
      }
    }
    // change state data
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = () => {
    for (const key in inputs) {
      console.log(key, key === "email");
      if (inputs[key] === "") {
        setError({
          type: `${key}`,
          message: `${key} field can't be empty`,
        });
        return;
      }
      if (key === "email") {
        if (!validateEmail(inputs[key])) {
          setError({
            type: `email`,
            message: `Please enter a valid email`,
          });
          return;
        }
      }
    }

    showToast("All fields are valid, Form is submitted", "success");
    setInputs(initialState);
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-form">
          <h1 className="contact-title">Queries Form</h1>
          <p style={{ color: "grey", textAlign: "center" }}>
            This form is not submiting over server side.
          </p>
          <div className="contact-form-box">
            <h6>Name</h6>
            <input
              type="text"
              name="name"
              className="form-input"
              maxLength={51}
              value={inputs.name}
              onChange={(e) => handleOnChange(e)}
            />
            <div className="error-message">
              <span
                style={{
                  fontSize: ".8rem",
                  color: "red",
                  margin: ".2rem 0 0 .5rem",
                }}
              >
                {error.type === "name" && error.message}
              </span>
              <span
                style={{
                  fontSize: ".8rem",
                  color: "red",
                  margin: ".2rem .5rem 0 0",
                }}
              >
                {inputs.title ? inputs?.title.length : 0} / 50 character Left
              </span>
            </div>
          </div>
          <div className="contact-form-box">
            <h6>Email</h6>
            <input
              type="text"
              name="email"
              className="form-input"
              maxLength={51}
              value={inputs.email}
              onChange={(e) => handleOnChange(e)}
            />
            <div className="error-message">
              <span
                style={{
                  fontSize: ".8rem",
                  color: "red",
                  margin: ".2rem 0 0 .5rem",
                }}
              >
                {error.type === "email" && error.message}
              </span>
            </div>
          </div>
          <div className="contact-form-box" style={{ marginTop: "15px" }}>
            <h6>Queries</h6>
            <textarea
              type="text"
              name="queries"
              rows={3}
              className="form-input"
              maxLength={101}
              value={inputs.queries}
              onChange={(e) => handleOnChange(e)}
            />
            <div className="error-message">
              <span
                style={{
                  fontSize: ".8rem",
                  color: "red",
                  margin: ".2rem 0 0 .5rem",
                }}
              >
                {error.type === "queries" && error.message}
              </span>
              <span
                style={{
                  fontSize: ".8rem",
                  color: "red",
                  margin: ".2rem .5rem 0 0",
                }}
              >
                {inputs.title ? inputs?.queries.length : 0} / 100 character Left
              </span>
            </div>
          </div>
          <button
            className="custom-btn todo-btn"
            type="button"
            name="button"
            onClick={handleSubmit}
            style={{ marginTop: "1rem" }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
