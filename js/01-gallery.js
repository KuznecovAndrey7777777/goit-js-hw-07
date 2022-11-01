import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery__item";
    const galleryLink = document.createElement("a");
    galleryLink.className = "gallery__link";
    galleryLink.href = element.original;
    const galleryImage = document.createElement("img");
    galleryImage.className = "gallery__image";
    galleryImage.src = element.preview;
    galleryImage.setAttribute("data-source", element.original);
    galleryImage.alt = element.description;
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    items.push(galleryItem);
});

gallery.append(...items);
gallery.addEventListener("click", (elem) => {
    elem.preventDefault();
    if (elem.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `<img src=${elem.target.dataset.source}>`,
        {
            onShow: (instance) => { document.addEventListener("keydown", onModalCloseToEscape) },
            onClose: (instance) => { document.removeEventListener("keydown", onModalCloseToEscape) },
        }
    );
    instance.show();

    function onModalCloseToEscape(elem) {
        if (elem.code === "Escape") {
            instance.close();
        }
    }
});

//     const selectedImage = elem.target.getAttribute("data-source");
//     const instance = basicLightbox.create(
//         `<img src="${selectedImage}" width="800" height="600">`
//     );

//     instance.show();
//     gallery.addEventListener("keydown", (elem) => {
//         if (elem.key === "Escape") {
//             instance.close();
//         }
//     });
// });


// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
