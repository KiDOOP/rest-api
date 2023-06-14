import { Router } from 'express';
import testController from '../controllers/test.controller';
import auth from '../middlewares/auth';

const router = Router();
router
  .route('/')
  .post(auth(), testController.createTest)
  .get(auth(), testController.getTests);

router
  .route('/:testId')
  .get(auth(), testController.getTest)
  .patch(auth(), testController.updateTest)
  .delete(auth(), testController.deleteTest);

router.route('/submit-test/:testId').post(auth(), testController.submitTest);

export default router;
