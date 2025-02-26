# textlint-rule-hatena-markdown-syntax-highlight

はてなのコードブロックで、シンタックスハイライトの記法が[対応しているファイルタイプ](https://help.hatenablog.com/entry/markup/syntaxhighlight)か判定します。また、はてなではコンマ区切りでファイル名を追加することができないので、それも検知します。

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-hatena-markdown-syntax-highlight

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "hatena-markdown-syntax-highlight": true
    }
}
```

Via CLI

```
textlint --rule hatena-markdown-syntax-highlight README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

Copyright &copy; Murai Yusei
