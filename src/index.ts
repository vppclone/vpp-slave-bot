import 'reflect-metadata';

import { config } from 'dotenv';
import Container from 'typedi';

import { DiscordSetup } from '@/discord';

config();
Container.get(DiscordSetup).init();
Container.get(DiscordSetup).sendMessage();
