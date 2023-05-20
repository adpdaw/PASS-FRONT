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


export { getData, postData, putData, deleteData, postDataHeaders,getDataHeaders,putDataHeaders,deleteDataHeaders };
