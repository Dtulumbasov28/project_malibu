/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице

  // Секция "инструкторы"
  if (document.querySelector(".instructors__body")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".instructors__body", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__instructors-prev",
        nextEl: ".swiper-button__instructors-next",
      },

      // Брейкпоинты

      breakpoints: {
        320: { enabled: true },

        992: { enabled: false },
      },

      // События
      on: {},
    });
  }
  // Секция "наш центр"
  if (document.querySelector(".our-center__img-block")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".our-center__img-block", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__our-center-prev",
        nextEl: ".swiper-button__our-center-next",
      },

      // Брейкпоинты

      //   breakpoints: {
      //     320: { enabled: true },

      //     992: { enabled: false },
      //   },

      // События
      on: {},
    });
  }
   // Секция "наш центр"
   if (document.querySelector(".promotions__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".promotions__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination, Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 60,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      
			pagination: {
				el: '.swiper-pagination__promotions',
				clickable: true,
			},
			

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__promotions-prev",
        nextEl: ".swiper-button__promotions-next",
      },

      // Брейкпоинты

      //   breakpoints: {
      //     320: { enabled: true },

      //     992: { enabled: false },
      //   },

      // События
      on: {},
    });
  }
  // Секция "отзывы наших клиентов"
  if (document.querySelector(".reviews__body")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".reviews__body", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [ Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: ".swiper-button__our-center-prev",
      //   nextEl: ".swiper-button__our-center-next",
      // },

      // Брейкпоинты

      breakpoints: {
        320: { enabled: true },

        768: { enabled: false },
      },

      // События
      on: {},
    });
  }
  // Секция "затрудняетесь с выбором?"
  if (document.querySelector(".help__block-img")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".help__block-img", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__our-center-prev",
        nextEl: ".swiper-button__our-center-next",
      },

      // Брейкпоинты

      // breakpoints: {
      //   320: { enabled: true },

      //   768: { enabled: false },
      // },

      // События
      on: {},
    });
  }
  // Секция "санитарно-эпидемиологические нормы - изображения"
  if (document.querySelector(".sanitary-norms__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".sanitary-norms__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // slidesPerView: 3,
      spaceBetween: 10,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      centeredSlides: true,
      allowTouchMove: false,

      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__sanitary-prev",
        nextEl: ".swiper-button__sanitary-next",
      },

      // Брейкпоинты

      breakpoints: {
        0: { slidesPerView: 1 },

        600: { slidesPerView: 3 },
      },

      // События
      on: {},
    });
  }
  // Секция "санитарно-эпидемиологические нормы - текст"
  if (document.querySelector(".sanitary-norms__text")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".sanitary-norms__text", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      // spaceBetween: 10,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      allowTouchMove: false,
      // centeredSlides: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      // Пагинация

      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__sanitary-prev",
        nextEl: ".swiper-button__sanitary-next",
      },

      // Брейкпоинты

      // breakpoints: {
      //   320: { enabled: true },

      //   768: { enabled: false },
      // },

      // События
      on: {},
    });
  }
  // Секция "сертификаты сотрудников"
  if (document.querySelector(".certificates__body")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".certificates__body", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination],
      observer: true,
      observeParents: true,
      // slidesPerView: 5,
      spaceBetween: 30,
      speed: 800,
      initialSlide: 2,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      // allowTouchMove: false,
      centeredSlides: true,
      //preloadImages: false,
      // lazy: true,

      // Эффекты
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },

      // Пагинация

      pagination: {
        el: ".swiper-pagination__certificates",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: ".swiper-button__sanitary-prev",
      //   nextEl: ".swiper-button__sanitary-next",
      // },

      // Брейкпоинты

      breakpoints: {
        0: { slidesPerView: 1 },
        420: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1240: { slidesPerView: 5 },
      },

      // События
      on: {},
    });
  }
  // Секция "наши специалисты"
  if (document.querySelector(".our-specialist__body")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".our-specialist__body", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 800,
      // centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
        // Эффекты
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        */

      // Пагинация
      /*
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        */

      // Скроллбар
      /*
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        */

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button__our-specialist-prev",
        nextEl: ".swiper-button__our-specialist-next",
      },

      // Брейкпоинты

      breakpoints: {
        320: { enabled: true },
        992: { enabled: false },
      },

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
