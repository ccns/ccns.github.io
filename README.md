# CCNS Website
Roughly rebuilding of CCNS website

## 更新網頁資料
### 步驟一：編輯資料
- 社員資料: 編輯 `resources/members.json`
- 專案資料: 編輯 `resources/projects.json`
- 活動照片: 編輯 `resources/timeline.json`
- 定期聚資料: 直接執行下個步驟，腳本會幫你抓 kktix 資料
- 其他網頁: 請先檢查 `ejs/` 資料夾底下有沒有名字一樣的範本檔 (`*.ejs`)。有的話請編輯範本檔而非 HTML 檔，避免執行下一步驟時將舊資訊覆蓋回來

### 步驟二：交給 CI 跑腳本
將你的修改 commit 完 `git push` 上去，或是直接在 GitHub 網頁編輯完內容儲存，CI (GitHub Action) 就會幫你產生更新過後的網頁了

## 本地開發環境測試
### 需求
- nodejs ( >= 16.x )

### 第一次使用頁面產生器
```
$ git clone https://github.com/ccns/ccns.github.io.git
$ npm install
```

### 更新網頁框架
Update modules under `frameworks/` and push them to github
```
$ npm update
$ git commit -m 'chore: update bundles'
```

### 產生靜態頁面
若要在自己的電腦測試，請使用以下指令:
```
$ npm run gen
```
