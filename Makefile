DISTRIB := $(shell uname)
VERBOSE = 0 
NODE_VERSION := $(shell node -v)

VERSION := $(subst v,,$(subst .,,$(NODE_VERSION)))
#$(error $(VERSION))  
VERSION := $(shell expr $(VERSION) )

all:  build 

install:
	npm install


build:
	npm run build-prod -- --colors


build-dev:
	npm run build-dev -- --colors
