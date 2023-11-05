### Hexlet tests and linter status:
[![Actions Status](https://github.com/pobedinskiy/fullstack-javascript-project-46/workflows/hexlet-check/badge.svg)](https://github.com/pobedinskiy/fullstack-javascript-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b91718d58f2fe8aa4bc3/test_coverage)](https://codeclimate.com/github/pobedinskiy/fullstack-javascript-project-46/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/b91718d58f2fe8aa4bc3/maintainability)](https://codeclimate.com/github/pobedinskiy/fullstack-javascript-project-46/maintainability)
# Difference Calculator
## Description
This CLI utility compares two files (in fact, these two files just represent the same file before and after it has been changed) and outputs the differences between them. It supports the following input data formats: json, yaml, yml.
It uses 3 output data formatters:
- "stylish" (formatter by default) outputs the result as a tree structure in which the differences between these two files are marked with either "+" (when something has been added) or "-" (when something has been deleted);   
- "plain" outputs the result as a set of lines describing the differences;
- "json" outputs the result in json format, with property "name" containg information about the differences.
###Main requirements
Node.js v 20.2.0 or above
## Installation 
To install the utility you need to
- clone this repository
- run the command "cd fullstack-javascript-project-46"
- run the command "make install"
- run the command "npm link
## How to use
То call the help, run the command "gendiff" with option "-h" / "--help" as shown below:
```
gendiff -h
```
### Example of calling the help:
[![asciicast](https://asciinema.org/a/5WYmg8Lg4hb6wURHFOwsjlQWj.svg)](https://asciinema.org/a/5WYmg8Lg4hb6wURHFOwsjlQWj)
## Examples of usage
### example of using the command "gendiff" on two flat json files with the format by default ("stylish")  
[![asciicast](https://asciinema.org/a/TAR4E4S1MEpO2YoJhkQgrwTfS.svg)](https://asciinema.org/a/TAR4E4S1MEpO2YoJhkQgrwTfS)
### example of using the command "gendiff" on two flat yml files with the format by default ("stylish")  
[![asciicast](https://asciinema.org/a/UL7CDdOKBBrSNYjfwpKnbYPTU.svg)](https://asciinema.org/a/UL7CDdOKBBrSNYjfwpKnbYPTU)
### examples of using the command "gendiff" on two nested json files and two yml files with the format by default ("stylish") 
[![asciicast](https://asciinema.org/a/alWtfqYw5IPXFAFk3QUkbcxLF.svg)](https://asciinema.org/a/alWtfqYw5IPXFAFk3QUkbcxLF)
### example of using the command "gendiff"on two nested json files with the format "plain"
[![asciicast](https://asciinema.org/a/dh8raDPswlOEtQRCkGrdkDVUm.svg)](https://asciinema.org/a/dh8raDPswlOEtQRCkGrdkDVUm)
### example of using the command "gendiff" on two nested json files with the format "json"
[![asciicast](https://asciinema.org/a/g1PaI9cNHBa0JQKzG2OMqNos0.svg)](https://asciinema.org/a/g1PaI9cNHBa0JQKzG2OMqNos0)
