import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '20s',
};

export default function () {
  //http.get(`http://localhost:8888/qa/questions?product_id=1000004`);
  http.get(`http://localhost:8888/qa/questions/1000/answers`);
  sleep(1);
}