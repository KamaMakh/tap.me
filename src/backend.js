import Vue from "vue";
import Backend from "tapme_sdk";

Vue.use(function(Vue) {
  Vue.backend = new Backend("instchat", "/", 1, 123);
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

  Vue.backend.convertSocLinkToLink = function(socLink) {
    let types = {
      1: "fb",
      2: "viber",
      3: "telegram",
      4: "fb_messanger",
      5: "skype",
      6: "whatsapp",
      7: "vk"
    };

    let names = {
      fb: "Facebook",
      viber: "Viber",
      telegram: "Telegram",
      fb_messanger: "Facebook messanger",
      skype: "Skype",
      whatsapp: "WhatsApp",
      vk: "Vk"
    };

    let icon = false;
    for (let a in types) {
      if (socLink.type == types[a]) {
        icon = a;
      }
    }

    return {
      text: names[socLink.type],
      href: socLink.value,
      icon: icon
    };
  };

  Vue.backend.mergeLinks = function(dataBackend, dataFrontend) {
    let types = {
      1: "fb",
      2: "viber",
      3: "telegram",
      4: "fb_messanger",
      5: "skype",
      6: "whatsapp",
      7: "vk"
    };

    let names = {
      fb: "Facebook",
      viber: "Viber",
      telegram: "Telegram",
      fb_messanger: "Facebook messanger",
      skype: "Skype",
      whatsapp: "WhatsApp",
      vk: "Vk"
    };

    let type;
    for (let i in dataBackend) {
      type = types[dataBackend[i].icon];
      for (let a in dataFrontend) {
        if (dataFrontend[a].type == type) {
          dataFrontend[a] = {
            id: dataBackend[i].id,
            name: names[type],
            value: dataBackend[i].href,
            type: type
          };
        }
      }
    }

    return dataFrontend;
  };
});
