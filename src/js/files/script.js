// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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

//--------------------- Маска ввода номера телефона
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".input-tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

//--------------------- Маска ввода даты рождения
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
