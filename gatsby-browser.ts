import './src/normalize.css'
import './src/style.css'
import './src/styles/gatsby-plugin.scss'
import 'prismjs/themes/prism-solarizedlight.css'


export const onClientEntry = function () {
  window.copyToClipboard = async function (str, toasterId) {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    document.body.appendChild(el)
    const getSelection = document.getSelection()
    if (getSelection) {
      const selected = getSelection.rangeCount > 0 ? getSelection.getRangeAt(0) : false
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      if (selected) {
        const getSelection = document.getSelection()
        if (getSelection) {
          getSelection.removeAllRanges()
          getSelection.addRange(selected as Range)
        }
      }
      const copyButtonDom = document.querySelector('.whatsoever-button-class')
      copyButtonDom.classList.add('copied');
      copyButtonDom.textContent = 'Copied!';

      await new Promise((resolve) => {
        setTimeout(() => {
          copyButtonDom.classList.remove('copied');
          copyButtonDom.textContent = 'Copy';
          resolve('done');
        }, 3000);
      });
    }
  }
};