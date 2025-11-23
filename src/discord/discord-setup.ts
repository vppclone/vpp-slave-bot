import { readdirSync } from 'fs';
import { join } from 'path';
import Container, { Service } from 'typedi';

import { DiscordFactory } from './factory';
import { ChannelType, EmbedBuilder } from 'discord.js';

@Service()
export class DiscordSetup {
  constructor(readonly discordFactory: DiscordFactory) {}

  public init() {
    this.initHelper('events', 'event');
  }

  // TODO remove this
  public sendMessage() {
    this.discordFactory.client.on('ready', async () => {
      const channel = this.discordFactory.client.channels.cache.get('1436247158692122726');
      const testEmbed = new EmbedBuilder().setImage('https://i.imgur.com/tUJQIz9.png');

      const tmp = Math.floor(Date.now());
      const test = new Date('2025-11-24T10:00:00');
      const test2 = Math.floor(test.getTime());

      if (channel && channel.type === ChannelType.GuildText) {
        setTimeout(() => {
          channel.send({ embeds: [testEmbed], content: '<@&1415920332019073074>' });
        }, test2 - tmp);
      }
    });
  }

  private initHelper(path: string, type: string) {
    const folderPath = join(__dirname, path);
    readdirSync(folderPath)
      .filter((file) => file.includes(`.${type}`))
      .map((file) => join(folderPath, file))
      .map((path) => require(path))
      .map((fileExport) => fileExport[Object.keys(fileExport)[0]])
      .map((fileClass) => Container.get(fileClass));
  }
}
