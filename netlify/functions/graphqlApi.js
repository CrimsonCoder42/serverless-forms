// Import fetch from node-fetch
const fetch = require("node-fetch");

// Define the handler function for the Lambda
const handler = async function (event, context) {
  // Set the API URL for the MongoDB Realm GraphQL endpoint
  const apiUrl =
    "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/photosapp-zxrdq/graphql";
  let graphqlQuery = {};

  try {
    // Send a POST request to the API URL
    const response = await fetch(apiUrl, {
      method: "post",
      headers: {
        Accept: "application/json",
        apiKey: `${process.env.MONGO_API_KEY}`,
      },
      body: JSON.stringify(graphqlQuery),
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      // Return the status code and status text if not OK
      return { statusCode: response.status, body: response.statusText };
    }

    // Parse the response data
    const data = await response.json();

    // Return the parsed data with a 200 status code
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    // Log the error to the Netlify function log
    console.log(error);

    // Return a 500 status code and the error message
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

// Export the handler function
module.exports = { handler };
