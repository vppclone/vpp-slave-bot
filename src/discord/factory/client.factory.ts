import { IntentsBitField, Partials } from 'discord.js';
import { Service } from 'typedi';

import { CustomClient } from '../models';

@Service()
export class DiscordFactory {
  readonly client: CustomClient;

  constructor() {
    this.client = new CustomClient({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.DirectMessages,
      ],
      partials: [
        Partials.Message,
        Partials.ThreadMember,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.User,
        Partials.Channel,
        Partials.Reaction,
      ],
    });
    this.client.login(process.env.DISCORD_TOKEN);
  }
}
