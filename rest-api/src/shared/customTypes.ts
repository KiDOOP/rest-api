export type User = {
  name: string;
  email: string;
  password: string;
  phone_number: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
  phone_number?: string;
};

export type Test = {
  name: string;
  numOfQues: number;
  questions: [];
  users: [];
};

export type TestUpdate = {
  name?: string;
  numOfQues?: number;
  questions?: [];
  users?: [];
};
