# ポケモン検索アプリ

このアプリケーションは、TypeScriptとWebpackを使用して構築されたシンプルなWebアプリケーションです。ユーザーはドロップダウンリストからポケモンを選択し、その詳細情報を表示することができます。ポケモンのデータはポケモンAPIから取得されます。

## プロジェクト構成
```
pokemon-search-app/
├── dist/
├── node_modules/
├── src/
│ ├── index.ts
│ ├── index.html
│ ├── styles.css
├── .gitignore
├── package.json
├── tsconfig.json
├── webpack.config.js
```

## はじめに

### 前提条件

[Node.js](https://nodejs.org/)がインストールされていることを確認してください。

### インストール

1. リポジトリをクローンします:

```sh
git clone https://github.com/y-omasa-kbc/ex-pokeapi-client-ts.git
cd ex-pokeapi-client-ts
```

依存関係をインストールします:
```sh
npm install
```

アプリケーションの実行

開発サーバーを起動するには、以下のコマンドを実行します:

```sh
npm start
```
これにより、アプリケーションがデフォルトのウェブブラウザで開きます。

アプリケーションのビルド
プロジェクトをビルドするには、以下のコマンドを実行します:
```sh
npm run build
```
ビルドされたファイルは dist/ ディレクトリに配置されます。

## プロジェクトで使用する技術
### TypeScript
このプロジェクトではTypeScriptを使用して、型安全性とモダンなJavaScriptの機能を提供しています。TypeScriptファイルは src/ ディレクトリにあり、コンパイルされたJavaScriptファイルは dist/ ディレクトリに配置されます。

### Webpack
Webpackは、このプロジェクトのモジュールバンドラとして使用されています。設定は webpack.config.js ファイルにあります。TypeScriptファイルのコンパイルとCSSファイルのインクルードを行います。

### API
このアプリケーションは、ポケモンAPI からデータを取得します。APIの基本URLは https://pokeapi.co/api/v2/pokemon/ です。


