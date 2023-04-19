// Import required libraries
import * as React from "react";
import Layout from "../components/layout";

// Create the IndexPage component
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h3>Netlify Forms - Basic</h3>
        <p>Exploring Netlify Forms</p>
        {/* Create a form with POST method, a name, and enable Netlify handling */}
        <form
          method="post"
          name="Data Collection Form"
          data-netlify="true"
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
          <br />
          {/* Add a label and input field for the email */}
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <br />
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

