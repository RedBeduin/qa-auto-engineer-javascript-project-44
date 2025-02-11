#!/usr/bin/env node
import engine from '../src/engine.js';
import { progression, brainProgressionQuestion } from '../src/games/brain-progression.js';

engine(progression, brainProgressionQuestion);
