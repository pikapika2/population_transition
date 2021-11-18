# population_transition

## 概要
[RESAS-API](https://opendata.resas-portal.go.jp/)から都道府県ごとの人口推移グラフを取得し、グラフで表示するアプリである。
本アプリはvercelにデプロイしている。

## 画面イメージ
![PC画面](https://user-images.githubusercontent.com/34570780/142513156-0d732f21-29d8-404d-aed3-93e07beec344.png)


![スマホ画面(イメージ)](https://user-images.githubusercontent.com/34570780/142513222-b1ffc59c-beef-491e-aa37-3f9906963864.png)

## 操作方法
見たい都道府県のチェックボックスをクリックすれば良い。

## 実行方法
自身の環境で実行したい場合、
まず、以下のコマンドで起動する。

```bash
npm run dev
# or
yarn dev
```

その後、[http://localhost:3000](http://localhost:3000) をブラウザで開くことで、見ることができる。

環境変数として、以下の二つを`.env`に用意している。
- `API_KEY`
- `NEXT_PUBLIC_API_KEY`

どちらもRESAS-APIで使用するapikeyが入っている。