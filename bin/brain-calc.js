#!/usr/bin/games/env node
import engine from '../src/engine.js';
import { calc, brainCalcQuestion } from '../src/brain-calc.js'

engine(calc, brainCalcQuestion);
