import { Router } from 'express';
import PingController from '@controllers/PingController';

const routes = Router();

routes.get('/ping', PingController.index);

export default routes;