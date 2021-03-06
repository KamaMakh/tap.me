import Vue from "vue";

function setProduct({ commit }, data) {
  commit("setProduct", data);
}

function setLandingFormData(context) {
  context.commit("setLandingFormData", context.state.user.landing);
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
    let product;
    for (let i in data) {
      if (data[i]) {
        if (data[i]["images"] && data[i]["images"].length > 0) {
          photo = data[i]["images"][0]["img_src"];
        } else {
          photo = "https://newbalance.ru/upload/iblock/f2e/500245-000-1.jpg";
        }

        product = convertBackendDataProduct(data[i]);
        product.photo = photo;
        resultData.push(product);
      }
    }
    commit("loadProducts", resultData);
  });
}

function createProduct(context, product) {
  return new Promise((resolve, reject) => {
    Vue.backend.createProduct(
      {
        name: product["name"],
        is_public: product["show"],
        description: product["note"],
        link: product["link"],
        price: product["price"],
        priceDiscount: product["discount_price"]
      },
      1,
      function(data) {
        product.id = data["id"];
        context.commit("addProduct", product);

        if (context.state.uploadImage.id) {
          Vue.backend.attachImageProduct(
            context.state.uploadImage.id,
            product.id,
            () => {
              resolve(data);
            }
          );
        } else {
          resolve(data);
        }
      },
      function(data) {
        reject(data);
      }
    );
  });
}

function updateProduct(context, product) {
  return new Promise((resolve, reject) => {
    Vue.backend.updateProduct(
      product.id,
      convertStoreDataProduct(product),
      function(data) {
        context.commit("updateProduct", product);
        if (context.state.uploadImage.id) {
          Vue.backend.attachImageProduct(
            context.state.uploadImage.id,
            product.id,
            data => {
              resolve(data);
            }
          );
        } else {
          resolve(data);
        }
      },
      function(data) {
        reject(data);
      }
    );
  });
}

function deleteProduct({ commit }, productId) {
  return new Promise((resolve, reject) => {
    Vue.backend.deleteProduct(
      productId,
      function(data) {
        commit("deleteProduct", productId);
        resolve(data);
      },
      function(data) {
        reject(data);
      }
    );
  });
}

function convertBackendDataProduct(data) {
  return {
    id: data.id,
    name: data.name,
    categoty: "",
    show: data.is_public,
    note: data.description,
    link: data.link,
    price: data.price,
    discount_price: data.priceDiscount
  };
}

function convertStoreDataProduct(product) {
  return {
    id: product["id"],
    name: product["name"],
    is_public: product["show"],
    description: product["note"],
    link: product["link"],
    price: product["price"],
    priceDiscount: product["discount_price"]
  };
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

function loadLinks(context) {
  return new Promise((resolve, reject) => {
    Vue.backend.listLandLinks(
      {
        landing_id: context.state.user.landing.id
      },
      function(data) {
        let links = Vue.backend.mergeLinks(data, context.state.user.socials);
        context.commit("loadLinks", links);
        resolve(data);
      },
      function(data) {
        reject(data);
      }
    );
  });
}

function createLink(context, link) {
  let socLink = Vue.backend.convertSocLinkToLink(link);
  return new Promise((resolve, reject) => {
    Vue.backend.createLandLink(
      socLink,
      context.state.user.landing.id,
      function(data) {
        resolve(data);
      },
      function(data) {
        reject(data);
      }
    );
  });
}

function updateLink(context, link) {
  let socLink = Vue.backend.convertSocLinkToLink(link);
  return new Promise((resolve, reject) => {
    Vue.backend.updateLandLink(
      link.id,
      socLink,
      function(data) {
        resolve(data);
      },
      function(data) {
        reject(data);
      }
    );
  });
}

function loadLanding({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.backend.listLanding(
      data => {
        if (data[0] && data[0]["id"]) {
          Vue.backend.getLanding(
            data[0]["id"],
            data => {
              commit("loadLanding", {
                id: data.id,
                name: data.name,
                user_id: data.user_id,
                urlcode: data.urlcode,
                description: data.description ? data.description : "",
                avatar: data.avatarsrc,
                background: data.backgroundsrc,
                instlogin: data.instlogin ? data.instlogin : "",
                linkfeed: data.linkfeed ? data.linkfeed : ""
              });
              resolve(data);
            },
            () => {
              alert("fail");
            }
          );
        } else {
          reject(data);
        }
      },
      data => {
        reject(data);
      }
    );
  });
}

function createLanding() {}

function updateLanding(context, data) {
  var localData = Object.assign({}, data);

  if (localData.avatarObj) {
    localData["avatar"] = localData.avatarObj;
  } else {
    delete localData["avatar"];
  }

  if (localData.backgroundObj) {
    localData["background"] = localData.backgroundObj;
  } else {
    delete localData["background"];
  }

  return new Promise((resolve, reject) => {
    Vue.backend.updateLanding(
      localData.id,
      localData,
      () => {
        context.commit("loadLanding", localData);
        resolve();
      },
      () => {
        reject();
      }
    );
  });
}

