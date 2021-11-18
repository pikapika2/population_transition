# population_transition

## 概要
[RESAS-API](https://opendata.resas-portal.go.jp/)から都道府県ごとの人口推移グラフを取得し、グラフで表示するアプリである。
本アプリはvercelにデプロイしている。

## 画面イメージ
PC画面
![PC画面](https://user-images.githubusercontent.com/34570780/142514526-6eb23b30-c193-43f9-8c5f-d7c2c510b8b2.png)

スマホ画面(イメージ)
![スマホ画面(イメージ)](https://user-images.githubusercontent.com/34570780/142514571-c606f239-c56f-4dc9-b5ed-6cbf2b6e6938.png)

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
