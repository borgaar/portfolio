.PHONY prod
prod:
	docker build -t "portfolio:latest" .
	- docker rm -f portfolio
	docker run -d -p 2808:3000 --restart unless-stopped --name portfolio -d portfolio:latest
