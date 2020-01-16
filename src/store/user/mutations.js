function setProduct(state, product) {
  state.product = product || {};
}

function setSocial(state, social) {
  state.social = social || {};
}
function toggleLeftColumn(state) {
  state.hideLeft = !state.hideLeft;
}

export { setProduct, setSocial, toggleLeftColumn };
