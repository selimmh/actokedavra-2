import axios from "axios";
const baseUrl = "http://localhost:8000/";

// get
export const getActors = async () => {
  try {
    const response = await axios.get(baseUrl + "actors");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// post
export const addActor = async (actor) => {
  try {
    const response = await axios.post(baseUrl + "actors", actor);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// put
export const editActor = async (actor) => {
  try {
    const response = await axios.put(baseUrl + "actors/" + actor.id, actor);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// delete
export const deleteActor = async (id) => {
  try {
    const response = await axios.delete(baseUrl + "actors/" + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
