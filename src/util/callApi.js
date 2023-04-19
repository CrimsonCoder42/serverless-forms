// Import fetch from node-fetch
import fetch from "node-fetch";

// Define the callAPI function
async function callAPI(method, uri, params, body) {
  // Define the JSON MIME type
  const jsonMimeType = {
    "Content-type": "application/json",
  };

  try {
    // Set up the fetch request
    const response = await fetch(uri, {
      method: method, // GET, POST, PUT, DELETE, etc.
      // Include 'body' only when method is POST
      ...(method == "POST" ? { body: body } : {}),
      // If 'PUT', set the mimetype to json and stringify the body
      ...(method == "PUT"
        ? { headers: jsonMimeType, body: JSON.stringify(body) }
        : {}),
    });

    // Parse the response JSON data to a JSON object and return it
    return await response.json();
  } catch (err) {
    // Log any errors and return an error status
    console.error(err);
    return "{'status':'error'}";
  }
}

// Export the callAPI function as default
export default callAPI;
