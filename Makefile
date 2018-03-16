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
EXECUTABLES := yarn node npm
version := $(foreach bin, $(EXECUTABLES),\
	$(if $(shell ${WHICH} $(bin) 2>${DEVNUL} ),\
		$(bin)_EXEC := true\
		$(info $(bin) version : $(shell $(bin) -v  2>${DEVNUL} ) ),\
		$(info No $(bin) in PATH))) 2>${DEVNUL}

#$(info ######## RESULT : $(yarn_EXEC) )
#$(info ######## RESULT : $(node_EXEC) )
#$(info ######## RESULT : $(npm_EXEC) )

all:
	make build-dev
	make build && echo "success build-prod !" || echo "failure build-prod!"

install:
	npm install
	$(MAKE)
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
