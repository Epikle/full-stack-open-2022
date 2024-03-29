import axios from 'axios';
const baseUrl = '/api/persons';

export const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export const createPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

export const updatePerson = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request.then((response) => response.data);
};

export const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};
