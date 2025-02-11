#!/usr/bin/env node
import engine from '../src/engine.js';
import { calc, brainCalcQuestion } from '../src/games/brain-calc.js';

engine(calc, brainCalcQuestion);
