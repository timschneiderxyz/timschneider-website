.PHONY: dev prod nuke tunnel

dev:
	pnpm run dev

prod:
	pnpm run prod

nuke:
	rm -f pnpm-lock.yaml
	rm -rf node_modules/
	rm -rf dist/
	pnpm install

tunnel:
	cloudflared tunnel --protocol http2 --url localhost:8000
