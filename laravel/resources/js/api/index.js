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

export const getLists = async (boardId) => {
  const response = await api.get(`/boards/${boardId}/lists`);
  return response.data;
};

export const createList = async (boardId, title) => {
  const response = await api.post(`/boards/${boardId}/lists`, { title });
  return response.data;
};

export const getCards = async (listId) => {
  const response = await api.get(`/lists/${listId}/cards`);
  return response.data;
};

export const createCard = async (listId, title) => {
  const response = await api.post(`/lists/${listId}/cards`, { title });
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