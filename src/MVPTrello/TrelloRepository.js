import axios from 'axios';
import { BASE_URL } from '../shared/consts';
import * as localStorage from '../shared/localStorage';

class TrelloRepository {
  getBoards() {
    return axios.get(`${BASE_URL}/boards`);
  }
  addBoard(board) {
    try {
      return axios.post(`${BASE_URL}/boards`, board);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}

export default TrelloRepository;
