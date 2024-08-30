import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('API de leitura de imagens');
});

export default router;
