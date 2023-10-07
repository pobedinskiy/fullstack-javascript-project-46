install:
	npm ci

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx test

test-coverage:
	npx test -- --coverage --coverageProvider=v8

