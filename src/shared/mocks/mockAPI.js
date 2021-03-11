import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { BASE_URL } from '../consts';
import * as storage from '../localStorage';

const mockAPI = new AxiosMockAdapter(axios);
const pathRegex = new RegExp(`${BASE_URL}\/boards\/*`);

const getIdInURL = (url) => {
  const arrayPath = url.split('/');
  const id = arrayPath[arrayPath.length - 1];
  return id;
};

mockAPI.onGet(`${BASE_URL}/boards`).reply((config) => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200, storage.get('boards', {})]);
    }, 3000);
  });
});

mockAPI.onGet(pathRegex).reply((config) => {
  const boardId = getIdInURL(config.url);
  const storageBoars = storage.get('boards');
  const board = storageBoars[boardId];
  return [200, board];
});

mockAPI.onPost(`${BASE_URL}/boards`).reply((config) => {
  const existingBoards = storage.get('boards');
  const data = JSON.parse(config.data);
  storage.set('boards', {
    ...existingBoards,
    [data.id]: { ...data },
  });

  return [200, storage.get('boards')];
});
