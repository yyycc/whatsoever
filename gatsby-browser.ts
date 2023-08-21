import './src/normalize.css'
import './src/style.scss'
import './src/styles/index.scss'
import 'prismjs/themes/prism-solarizedlight.css'

console.log("%cWelcome to my blog ~ ~", "color:#8a4baf;background-color:#fcfaff;padding: 4px 8px;border-radius: 5px;")
console.log('%c' +
  '           _           _                                 \n' +
  ' __      _| |__   __ _| |_ ___  ___   _____   _____ _ __ \n' +
  ' \\ \\ /\\ / / \'_ \\ / _` | __/ __|/ _ \\ / _ \\ \\ / / _ \\ \'__|\n' +
  '  \\ V  V /| | | | (_| | |_\\__ \\ (_) |  __/\\ V /  __/ |   \n' +
  '   \\_/\\_/ |_| |_|\\__,_|\\__|___/\\___/ \\___| \\_/ \\___|_|   \n' +
  '                                                         \n', "color: #8a4baf")

const addScript = (url: string) => {
  const script = document.createElement("script")
  script.src = url
  // script.async = true
  document.head.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML")
  }
}