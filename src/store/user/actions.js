function setProduct({ commit }, data) {
  commit("setProduct", data);
}

function setSocial({ commit }, data) {
  commit("setSocial", data);
}

function toggleLeftColumn({ commit }) {
  commit("toggleLeftColumn");
}

export { setProduct, setSocial, toggleLeftColumn };
