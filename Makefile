CONTAINER_APP?=$(shell basename $(CURDIR))-app-1
CONTAINER_WRANGLER?=$(shell basename $(CURDIR))-wrangler-1

.PHONY: up dev prod npm wrangler clean nuke

up:
	@if [ ! "$$(docker ps -q -f name=$(CONTAINER_APP))" ]; then \
		docker-compose up; \
	fi ||:

dev: up

prod: up
	@docker exec -it $(CONTAINER_APP) npm run prod ||:

npm: up
	@docker exec -it $(CONTAINER_APP) npm \
	$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS) \
	||:

wrangler: up
	@docker exec -it $(CONTAINER_WRANGLER) wrangler \
	$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS) \
	||:

clean:
	rm -f package-lock.json
	rm -rf node_modules/
	rm -rf dist/

nuke: clean
	docker compose down
	docker compose up --build --force-recreate

%:
	@:
