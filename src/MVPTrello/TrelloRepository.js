import axios from 'axios';
import { BASE_URL } from '../shared/consts';

class TrelloRepository {
  async getBoards() {
    console.log('getBoards');
    const { data } = await axios.get(`${BASE_URL}/boards`);
    return data;
  }

  async getBoardById(boardId) {
    const { data } = await axios.get(`${BASE_URL}/boards/${boardId}`);
    return data;
  }

  saveBoard(board) {
    try {
      return axios.post(`${BASE_URL}/boards`, board);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}

export default TrelloRepository;
