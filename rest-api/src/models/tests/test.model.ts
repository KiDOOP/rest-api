import { model } from 'mongoose';
import { ITestDocument, ITestModel } from './test.types';
import TestSchema from './test.schema';

const TestModel = model<ITestDocument, ITestModel>('test', TestSchema);
export default TestModel;
