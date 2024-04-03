import { Router } from 'express';

const router = Router();

router.post('/isEven', (req, res) => {
    const num = req.body.num;

    res.send({ isEven: num % 2 === 0 });
});

export default router;
