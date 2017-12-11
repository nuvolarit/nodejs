//import * as http from "http";
//import * as lodash from "lodash";

import { createServer } from "http";
import { each } from "lodash";

const portNumber = 3000;

each([1, 2, 3, 4], (i) => {
    console.log(i);
});

// createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!')
//     console.log(`handled request ${req.url}`)
// }).listen(portNumber);

// console.log(`server listening on port ${portNumber}...`);