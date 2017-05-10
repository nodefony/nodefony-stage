DISTRIB := $(shell uname)
VERBOSE = 0 
NODE_VERSION := $(shell node -v)

VERSION := $(subst v,,$(subst .,,$(NODE_VERSION)))
#$(error $(VERSION))  
VERSION := $(shell expr $(VERSION) )

all: 
	make install
	make build-dev
	make build && echo "success build-prod !" || echo "failure build-prod!" 
	make demo

install:
	npm install

build:
	npm run build-prod

build-dev:
	npm run build-dev

demo:
	$(MAKE) -C ./demo/express

clean:
	rm -rf ./dist/* ; \
	rm -rf ./node_modules/* ; \
	rm -rf ./node_modules/.bin ; \
	$(MAKE) -C ./demo/express clean

.EXPORT_ALL_VARIABLES:
.PHONY: demo
