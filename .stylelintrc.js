module.exports = {
  extends: ['stylelint-config-standard'], // 继承：使用 stylelint 已经预设好的一些规则
  rules: {
    'string-quotes': 'single',
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'null',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
};
