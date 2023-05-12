import axios from "axios";

/*************************************************************************** */

/**Post data. */
const postData = async (url, object = {}) => {
  const data = await axios.post(url, object);
  return data;
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
export { getData, postData, putData, deleteData };
