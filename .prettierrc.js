module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  // セミコロン必須
  semi: true,
  // 文字列をシングルクォートにする
  singleQuote: true,
  // 1行100文字で折り返す
  printWidth: 100,
  // オブジェクト、配列などで末尾にカンマをつけない
  trailingComma: 'none',
  // アロー関数の括弧が省略可能でも必ず書く
  arrowParens: 'always',
  // オブジェクトの括弧の両側にスペースを入れる
  bracketSpacing: true
};
