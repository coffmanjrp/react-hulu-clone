// JavaScript で HTML の参照文字をアンエスケープするには
// https://blog.tilfin.net/2019/03/07/unescape-html/

const unescapeHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.documentElement.textContent;
};

export default unescapeHTML;
