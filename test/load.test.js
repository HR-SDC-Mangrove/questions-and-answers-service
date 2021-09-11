// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   vus: 300,
//   duration: '20s',
// };

// export default function () {
//   http.get(`http://localhost:8888/qa/questions?product_id=${Math.ceil(Math.random() * 1000)}`);
//   sleep(1);
// }