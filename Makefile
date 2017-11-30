DISTRIB := $(shell uname)
VERBOSE = 0
NODE_VERSION := $(shell node -v)

VERSION := $(subst v,,$(subst .,,$(NODE_VERSION)))
VERSION := $(shell expr $(VERSION) )

ifeq ($(findstring cmd.exe,$(SHELL)),cmd.exe)
	DEVNUL := NUL
	WHICH := where
	INSTALLER := npm
else
	DEVNUL := /dev/null
	WHICH := which
	INSTALLER := npm
endif
EXECUTABLES = yarn node npm
K := $(foreach bin, $(EXECUTABLES),\
	$(if $(shell ${WHICH} $(bin) 2>${DEVNUL} ),\
		$(info $(bin) version : $(shell $(bin) -v  2>${DEVNUL} ) ),\
		$(info No $(bin) in PATH))) 2>${DEVNUL}

all:
	make build-dev
	make build && echo "success build-prod !" || echo "failure build-prod!"

install:
	yarn install
	$(MAKE) build -C ./demo/nodefony

build:
	npm run build-prod

build-dev:
	npm run build-dev

demo:
	#$(MAKE) -C ./demo/express
	npm start --prefix ./demo/nodefony

clean:
	rm -rf ./dist/* ; \
	rm -rf ./node_modules/* ; \
	rm -rf ./node_modules/.bin ; \
	$(MAKE) -C ./demo/express clean

.EXPORT_ALL_VARIABLES:
.PHONY: demo
