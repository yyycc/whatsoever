const HtmlAttributes = {
  lang: "zh-CN"
}

exports.onRenderBody = (props: any) => {
  const { setHtmlAttributes } = props
  setHtmlAttributes(HtmlAttributes)
}