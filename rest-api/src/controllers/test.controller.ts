import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { testService } from '../services';

const createTest = catchAsync(async (req: Request, res: Response) => {
  const test = await testService.createTest(req.body);
  res.status(httpStatus.CREATED).send(test);
});

const submitTest = catchAsync(async (req: Request, res: Response) => {
  const score = await testService.submitTest(req.body, req.params.testId);
  res
    .status(httpStatus.CREATED)
    .send({ score, message: 'test submitted successfully' });
});

const getTest = catchAsync(async (req: Request, res: Response) => {
  const test = await testService.getTestById(req.params.testId);
  if (!test) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test not found');
  }
  res.send(test);
});

const getTests = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'email']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await testService.queryTests(filter, options);
  res.send(result);
});

const updateTest = catchAsync(async (req: Request, res: Response) => {
  const test = await testService.updateTestById(req.params.testId, req.body);
  res.send(test);
});

const deleteTest = catchAsync(async (req: Request, res: Response) => {
  await testService.deleteTestById(req.params.testId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createTest,
  getTest,
  getTests,
  updateTest,
  deleteTest,
  submitTest,
};
