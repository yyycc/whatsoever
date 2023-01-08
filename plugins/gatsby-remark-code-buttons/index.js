const visit = require('unist-util-visit');
const qs = require('query-string');

module.exports = function gatsbyRemarkCodeButtons(
  { markdownAST },
  {
    buttonClass: customButtonClass,
    buttonContainerClass: customButtonContainerClass,
    buttonText: customButtonText,
    tooltipText: customTooltipText,
  }
) {
  visit(markdownAST, 'code', (node, index, parent) => {
    const [language, params] = (node.lang || '').split(':');
    const actions = qs.parse(params);
    const { clipboard } = actions;

    if (!language) {
      return;
    }

    if (clipboard === 'false') {
      delete actions['clipboard'];
    } else {
      const buttonClass = ['gatsby-code-button'].concat(customButtonClass || '').join(' ').trim();
      const buttonContainerClass = ['gatsby-code-button-container'].concat(customButtonContainerClass || '').join(' ').trim();
      const buttonText = customButtonText || '';
      const tooltipText = customTooltipText || '';

      let code = parent.children[index].value;
      code = code.replace(/"/gm, '&quot;').replace(/`/gm, '\\`').replace(/\$/gm, '\\$');

      const buttonNode = {
        type: 'html',
        value: `
            <div
              class="${buttonContainerClass}"
              onclick="copyToClipboard(this, \`${code}\`)"
            >
              <div
                class="${buttonClass}"
                data-tooltip="${tooltipText}"
              >
                ${buttonText}
              </div>
            </div>
            `.trim()
      };

      parent.children.splice(index, 0, buttonNode);
      actions['clipboard'] = 'false';
    }

    let newQuery = '';
    if (Object.keys(actions).length) {
      newQuery = `:` + Object.keys(actions).map(key => `${key}=${actions[key]}`).join('&');
    }

    node.lang = language + newQuery;
  });
};