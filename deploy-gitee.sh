set -e


yarn docs:build


cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'
git remote add origin git@gitee.com:shenfeng1945/leetcode-note.git
git push -f -u origin master