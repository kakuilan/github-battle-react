// 全局函数
/**
 * 变量是否字符串
 * @param v 变量
 */
function isString(v) {
  return typeof v === 'string' || v instanceof String;
}

/**
 * 变量是否数组
 * @param v 变量
 */
function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}

/**
 * 变量是否是一个纯粹的对象
 * 如:
 * isPlainObject([]);//false
 * isPlainObject({});//true
 * @param o 变量
 */
function isObject(o) {
  return o && toString.call(o) === '[object Object]' && 'isPrototypeOf' in o;
}

/**
 * 是否函数
 * @param fn 变量
 */
function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

/**
 * 是否数值
 * @param n 变量
 */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * 是否整数
 * @param n 变量
 */
function isInteger(n) {
  return Number(n) === n && n % 1 === 0;
}

/**
 * 是否浮点
 * @param n 变量
 */
function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

/**
 * 是否邮箱
 * @param email 变量
 */
function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}

/**
 * 是否手机号
 * @param s 变量
 */
function isMobile(s) {
  if (typeof s === 'number') {s = String(s);}
  return (/^1[3,4,5,6,7,8,9]\d{9}$/).test(s);
}

/**
 * 是否中文
 * @param s 变量
 */
function isChinese(s) {
  return (/^[\u4e00-\u9fa5]+$/).test(s);
}

/**
 * 是否英文
 * @param s 变量
 */
function isEnglish(s) {
  return (/^[A-Za-z]+$/).test(s);
}

/**
 * 是否英文和数字
 * @param s 变量
 */
function isEngNum(s) {
  return (/^([a-zA-Z0-9]+)$/).test(s);
}

/**
 * 是否单词(英文、数字和_)
 * @param s 变量
 */
function isWord(s) {
  return (/^\w+$/).test(s);
}

/**
 * 扩展对象
 * @param destination 目标对象
 * @param source 源对象
 */
function objExtend(destination, source) {
  for (const property in source) {
    if (
      destination[property] &&
      typeof destination[property] === 'object' &&
      destination[property].toString() == '[object Object]' &&
      source[property]
    ) { objExtend(destination[property], source[property]); } else {destination[property] = source[property];}
  }
  return destination;
}

/**
 * 变量是否为空
 * @param v 变量
 */
function isEmpty(v) {
  if (v === undefined || v === null || v === '') {
    return true;
  }
  return false;
}

/**
 * 获取当前时间戳的毫秒
 */
function getMillisecond() {
  return new Date().getTime();
}


/**
 * 延迟执行
 * @param ms 毫秒
 * 使用方法:
 * sleep(500).then(() => {
 *   //do stuff
 * })
 * 或者
 * const doSomething = async () => {
 *   await sleep(2000)
 *   //do stuff
 * }
 * doSomething()
 *
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  isString,
  isArray,
  isObject,
  isFunction,
  isNumeric,
  isInteger,
  isFloat,
  isEmail,
  isMobile,
  isChinese,
  isEnglish,
  isEngNum,
  isWord,
  objExtend,
  isEmpty,
  getMillisecond,
  sleep,
};
