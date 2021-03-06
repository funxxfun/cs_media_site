# イタグレMedia Site
https://user-images.githubusercontent.com/86139603/160361837-7d6c4c62-29d0-4b51-a1c5-4612f88ae7e8.gif

---
## 対象となる想定ペルソナ
- 自分と家族
---
## 背景となる現状認識
- Webページの構造は大まかに把握できてきたが、デザインや動的実装に苦手意識あり
---
## 事実
- Webページの大まかな構造は組み立てることができる
- HTMLの書き方やルールはおおかた理解
- 簡単なCSSは実装できる
- クラス名の命名法や複雑なCSS、JavaScript（jQuery）を使用した動的実装は理解していない
---
## 解決策
- 模写するだけでなく、自分の素材を使用して実際のサイトに仕上げる
- まずはサンプルとなるサイトを模倣しながら、どのコードによりどのような動き方をするのか確認する
- 実装したことのないコードは調べ、スニペットとしてストック
- 類似機能の別パターンを試すなどして、オリジナルのサイトに仕上げていく
---
## 期待される効果について
- CSSやjQueryでできることを知る
- 別のサイトに応用する場合に、どのように変更したら実装できるか、またどんなパターンにアレンジ可能かなどを理解する
---
## 設計概要
- ディレクトリ構成
<img width="398" alt="ディレクトリのイメージ画像" src="https://user-images.githubusercontent.com/86139603/160216281-98fd4c61-19c5-4582-a5a5-1779990cd6be.png">

---
## サイト構造
### header
- h1：ロゴ
- nav：ハンバーガー
### video
- 自動再生
- 繰り返し
- 消音
- インライン再生
### pickup
- h2：セクションタイトル
- ul > li：カルーセルスライダー（今回はslick）
### feature
- h2：セクションタイトル
- grid > item：grid-template-columns
### contact
- h2：セクションタイトル
- content > contact-info
- content > contact-form
### footer
- p：copyright

## 新規に導入したCSS・jQueryプラグインなど
- スムーススクロール
- ハンバーガーメニューのopen、close
- カルーセルスライダー(slick)
- グリッドレイアウト
- fadein


## ブラウザーの互換性
ブラウザー | object-fit | aspect-ratio |
| ---- | ---- | ---- |
| Chrome | ◯ | ◯ |
| Edge| ◯ | ◯ |
| Firefox| ◯ | ◯ |
| Internet Explorer | ×非対応 | ×非対応 |
| Opera| ◯ | ◯ |
| Safari| ◯ | ◯ |
| WebView Android| ◯ | ◯ |
| Chrome Android| ◯ | ◯ |
| Firefox for Android| ◯ | ◯ |
| Opera Android| ◯ | ◯ |
| Safari on iOS| ◯ | ◯ |
|Samsung Internet| ◯ | ◯ |


## まとめ
これまで学習してきたことの復習と苦手部分の克服、WEb制作のスキルアップを目指す！！
