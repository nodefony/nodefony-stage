DISTRIB := $(shell uname)
VERBOSE = 0 
NODE_VERSION := $(shell node -v)

VERSION := $(subst v,,$(subst .,,$(NODE_VERSION)))
#$(error $(VERSION))  
VERSION := $(shell expr $(VERSION) )

all: install 

install:
	npm install

clean:
	rm -rf ./node_modules/*


.EXPORT_ALL_VARIABLES:
.PHONY: demo
