# CCNS Website

Roughly rebuilding of CCNS website

## 自動截取KKTIX最新活動並產生頁面

First run
```
$ git clone https://github.com/ccns/ccns.github.io.git
$ npm install
```

Generate `index.html` and push it to github
```
$ npm run gen
$ npm run push
```

Update modules under `frameworks/` and push them to github
```
$ npm update
$ npm run bundle
$ git commit -m 'update bundles'
```

## 更新社員資料

Update content in `resources/members.json`
```
$ vim resources/members.json   ## or your favorite editor
```

Generate `members.html`
```
$ npm run gen
```
