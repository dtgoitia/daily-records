# daily-records

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Publish to GitHub
```
npm run publish
```
Build project to `dist/` folder and publish files in `dist/` to the `gh-pages` remote branch.

### Service Workers

Production like server (in terms of routes), in localhost:
```
python serve.py
```

**Site cannot be installed: the page is not served from a secure origin**

Service workers only work (not pun intended) over secure connections (HTTPS) and locally. However, if you serve your app with Vue's development server locally, you need to tell Chrome to trust your URL:
```
google-chrome-stable http://localhost:8080/daily-records --unsafely-treat-insecure-origin-as-secure=http://localhost:8080
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
