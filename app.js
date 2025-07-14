
import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";
import { router as routerFromDataFolder } from "./DataFolder/routes.js";

import { StartFunc as StartFuncFromEntryFile } from "./WA/entryFile.js";

import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
global.__basedir = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7019');

app.use(cookieParser());

app.use('/', express.static(path.join(path.resolve(), 'public')));
app.use("/DataFolder", routerFromDataFolder);

app.get('/StartWA', async (req, res) => {
    await StartFuncFromEntryFile({ inReponse: res });
});

StartFuncKWSServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);