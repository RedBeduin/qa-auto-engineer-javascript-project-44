#!/usr/bin/env node
import engine from '../src/engine.js';
import { sayPrimeOrNot, brainPrimeQuestion } from '../src/games/brain-prime.js';

engine(sayPrimeOrNot, brainPrimeQuestion);
