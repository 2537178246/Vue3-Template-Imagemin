module.exports = {
  root: true,
  parser: 'vue-eslint-parser', //解析.vue文件
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser', // 解析 .ts 文件
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  globals: {
    "NodeJS": true
  },

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    'accessor-pairs': 2, // 设置了 setter ，必须相应设置 getter ，反之不必须
    'arrow-spacing': [2, { // 箭头函数的空格使用规则
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], // 代码块花括号前后的空格规则
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'], //if 后必须包含 { ，单行 if 除外
    'max-depth': [2, 5], //最大块嵌套不能超过5层
    'max-params': [2, 8], //函数的形参不能多于8个
    'no-empty-function': 2, //禁止空的function,保证写的每一个function都有用
    'array-callback-return': 2, // 数组的 map、filter、sort 等方法，回调函数必须有返回值
    'no-var': 2, // 禁止使用 var，必须用 let 或 const
    'no-alert': 1, // 禁止 alert
    'no-duplicate-imports': 2, // 禁止重复 import
    'no-implied-eval': 2, // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': ["error", "always", { "null": "ignore" }],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2, // 禁止对const定义重新赋值
    'no-control-regex': 0,
    'no-delete-var': 2, // 禁止对变量使用delete关键字，delete只适用于对象的属性，提醒使用的范围
    'no-dupe-args': 2, // 函数参数禁止重名
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2, // 禁止解构中出现空 {} 或 []
    'no-eval': 2, // 禁止使用eval
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2, // 禁止重复声明
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'], // 禁止在return中赋值
    'no-return-await': 2, // 禁止在 return 中使用 await
    'no-self-assign': 2, // 禁止将自己赋值给自己
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2, // 禁止使用保留字作为变量名
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 1,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2, // 禁止出现不可到达的代码，如在 return、throw 之后的代码
    'no-unsafe-finally': 2,
    'no-unused-vars': 1,
    // '@typescript-eslint/no-unused-vars': 0,
    'no-useless-call': 2, // 禁止不必要的 call 和 apply
    'no-useless-computed-key': 2, // 禁止使用不必要计算的key，如 var a = { ['0']: 0 }
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2, // 禁止属性前出现空格，如 foo. bar()
    'no-with': 2, // 禁止 with
    'one-var': [2, { // 是否允许使用逗号一次声明多个变量
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'], // 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)
    'prefer-const': 2,
    'no-debugger': process.env.VITE_NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] // 数组方括号前后的空格使用规则
  }
}
