import Container from 'typedi';
import { Client, ClientOptions, Collection } from 'discord.js';

import { Logger } from '@/shared/log';

export class CustomClient extends Client {
  commands = new Collection();
  commandArray = [];
  logger = Container.get(Logger);

  constructor(options: ClientOptions) {
    super(options);
  }

  async handlerCommands(_: string) {}

  async handlerEvents(_: string) {}
}
