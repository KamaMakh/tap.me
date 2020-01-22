import Vue from "vue";
import Backend from "tapme_sdk";

Vue.use(function(Vue) {
  Vue.backend = new Backend("instchat", "/", 1, 123);
  Vue.backend.setApiKeyAuth(
    "IHmoI7Mmn9LgsSy4w54CcRF4AbmTAWnaNrEgmH4n81y6vC3N7twobaDx3vPiR9uDgb56KaxqbNWSR4i0"
  );
  Vue.backend.fetchErrorsFrom = function(data) {
    let errors = [];
    if (data["errors"]) {
      for (let i in data["errors"]) {
        for (let a in data["errors"][i]) {
          errors.push(data["errors"][i][a]);
        }
      }
    }

    return errors;
  };
});
