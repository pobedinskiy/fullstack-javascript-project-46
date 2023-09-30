#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference')
  .version('0.0.1', '-V, --VERSION', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .helpOption('-h, --help', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
