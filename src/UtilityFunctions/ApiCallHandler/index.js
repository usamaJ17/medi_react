

 const makeApiCall= async(url, body , method = 'GET')=> {
    try {
      const headers = {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      };
  
      const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      };
  
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors (e.g., network issues, parsing errors, etc.)
      console.error('Error making API call:', error.message);
      throw error; // Propagate the error further if needed
    }
  }

  export default makeApiCall
  