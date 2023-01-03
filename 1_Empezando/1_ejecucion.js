import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}

// k6 run 1_Empezando/1_ejecucion.js --vus 10 --duration 30s