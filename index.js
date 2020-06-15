module.exports = function markdownItCW (md) {

  function renderStrong (tokens, idx, opts, _, slf) {
    var token = tokens[idx];
    if (token.markup === '__') {
      token.tag = 'u';
    }
    return slf.renderToken(tokens, idx, opts);
  }

  md.renderer.rules.strong_open = renderStrong;
  md.renderer.rules.strong_close = renderStrong;
};
