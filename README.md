# CCNS Website

Roughly rebuilding of CCNS website

## 頁面產生器安裝需求
- nodejs ( >= 16.x )

## 第一次使用頁面產生器
```
$ git clone https://github.com/ccns/ccns.github.io.git
$ npm install
```

## 自動截取KKTIX最新活動並產生頁面
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

## 更新社員資料並產生頁面
Update content in `resources/members.json`
```
$ vim resources/members.json   ## or use your favorite editor
```

Generate `members.html`
```
$ npm run gen
```

## 更新本社專案資料並產生頁面
Update content in `resources/projects.json`
```
$ vim resources/projects.json   ## or use your favorite editor
```

Generate `projects.html`
```
$ npm run gen
```
