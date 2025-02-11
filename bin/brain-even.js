#!/usr/bin/env node
import engine from '../src/engine.js';
import { sayEvenOrNot, brainEvenQuestion } from '../src/games/brain-even.js';

engine(sayEvenOrNot, brainEvenQuestion);
