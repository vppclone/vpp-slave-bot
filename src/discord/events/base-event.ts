import { DiscordFactory } from '../factory';

import { Logger } from '@/shared/log';

export class BaseEvent {
  constructor(
    protected readonly once: boolean,
    protected readonly name: any,
    protected readonly discordFactory: DiscordFactory,
    protected readonly logger: Logger,
  ) {
    this.init();
  }

  protected init() {
    if (this.once) {
      this.discordFactory.client.once(this.name, (...args) => this.execute(...args));
      return;
    }

    this.discordFactory.client.on(this.name, (...args) => this.execute(...args));
  }

  // TODO Silver remove any
  protected execute(...args: any[]): void {}
}
