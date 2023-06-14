import { ITestDocument } from './test.types';

export async function setLastUpdated(this: ITestDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}