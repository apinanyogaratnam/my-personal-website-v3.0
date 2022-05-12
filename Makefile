VERSION := 0.0.4

build:
	docker buildx build --platform=linux/amd64 -t personal-website .

auth:
	grep -v '^#' .env.local | grep -e "CR_PAT" | sed -e 's/.*=//' | docker login ghcr.io -u USERNAME --password-stdin

tag:
	docker tag personal-website ghcr.io/apinanyogaratnam/my-personal-website-v3.0:${VERSION}

push:
	docker push ghcr.io/apinanyogaratnam/my-personal-website-v3.0:${VERSION}

all:
	make build && make auth && make tag && make push
