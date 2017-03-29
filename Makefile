DISTRIB := $(shell uname)
VERBOSE = 0 
NODE_VERSION := $(shell node -v)

VERSION := $(subst v,,$(subst .,,$(NODE_VERSION)))
#$(error $(VERSION))  
VERSION := $(shell expr $(VERSION) )

all: install  build build-dev demo 

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
