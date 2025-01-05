import { Router } from 'express';
import { IndexController } from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/articles', router);
    router.get('/', indexController.getArticles.bind(indexController));
    router.get('/:id', indexController.getArticleById.bind(indexController));
}