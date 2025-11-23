import { Events } from 'discord.js';
import { Service } from 'typedi';

import { Logger } from '@/shared/log';

import { DiscordFactory } from '../factory';

import { BaseEvent } from './base-event';

@Service()
export class ReadyEvent extends BaseEvent {
  constructor(
    protected readonly discordFactory: DiscordFactory,
    protected readonly logger: Logger,
  ) {
    super(true, Events.ClientReady, discordFactory, logger);
  }

  override async execute() {
    if (this.discordFactory.client.user) {
      this.logger.info(
        `Bot is ready!!! ${this.discordFactory.client.user.tag} is logged in and online`,
      );
      return;
    }

    this.logger.info(`Bott is offline`);
  }
}
