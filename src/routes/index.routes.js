import {Router} from 'express';
import { listarCategoriasIndex } from '../controllers/index.controller.js';

const router = Router();

router.get('/', listarCategoriasIndex)

export default router;