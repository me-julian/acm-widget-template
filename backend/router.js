import { Router } from 'express';
import db from './widgetDb.js';

const router = Router();

router.post('/isEven', (req, res) => {
    const num = req.body.num;

    res.send({ isEven: num % 2 === 0 });
});

router.get('/attendees', (req, res) => {
    db.all(`SELECT rowid AS id, * FROM attendees`, (err, rows) => {
        res.send(rows);
    });
});

router.get('/attendees/:id', (req, res) => {
    db.get(
        `SELECT rowid AS id, * FROM attendees WHERE rowid=$id`,
        { $id: req.params.id },
        (err, row) => {
            res.send(row);
        }
    );
});

export default router;
