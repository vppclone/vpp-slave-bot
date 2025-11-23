import fs from 'fs';
import { Service } from 'typedi';

import { Logger } from '@/shared/log';

import { CustomClient } from '../models';

@Service()
export class ImportService {
  constructor(private readonly logger: Logger) {}

  public import(client: CustomClient, handlerPath: string): void {
    // const handlerRootPath = `./src/${handlerPath}`;
    // const handlerFolders = fs
    //   .readdirSync(handlerRootPath)
    //   .filter((file) => !file.endsWith('handlerFactory.ts'));
    // for (const folder of handlerFolders) {
    //   const handlerFiles = fs
    //     .readdirSync(`${handlerRootPath}/${folder}`)
    //     .filter((file) => file.endsWith('.ts'));
    //   for (const file of handlerFiles) {
    //     require(`${handlerPath}/${folder}/${file}`)(client);
    //   }
    // }
    this.logger.info('Loading discord handler Success!');
  }
}