function getAccount({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.backend.getAccount(
      data => {
        if (data["lang"] == 1) {
          data["lang"] = "ru";
        } else if (data["lang"] == 2) {
          data["lang"] = "en";
        } else {
          data["lang"] = false;
        }

        if (data["subscribe"] == 1) {
          data["subscribe"] = true;
        } else {
          data["subscribe"] = false;
        }

        if (!data["tariffName"]) {
          data["tariffName"] = "free";
        }

        commit("loadAccount", data);
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function updateAccount(context, dataAccount) {
  if (dataAccount["lang"] == "ru") {
    dataAccount["lang"] = 1;
  } else if (dataAccount["lang"] == "en") {
    dataAccount["lang"] = 2;
  } else {
    delete dataAccount["lang"];
  }

  return new Promise((resolve, reject) => {
    Vue.backend.updateAccount(
      dataAccount,
      data => {
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function loadClientLanding(context, landingCode) {
  return new Promise((resolve, reject) => {
    Vue.backend.getClientLanding(
      landingCode,
      data => {
        context.commit("loadLanding", {
          id: data.id,
          name: data.name,
          user_id: data.user_id,
          urlcode: data.urlcode,
          description: data.description,
          avatar: data.avatarsrc,
          background: data.backgroundsrc,
          instlogin: data.instlogin,
          linkfeed: data.linkfeed
        });
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function loadClientProducts(context, landingId) {
  Vue.backend.listClientProducts(
    landingId,
    function(data) {
      let resultData = [];
      let photo;
      let product;
      for (let i in data) {
        if (data[i]) {
          if (data[i]["images"] && data[i]["images"].length > 0) {
            photo = data[i]["images"][0]["img_src"];
          } else {
            photo = "https://newbalance.ru/upload/iblock/f2e/500245-000-1.jpg";
          }

          product = convertBackendDataProduct(data[i]);
          product.photo = photo;
          resultData.push(product);
        }
      }
      context.commit("loadProducts", resultData);
    },
    function(data) {
      alert(JSON.stringify(data));
    }
  );
}

function loadClientLinks(context, landingId) {
  return new Promise((resolve, reject) => {
    Vue.backend.getClientLinks(
      landingId,
      data => {
        let links = Vue.backend.mergeLinks(data, context.state.user.socials);
        context.commit("loadLinks", links);
        resolve(data);
      },
      data => {
        alert(JSON.stringify(data));
        reject(data);
      }
    );
  });
}

function registration(context, data) {
  return new Promise((resolve, reject) => {
    Vue.backend.register(
      data.email,
      data.password,
      {},
      data => {
        Vue.backend.setApiKeyAuth(data["api_token"]);
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function setApiKeyAuth(context, apiKey) {
  Vue.backend.setApiKeyAuth(apiKey);
}

function makeDefaultLanding() {
  return new Promise((resolve, reject) => {
    Vue.backend.makeDefaultLanding(
      () => {
        resolve();
      },
      () => {
        reject();
      }
    );
  });
}

function login(context, data) {
  return new Promise((resolve, reject) => {
    Vue.backend.auth(
      data.login,
      data.password,
      data => {
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function logout() {
  Vue.backend.logout();
}

function getPayUrl() {
  return new Promise(resolve => {
    Vue.backend.paymentInitUrl(data => {
      resolve(data);
    });
  });
}

function forgotPassword(context, email) {
  return new Promise((resolve, reject) => {
    Vue.backend.forgotPassword(
      email,
      data => {
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function resetPassword(context, dataPass) {
  return new Promise((resolve, reject) => {
    Vue.backend.resetPassword(
      dataPass.email,
      dataPass.token,
      dataPass.newPassword,
      data => {
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

function changePassword(context, newPass) {
  return new Promise((resolve, reject) => {
    Vue.backend.changePassword(
      newPass,
      data => {
        resolve(data);
      },
      data => {
        reject(data)
      }
    )
  })
}

function getInstagramAuthLink() {
  return new Promise((resolve, reject) => {
    Vue.backend.instagramAuthLink(
      data => {
        resolve(data);
      },
      data => {
        reject(data);
      }
    );
  });
}

export {
  setProduct,
  setSocial,
  toggleLeftColumn,
  clearProduct,
  loadProducts,
  createProduct,
  addImageProduct,
  updateProduct,
  deleteProduct,
  loadLinks,
  createLink,
  updateLink,
  loadLanding,
  setLandingFormData,
  createLanding,
  updateLanding,
  getAccount,
  updateAccount,
  loadClientLanding,
  loadClientProducts,
  loadClientLinks,
  registration,
  makeDefaultLanding,
  login,
  logout,
  getPayUrl,
  forgotPassword,
  resetPassword,
  setApiKeyAuth,
  getInstagramAuthLink,
  changePassword
};
