import { Document, Model } from 'mongoose';

export interface ITest {
  name: string;
  numOfQues: number;
  questions: [];
  users: [];
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface ITestDocument extends ITest, Document {
  setLastUpdated: (this: ITestDocument) => Promise<void>;
}

export interface ITestModel extends Model<ITestDocument> {
  paginate: (
    filter: any,
    options: any
  ) => {
    results: any;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: any;
  };
}
