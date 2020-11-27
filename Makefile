.EXPORT_ALL_VARIABLES:
.DEFAULT_GOAL := help
.PHONY: $(MAKECMDGOALS)

COLOR_ERROR = \033[31m

server:
ifdef project
	docker run --rm -it -u `id -u`:`id -g` -v `pwd`/$(project):/src -p 1313:1313 klakegg/hugo:0.74.3-alpine server
else
	@printf "${COLOR_ERROR}[Error] \"project\" parameter needed${COLOR_RESET}\n"
endif

build:
ifdef project
	rm -rf `pwd`/$(project)/public
	docker run --rm -it -u `id -u`:`id -g` -v `pwd`/$(project):/src -p 1313:1313 klakegg/hugo:0.74.3-alpine build
	rsync -r --delete `pwd`/$(project)/public/* `pwd`/../backTo1984-$(project)
else
	@printf "${COLOR_ERROR}[Error] \"project\" parameter needed${COLOR_RESET}\n"
endif