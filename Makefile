VERSION := 0.0.11

start:
	npm run dev

build:
	docker buildx build --platform=linux/amd64 -t personal-website .

run:
	docker run -d -p 3001:3001 -it personal-website

auth:
	grep -v '^#' .env.local | grep -e "CR_PAT" | sed -e 's/.*=//' | docker login ghcr.io -u USERNAME --password-stdin

tag:
	docker tag personal-website ghcr.io/apinanyogaratnam/my-personal-website-v3.0:${VERSION}
	docker tag personal-website ghcr.io/apinanyogaratnam/my-personal-website-v3.0:latest
	git tag -m "v${VERSION}" v${VERSION}

push:
	docker push ghcr.io/apinanyogaratnam/my-personal-website-v3.0:${VERSION}
	docker push ghcr.io/apinanyogaratnam/my-personal-website-v3.0:latest
	git push --tags

all:
	make build && make auth && make tag && make push

exec:
	docker exec -it $(sha) /bin/sh
