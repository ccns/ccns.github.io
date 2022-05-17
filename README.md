# CCNS Website
Roughly rebuilding of CCNS website

## Requirements
- nodejs ( >= 16.x )

## 第一次使用頁面產生器
```
$ git clone https://github.com/ccns/ccns.github.io.git
$ npm install
```

## 更新網頁框架
Update modules under `frameworks/` and push them to github
```
$ npm update
$ npm run bundle
$ git commit -m 'chore: update bundles'
```

## 更新網頁資料
### 步驟一：編輯資料
- 社員資料: 編輯 `resources/members.json`
- 專案資料: 編輯 `resources/projects.json`
- 活動照片: 編輯 `resources/timeline.json`
- 定期聚資料: 直接執行下個步驟，腳本會自動抓 kktix 資料

### 步驟二：跑腳本
跑以下指令以產生新的 `index.html`，並推送至 GitHub
```
$ npm run gen
$ npm run push
```
