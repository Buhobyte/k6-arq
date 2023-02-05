import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 4000 },
        { duration: '1m', target: 4000 },
        { duration: '2m', target: 0 },
    ],
};

export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}