import Vue from "vue";

function setProduct({ commit }, data) {
  commit("setProduct", data);
}

function clearProduct({ commit }) {
  commit("clearProduct");
}

function setSocial({ commit }, data) {
  commit("setSocial", data);
}

function toggleLeftColumn({ commit }) {
  commit("toggleLeftColumn");
}

function loadProducts({ commit }) {
  Vue.backend.listProducts(false, function(data) {
    let resultData = [];
    let photo;
    for (let i in data) {
      if (data[i]) {
        if (data[i]["images"] && data[i]["images"].length > 0) {
          photo = data[i]["images"][0]["img_src"];
        } else {
          photo = "https://newbalance.ru/upload/iblock/f2e/500245-000-1.jpg";
        }

        resultData.push({
          id: data[i].id,
          name: data[i].name,
          categoty: "",
          show: data[i].is_public,
          note: data[i].description,
          link: data[i].link,
          price: data[i].price,
          discount_price: data[i].priceDiscount,
          photo: photo
        });
      }
    }
    commit("loadProducts", resultData);
  });
}

function createProduct(context, product) {
  Vue.backend.createProduct(
    {
      name: product["name"],
      is_public: product["show"],
      note: product["description"],
      link: product["link"],
      price: product["price"],
      discount_price: product["priceDiscount"]
    },
    1,
    function(data) {
      product.id = data["id"];
      context.commit("addProduct", product);

      Vue.backend.attachImageProduct(context.state.uploadImage.id, product.id);
    },
    function() {
      alert("fail");
    }
  );
}

function addImageProduct({ commit }, file) {
  Vue.backend.createImageProduct(
    {
      image: file
    },
    function(data) {
      commit("setUploadImage", data);
    }
  );
}

export {
  setProduct,
  setSocial,
  toggleLeftColumn,
  clearProduct,
  loadProducts,
  createProduct,
  addImageProduct
};
