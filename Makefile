.PHONY: dev prod clean

dev:
	pnpm run dev
prod:
	pnpm run prod
clean:
	rm -f pnpm-lock.yaml
	rm -rf node_modules/
	rm -rf dist/
