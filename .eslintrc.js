module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      arrowFunctions: true,
      classes: true,
      modules: true,
      defaultParams: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    //off=0, warn=1, error=2, 如果是数组, 第二项表示参数option
    //"semi": ["error", "always"],
    'no-empty': 0, //块语句中的内容不能为空
    'comma-dangle': 0, //对象字面量项尾必须有逗号
    'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'no-console': 0, //不禁用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-dupe-class-members': 2, //对象字面量中不要定义重复的属性
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-extra-parens': [2, 'functions'], //禁止不必要的括号
    'no-self-compare': 2, //禁止自身比较
    'accessor-pairs': 2, //对象若定义了 setter 则必须定义相应的 getter
    'comma-spacing': [
      //强制在逗号前后使用一致的空格
      2,
      {
        before: false,
        after: true
      }
    ],
    'constructor-super': 2, //派生类的构造函数必须调用super()
    'new-cap': [
      //要求构造函数首字母大写
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2, //要求调用无参构造函数时有圆括号
    'no-array-constructor': 2, //禁止使用 Array 构造函数
    'no-class-assign': 2, //避免对类名重新赋值
    'no-cond-assign': 2, //条件语句中赋值语句使用括号包起来
    'no-mixed-spaces-and-tabs': 0 //不要混合使用空格与制表符作为缩进
  }
};
