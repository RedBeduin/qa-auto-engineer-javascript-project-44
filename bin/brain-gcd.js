#!/usr/bin/env node
import engine from '../src/engine.js';
import { gcd, braingcdQuestion } from '../src/games/brain-gcd.js';

engine(gcd, braingcdQuestion);
