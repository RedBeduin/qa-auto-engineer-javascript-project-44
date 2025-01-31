#!/usr/bin/env node
import engine from '../src/engine.js';
import { sayPrimeOrNot, brainPrimeQuestion } from '../src/brain-prime.js';

engine(sayPrimeOrNot, brainPrimeQuestion);
