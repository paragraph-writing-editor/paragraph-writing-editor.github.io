push: deploy
	git add docs
	git commit -m "deploy"
	git push origin HEAD

deploy: build
	rm -rf docs
	cp -a .output/public docs

build: merge
	yarn generate

merge: rebase
	git merge origin/main -m 'Merge remote-tracking branch 'origin/main' into release'

rebase:
	git fetch -p
	git rebase origin/release
