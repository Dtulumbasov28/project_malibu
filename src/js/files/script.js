// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// let map = document.getElementById("map");
// let options_map = {
//   once: true, //запуск один раз, и удаление наблюдателя сразу
//   passive: true,
//   capture: true,
// };
// map.addEventListener("click", start_lazy_map, options_map);
// map.addEventListener("mouseover", start_lazy_map, options_map);
// map.addEventListener("touchstart", start_lazy_map, options_map);
// map.addEventListener("touchmove", start_lazy_map, options_map);

// let map_loaded = false;
// function start_lazy_map() {
//   if (!map_loaded) {
//     let map_block = document.getElementById("map_lazy");
//     map_loaded = true;
//     map_block.setAttribute("src", map_block.getAttribute("src"));
//     map_block.removeAttribute("data_src");
//     console.log("YMAP LOADED");
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(initYandexMap, 5000);
});

document.addEventListener("scroll", initYandexMapOnEvent);
document.addEventListener("mousemove", initYandexMapOnEvent);
document.addEventListener("touchstart", initYandexMapOnEvent);

function initYandexMapOnEvent(e) {
  initYandexMap();
  e.currentTarget.removeEventListener(e.type, initYandexMapOnEvent);
}

function initYandexMap() {
  if (window.yandexMapDidInit) {
    return false;
  }
  window.yandexMapDidInit = true;

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;

  script.src =
    "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5fecc8558213ef1c470a415e1c71e613dee1782488d4fd6aa2b50ff2a4baeda1&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=false";

  document.getElementById("map").appendChild(script);
}

//--------------------- Масска ввода номера телефона
var phoneCall = document.querySelector(".popup-input-tel");

var prefixNumber2 = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};
// ===== Валидация номера телефона

phoneCall.addEventListener("input", (e) => {
  var value = phoneCall.value.replace(/\D+/g, "");
  var numberLength = 11;

  let result;
  if (phoneCall.value.includes("+8") || phoneCall.value[0] === "8") {
    result = "";
  } else {
    result = "+";
  }
  // =====
  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber2(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }

  // =====
  phoneCall.value = result;
});

//--------------------- Масска ввода даты рождения
var input = document.querySelectorAll(".popup-input-date")[0];

var dateInputMask = function dateInputMask(elm) {
  elm.addEventListener("keypress", function (e) {
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    var len = elm.value.length;

    // If we're at a particular place, let the user type the slash
    // i.e., 12/12/1212
    if (len !== 1 || len !== 3) {
      if (e.keyCode == 47) {
        e.preventDefault();
      }
    }

    // If they don't add the slash, do it for them...
    if (len === 2) {
      elm.value += ".";
    }

    // If they don't add the slash, do it for them...
    if (len === 5) {
      elm.value += ".";
    }
  });
};

dateInputMask(input);
