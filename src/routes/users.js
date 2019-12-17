import { Router } from 'express';
import getUserHandlers from '../controllers/users';

export default (deps) => {
	let router = Router();
	const { create, update } = getUserHandlers(deps);

	// mount the facets resource
	router.post('/create', create);
	router.get('/update', update);
	
	return router;
};
