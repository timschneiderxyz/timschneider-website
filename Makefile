.PHONY: dev build start clean nuke

dev:
	@pnpm dev ||:

build:
	@pnpm build ||:

start:
	@pnpm start ||:

clean:
	rm -f pnpm-lock.yaml
	rm -rf node_modules/
	rm -rf .next/
	rm -rf out/

nuke: clean
	@pnpm install ||:

%:
	@:
