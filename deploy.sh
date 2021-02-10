set -e


yarn docs:build


cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:shenfeng1945/leetcode-note.git master:gh-pages