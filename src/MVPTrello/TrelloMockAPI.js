import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { BASE_URL } from '../shared/consts';
import * as storage from '../shared/localStorage';

const mockAPI = new AxiosMockAdapter(axios);

mockAPI.onGet(`${BASE_URL}/boards`).reply(200, storage.get('boards', {}));
mockAPI.onPost(`${BASE_URL}/boards`).reply((config) => {
  console.log('config :>> ', config);
  const existingBoards = storage.get('boards');
  const data = JSON.parse(config.data);
  storage.set('boards', {
    ...existingBoards,
    [data.id]: { ...data },
  });

  return [200, storage.get('boards')];
});
