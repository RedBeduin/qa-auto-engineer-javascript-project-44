#!/usr/bin/env node
import engine from '../src/engine.js';
import { sayEvenOrNot, brainEvenQuestion } from '../src/brain-even.js';

engine(sayEvenOrNot, brainEvenQuestion);
