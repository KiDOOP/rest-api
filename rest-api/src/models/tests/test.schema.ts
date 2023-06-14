import { Schema } from 'mongoose';
import { setLastUpdated } from './test.methods';
import { toJSON, paginate } from '../plugins';

const TestSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  numOfQues: {
    type: Number,
    required: [true, 'No of Questions is required'],
    trim: true,
  },
  questions: [
    {
      question: String,
      options: [],
      answer: String,
    },
  ],
  users: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'User is required'],
      },
    },
  ],
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

// add plugin that converts mongoose to json
TestSchema.plugin(toJSON);
TestSchema.plugin(paginate);
TestSchema.methods.setLastUpdated = setLastUpdated;

export default TestSchema;
