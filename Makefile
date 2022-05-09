VERSION := 0.0.1

build:
	docker buildx build --platform=linux/amd64 -t personal-website .

auth:
	echo $1 | docker login ghcr.io -u USERNAME --password-stdin

tag:
	docker tag personal-website ghcr.io/apinanyogaratnam/my-personal-website-v3.0:${VERSION}

push:
	docker push ghcr.io/apinanyogaratnam/my-personal-website-v3.0:${VERSION}
