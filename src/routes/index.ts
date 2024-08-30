import { Router } from 'express';
import { uploadImage } from '../controllers/upload';
import { confirmValue } from '../controllers/confirmController';
import { listMeasures } from '../controllers/listController';


const router = Router();

router.post('/upload', uploadImage);

router.patch('/confirm', confirmValue);

router.get('/:customer_code/list', listMeasures);



export default router;
