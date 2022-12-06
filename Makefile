.PHONY: dev prod clean

dev:
	npm run dev
prod:
	npm run prod
clean:
	rm -f package-lock.json
	rm -rf node_modules/
	rm -rf dist/
