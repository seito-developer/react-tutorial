import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/api',
});

export const fetchTest = async () => {
  const response = await api.get('/hoge');
  return response.data;
};

export const getBoards = async () => {
  const response = await api.get('/boards');
  return response.data;
};

export const createBoard = async (title) => {
  const response = await api.post('/boards', { title });
  return response.data;
};


// List
export const getTasklists = async (boardId) => {
  const response = await api.get(`/boards/${boardId}/tasklists`);
  return response.data;
};

export const createTasklist = async (listId, title) => {
  const response = await api.post(`/tasklists/${tasklistId}`, { title });
  return response.data;
};

export const updateTasklist = async (tasklistId, updates) => {
  const response = await api.put(`/tasklists/${tasklistId}`, updates);
  return response.data;
};

export const deleteTasklist = async (tasklistId) => {
  const response = await api.delete(`/tasklists/${tasklistId}`);
  return response.data;
};

// Cards
export const getCards = async (cardId) => {
  const response = await api.get(`/cards/${cardId}/cards`);
  return response.data;
};

export const createCard = async (cardId, title) => {
  const response = await api.post(`/cards/${cardId}/cards`, { title });
  return response.data;
};

export const updateCard = async (cardId, updates) => {
  const response = await api.put(`/cards/${cardId}`, updates);
  return response.data;
};

export const deleteCard = async (cardId) => {
  const response = await api.delete(`/cards/${cardId}`);
  return response.data;
};