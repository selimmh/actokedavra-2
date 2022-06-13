import axios from "axios";

// mock server
const baseUrl = "http://localhost:8000/";

// get all actors
export const getActors = async () => {
  try {
    const response = await axios.get(baseUrl + "actors");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// add new actor
export const addActor = async (actor) => {
  try {
    const response = await axios.post(baseUrl + "actors", actor);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update actor
export const updateActor = async (actor) => {
  try {
    const response = await axios.put(baseUrl + "actors/" + actor.id, actor);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// delete actor
export const deleteActor = async (id) => {
  try {
    const response = await axios.delete(baseUrl + "actors/" + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
