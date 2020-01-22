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

function updateProduct(state, product) {
  for (var i in state.user.products) {
    if (state.user.products[i].id == product.id) {
      state.user.products[i] = product;
    }
  }
}

function deleteProduct(state, productId) {
  for (var i in state.user.products) {
    if (state.user.products[i].id == productId) {
      state.user.products.splice(i, 1);
    }
  }
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
  setUploadImage,
  updateProduct,
  deleteProduct
};
