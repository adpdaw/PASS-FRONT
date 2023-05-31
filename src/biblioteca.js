import axios from "axios";

/*************************************************************************** */

/**Post data. */
const postData = async (url, object = {}) => {
  
  const data = await axios.post(url, object);
  return data;

};
/**Post data with headers. */
const postDataHeaders = async (url, object = {},token) => {
  
  const response = await axios.post(url, object, {headers: {
    'Authorization': `Bearer ${token}`}})
return response;
};



/**put data.********** */
const putData = async (url, object) => {
  const data = await axios.put(url, object);
  return data;
};
/**Delete data. */

const deleteData = async (url, object) => {
  const data = await axios.delete(url, { object });
  return data;
};
/**Get data. */
const getData = async (url) => {
  const data = await axios.get(url);
  return data;
};

/**get data with token. */

const getDataHeaders = async(url,token) => {
  
  const response = await axios.get(url, {headers: {
    'Authorization': `Bearer ${token}`}});
return response;
};
/**put data with token.*/
const putDataHeaders = async (url, object,token) => {
  const data = await axios.put(url, object,{headers: {
    'Authorization': `Bearer ${token}`}});
  return data;
};

/**Delete data with token. */

const deleteDataHeaders = async (url,token) => {
  const data = await axios.delete(url,{headers: {
    'Authorization': `Bearer ${token}`}});
  return data;
};



// Function to handle the token request
const requestToken = async (code, redirectUri) => {
  try {
    const response = await axios.post('https://www.googleapis.com/oauth2/v4/token', {
      code: code,
      client_id: '910043443252-cm54om8q8rt4u32udfvvij2avq36653i.apps.googleusercontent.com',
      client_secret: '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',
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });

    // Handle the token response
    const { access_token, expires_in, refresh_token } = response.data;
    // ...
  } catch (error) {
    // Handle the error
    console.log('Token request error:', error);
  }
};
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post('/api/refresh-token', { refresh_token: refreshToken });
    return response.data.access_token;
  } catch (error) {
    // Handle error
    throw new Error('Token refresh failed');
  }
};





export { getData, postData, putData, deleteData, postDataHeaders,getDataHeaders,putDataHeaders,deleteDataHeaders,requestToken };
