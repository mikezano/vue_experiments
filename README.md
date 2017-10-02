# vue_experiments

> Testing ground for Vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


exec("npm run build");
exec("cp 404.html build")
exec("git checkout -B gh-pages");
exec("git add -f build");
exec("git commit -a  -m 'rebuild-website'");
exec("git filter-branch -f --prune-empty --subdirectory-filter build");
exec("git push -f origin gh-pages");
exec("git checkout -");
