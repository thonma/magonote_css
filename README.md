- [Magonote CSS](#magonote-css)
  - [概要](#概要)
  - [インストール](#インストール)
  - [使い方](#使い方)
    - [color / background-color / border](#color--background-color--border)
    - [padding / margin](#padding--margin)
    - [width](#width)
    - [other](#other)
  - [カスタマイズ](#カスタマイズ)

# Magonote CSS

## 概要
- 「ここちょっと微調整したいな～」というときに使いたいスタイルがたくさん用意されているCSS
- `margin-right: 2px;`, `padding: 6px;` などが大量に定義されているCSS
- 劣化Tailwind CSS

## インストール
```html
<link rel="stylesheet" href="/path/to/magonote.min.css">
```

## 使い方

### color / background-color / border
- 参考
  - https://materialui.co/colors/

```html
<!-- color: Red500; -->
<p class="text_red_500"></p>

<!-- background-color: Green300; -->
<p class="bg_green_300"></p>

<!-- border: 1px solid Blue900; -->
<p class="border_blue_900"></p>
```

### padding / margin
- 上下左右: `p_N`, `m_N`
- 左右: `px_N`, `mx_N`
- 上下: `py_N`, `my_N`
- 上のみ: `pt_N`, `mt_N`
- 下のみ: `pb_N`, `mb_N`
- 左のみ: `pl_N`, `ml_N`
- 右のみ: `pr_N`, `mr_N`
  - N = 0, 2, 4, 6, 8 ... 32

```html
<!-- padding: 2px 2px 2px 2px; -->
<div class="p_2"></div>

<!--
  padding-left: 8px;
  padding-right: 8px;
-->
<div class="px_8"></div>

<!--
  margin-top: 12px;
  margin-bottom: 12px;
-->
<div class="my_12"></div>

<!--
  margin-bottom: 32px;
-->
<div class="mb_32"></div>
```

### width
- `w_Nper`
  - N = 0, 1, 5, 10, 15 ... 100

```html
<div class="w_0per"></div>
<div class="w_1per"></div>
<div class="w_5per"></div>
<div class="w_75per"></div>
<div class="w_100per"></div>
```

### other
- 詳しくは `src/_other.scss` を見てください。

```html
<!-- display -->
<span class="d_block"></span>
<span class="d_inline_block"></span>
<span class="d_none"></span>
<span class="d_invisible"></span> <!-- visibility: hidden; -->

<!-- cursor -->
<button class="c_pointer"></button>

<!-- text-align -->
<div class="align_left"></div>
<div class="align_center"></div>
<div class="align_right"></div>

<!-- margin: 0 auto; -->
<div class="block_center"></div>
```

## カスタマイズ
```bash
$ git clone https://github.com/thonma/magonote_css
$ cd magonote_css
$ npm i
$ npm run dev
```
