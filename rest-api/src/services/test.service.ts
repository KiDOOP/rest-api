/* eslint-disable no-plusplus */
import httpStatus from 'http-status';
import { Test, TestUpdate } from '../shared/customTypes';
import TestModel from '../models/tests/test.model';
import ApiError from '../utils/ApiError';

const createTest = async (testBody: Test) => {
  return TestModel.create(testBody);
};

const getTestById = async (id: string) => TestModel.findById(id);

const queryTests = async (filter: any, options: any) => {
  const tests = await TestModel.paginate(filter, options);
  return tests;
};

const submitTest = async (
  testBody: { userId: string; answers: [string] },
  testId: string
) => {
  const test: any = await getTestById(testId);
  console.log(test);
  let score = 0;
  for (let index = 0; index < test.questions.length; index++) {
    if (test.questions[index].answer === testBody.answers[index]) {
      score++;
    }
  }
  return score;
};

const updateTestById = async (testId: string, updateBody: TestUpdate) => {
  const test = await getTestById(testId);
  if (!test) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test not found');
  }
  Object.assign(test, updateBody);
  await test.save();
  return test;
};

const deleteTestById = async (testId: string) => {
  const test = await getTestById(testId);
  if (!test) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test not found');
  }
  await test.remove();
  return test;
};

export default {
  createTest,
  updateTestById,
  queryTests,
  deleteTestById,
  getTestById,
  submitTest,
};
