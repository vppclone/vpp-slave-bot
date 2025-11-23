import { Service } from 'typedi';

@Service()
export class Logger {
  constructor() {}

  public log(message: String, ...args: any[]) {
    console.log(message, ...args);
  }

  public info(message: String, ...args: any[]) {
    console.info(message, ...args);
  }
}
