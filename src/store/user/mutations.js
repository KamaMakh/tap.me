function setProduct(state, product) {
  state.product = product || {};
}

function setSocial(state, social) {
  state.social = social || {};
}
function toggleLeftColumn(state) {
  state.hideLeft = !state.hideLeft;
}

function clearProduct(state) {
  state.product = {};
}

function loadProducts(state, products) {
  state.user.products = products;
}

function addProduct(state, product) {
  state.user.products.push(product);
}

function setUploadImage(state, image) {
  state.uploadImage = image;
}

export {
  setProduct,
  setSocial,
  toggleLeftColumn,
  clearProduct,
  loadProducts,
  addProduct,
  setUploadImage
};
