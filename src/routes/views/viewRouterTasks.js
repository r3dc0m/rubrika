import express from 'express';
import { 
  getTasks, 
  getCreateTaskForm, 
  createTask,
  getEditTaskForm,
  updateTask,
  deleteTask
} from '../../controllers/views/controllerTasksViews.js';
import { requireRoleView } from '../../middleweares/middlewareAuth.js';

const router = express.Router();

router.get('/', getTasks);
router.get('/new', requireRoleView('profesor'), getCreateTaskForm);
router.post('/new', requireRoleView('profesor'), createTask);
router.get('/:id/edit', requireRoleView('profesor'), getEditTaskForm);
router.post('/:id/edit', requireRoleView('profesor'), updateTask);
router.post('/:id/delete', requireRoleView('profesor'), deleteTask);

export default router;