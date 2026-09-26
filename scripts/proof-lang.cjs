// 语言泄漏判定：给一段页面文字和页面语言（ja / zh / en），返回混入的语言，没有则返回 null。
// 汉字在中日文里大量共用，只靠两边各自特有的字形判断（如 线/線、选/選），宁可漏报也不误报。

const KANA = /[\u3040-\u309f\u30a0-\u30ff\u31f0-\u31ff\uff66-\uff9f]/;
const HAN = /\p{Script=Han}/u;

// 简体中文特有字：日文写作另一字形。
const ZH_ONLY = new Set('们这个选线编织买车货价图说读时间还为问题关开页种样东两门从对应发经过给让认识颜钩针团卷适规该请输搜结购账订单运费邮语简详择库灵录户联帮隐'.split(''));
// 日文特有字：简体中文写作另一字形。
const JA_ONLY = new Set('検編線買図読説選価関様円済覧続変気楽戻込払経糸'.split(''));

// 各语言页面都可以出现的拉丁文：品牌、单位、平台名。
const LATIN_ALLOWED = /\b(?:mokomoko|mewoolmew|mewool|demo|line|instagram|shopify|faq|sns|jpy|cny|usd|cm|mm|kg|ml|g|pdf|diy|ok)\b/gi;
const URL_OR_EMAIL = /\S+@\S+|https?:\/\/\S+|www\.\S+/gi;

const hasAny = (text, set) => [...text].some(char => set.has(char));

function englishRun(text) {
  const rest = text.replace(URL_OR_EMAIL, ' ').replace(LATIN_ALLOWED, ' ');
  if (KANA.test(rest) || HAN.test(rest)) return false;
  return (rest.match(/[A-Za-z]{2,}/g) || []).length >= 2;
}

function detectLeak(text, lang) {
  if (lang === 'ja') {
    if (hasAny(text, ZH_ONLY)) return 'zh';
    if (englishRun(text)) return 'en';
    return null;
  }
  if (lang === 'zh') {
    if (KANA.test(text) || hasAny(text, JA_ONLY)) return 'ja';
    if (englishRun(text)) return 'en';
    return null;
  }
  if (lang === 'en') {
    if (KANA.test(text)) return 'ja';
    if (HAN.test(text)) return hasAny(text, ZH_ONLY) ? 'zh' : hasAny(text, JA_ONLY) ? 'ja' : 'zh/ja';
    return null;
  }
  throw new Error(`unknown page language: ${lang}`);
}

module.exports = { detectLeak };
