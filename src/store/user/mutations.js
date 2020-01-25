function setProduct(state, product) {
  state.product = product || {};
}

function setLandingFormData(state, landing) {
  state.landing = landing || {};
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

function loadLinks(state, links) {
  state.user.socials = [];
  for(let i in links) {
    state.user.socials.push(links[i]);
  }
}

function loadLanding(state, data) {
  state.user.landing = data;
}

function loadAccount(state, data) {
  state.user.id = data["id"];
  state.user.name = data["name"];
  state.user.email = data["email"];
  state.user.lang = data["lang"];
  state.user.subscribe = data["subscribe"];
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
  deleteProduct,
  loadLinks,
  loadLanding,
  setLandingFormData,
  loadAccount
};
