export const onClientEntry = function () {
  window.copyToClipboard = async function (copyButtonContainerDom, str) {
    const copyButtonDom = copyButtonContainerDom.children[0]
    if (copyButtonDom.textContent === 'Copied') {
      return
    }
    navigator.clipboard.writeText(str || '')

    copyButtonDom.classList.add('copied')
    copyButtonDom.textContent = 'Copied!'

    await new Promise((resolve) => {
      setTimeout(() => {
        copyButtonDom.classList.remove('copied')
        copyButtonDom.textContent = 'Copy'
        resolve('done')
      }, 3000)
    })
  }
}