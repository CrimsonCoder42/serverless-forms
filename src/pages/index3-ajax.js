// Import required libraries and hooks
import React, { useState, useRef } from "react";
import Layout from "../components/layout";

// Create the IndexPage component
const IndexPage = () => {
  // Declare state for the success message and a ref for the form
  const [msg, setMsg] = useState();
  const formRef = useRef(null);

  // Handle form submission with AJAX
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    const encData = new URLSearchParams(formData).toString();

    // Send the form data to Netlify using fetch
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encData,
    })
      .then(() => {
        console.log(encData);
        // Display a success message and reset the form
        setMsg(<p>Thank you for submitting your request.</p>);
        formRef.current.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <div>
        <h3>Netlify Forms - Submit via AJAX</h3>
        <p>Exploring Netlify Forms - AJAX</p>
        {/* Display the success message if available */}
        {msg}
        {/* Create a form with POST method, a name, Netlify handling, and AJAX submission */}
        <form
          method="post"
          name="Data Collection Form"
          data-netlify="true"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          {/* Add a hidden input for the form name */}
          <input
            type="hidden"
            name="form-name"
            value="Data Collection Form"
          />
          {/* Add a label and input field for the name */}
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          {/* Add a label and input field for the email */}
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          {/* Add a button to submit the form */}
          <button type="submit">Send</button>
          {/* Add a reset button to clear the form */}
          <input type="reset" value="Clear" />
        </form>
      </div>
    </Layout>
  );
};

// Export the IndexPage component as default
export default IndexPage;

// Create and export the Head component for the page title
export const Head = () => <title>Home Page</title>;

