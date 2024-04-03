import express from 'express';
import db from './db.js';
import config from '../config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS setup
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append(
        'Access-Control-Allow-Methods',
        'GET,PUT,POST,PATCH,OPTIONS,DELETE'
    );
    res.append('Access-Control-Allow-Headers', [
        'Content',
        'Content-Type',
        'Authorization',
    ]);

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

import router from './router.js';
app.use(config.routerBasePath, router);

app.listen(5000, () => {
    console.log(`[server]: Server is running at http://127.0.0.1:5000`);
});

export default app;
