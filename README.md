# postelimodule
Интерактивный модуль для коммпании POSTELI с возможностью выбора комбинаций постельного белья

[Посмотреть модуль отдельно](https://sinicynstepan.github.io/postelimodule/)<br>
[Сайт POSTELI](https://posteli.me/)
## Дерево приложения
```bash
├── public
│   └── index.html
├── src
│   ├── button
│   │   ├── FinalButton.css
│   │   └── FinalButton.js
│   ├── carousel
│   │   ├── Carousel.css
│   │   └── Carousel.js
│   ├── images
│   │   ├── mainColor1
│   │   │   ├── image1.jpg
│   │   │   ├── image2.jpg
│   │   │   ├── ...
│   │   │   └── image_last.jpg
│   │   ├── mainColor2
│   │   │   ├── image1.jpg
│   │   │   ├── image2.jpg
│   │   │   ├── ...
│   │   │   └── image_last.jpg
│   │   ├── ...
│   │   └── mainColor_last
│   │       ├── image1.jpg
│   │       ├── image2.jpg
│   │       ├── ...
│   │       └── image_last.jpg
│   ├── arrayColorImage.js
│   ├── colors.js
│   ├── index.css
│   ├── index.js
│   ├── MyComponent.css
│   └── MyComponent.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
## Зависимости
### Common
- react
- react-dom
- react-icons
- react-scripts
- swiper
- web-vitals
---
### Dev
- gh-pages
### Установка зависимостей
```bash
    npm install react swiper react-icons
```
```bash
    npm install gh-pages --save-dev
```
## Запуск 
Приложение запуститься на http://localhost:3000/postelimodule
```bash
    npm run start
```
## Публикация 
Проверьте установлены ли [Node, npm](https://nodejs.org/en/download/), [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
```bash
    node --version
    v22.16.0
```
```bash
    npm --version
    10.3.0
```
```bash
    git --version
    git version 2.50.0.windows.2
```
Приложение опубликуется на github-pages https://sinicynstepan.github.io/postelimodule/ (настраивается в `package.json`)
```bash
    npm run deploy
```
## Описание компонентов, файлов и директорий
### Директория button
```bash
├── button
    ├── FinalButton.css
    └── FinalButton.js
```
Здесть всё с компонентом `FinalButton`<br>
`FinalButton.css` - файл стилей<br>
`FinalButton.js` - сам модуль<br>
### Директория carousel
```bash
├── carousel
    ├── Carousel.css
    └── Carousel.js
```
Здесть всё с компонентом `Carousel`<br>
`Carousel.css` - файл стилей<br>
`Carousel.js` - сам модуль<br>
### Директория images
```bash
├── images
    ├── mainColor1
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   ├── ...
    │   └── image_last.jpg
    ├── mainColor2
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   ├── ...
    │   └── image_last.jpg
    ├── ...
    └── mainColor_last
        ├── image1.jpg
        ├── image2.jpg
        ├── ...
        └── image_last.jpg
```
Папка со всеми фото<br>
Вложеные папки называются по цвету, который основной на фото<br>
Сами фотографии называются по принципу `<основной цвет>_<дополнительный цвет>.jpg`
___
### arrayColorImage.js
**Впомогательный файл**<br>
Функции:<br>
* импорттирует все фото
* хранит массив `arrImages`<br>
элемент массива:
```js
{
    main_color: 'color', 
    add_color: 'color', 
    file: file_name, 
    filePath: 'file path'
}
```
* хранит `arrImageLenght` - это размер массива `arrImages`
______
### colors.js
**Впомогательный файл**<br>
Функции:<br>
* хранит массив `arrColor`<br>
элемент массива:
```js
{
    c_name: "color name", 
    c_code: "hex code"
}
```
___
### MyComponent.js
**Основной копонент**<br>
Здесь строиться вся страница

Функции:<br>
* `export default function MyComponent() {}` - сам компонент 
* `changeMainColor` и `changeAddColor` - функция смены основного и дополнительного цвета
* `renderMainColor` и `renderAddColor` - функция для отображения палитр основных и дополнительных цветов
* `renderContent` - функция для отображения либо карусели всех фото, либо выбранного сочетания

Остальная информация в коментариях к коду 
___
### FinalButton.js
**Дополнительный копонент**<br>
Реализует кнопку для переноса пользователя в whatsapp 
<svg xmlns="http://www.w3.org/2000/svg" fill="#25D366" viewBox="0 0 32 32" width="15" height="15">
  <path d="M16 0C7.163 0 0 7.164 0 16c0 2.836.738 5.495 2.027 7.818L0 32l8.365-2.188C11.02 31.262 13.451 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.6c-2.248 0-4.362-.621-6.165-1.698l-.44-.265-4.97 1.3 1.312-4.843-.288-.5A13.51 13.51 0 0 1 2.4 16c0-7.514 6.086-13.6 13.6-13.6S29.6 8.486 29.6 16 23.514 29.6 16 29.6zm7.555-9.578c-.396-.198-2.348-1.16-2.71-1.293-.362-.133-.627-.198-.892.198s-1.02 1.293-1.25 1.558c-.229.264-.458.297-.854.099-.396-.198-1.675-.617-3.192-1.966-1.18-1.053-1.975-2.353-2.205-2.75-.229-.396-.025-.61.173-.808.178-.178.396-.462.595-.693.198-.231.264-.396.396-.66.133-.264.066-.495-.033-.693-.099-.198-.892-2.145-1.223-2.94-.322-.773-.65-.668-.892-.68h-.763c-.231 0-.594.083-.906.396-.311.313-1.187 1.16-1.187 2.828s1.214 3.283 1.383 3.51c.17.227 2.39 3.642 5.8 5.102 3.409 1.46 3.409.973 4.024.912.615-.061 2.015-.825 2.3-1.622.284-.797.284-1.48.198-1.622-.086-.142-.322-.231-.718-.429z"/>
</svg> 
с вставкой нужного сообщения 

Функции:<br>
* `export default function FinalButton({ userChoiseMain, userChoiseAdd, }) {}` - сам компонент 
  * параметры:
    *  `userChoiseMain` - основной цвет, выбранный полльзователем
    *  `userChoiseAdd` - дополнительный цвет, выбранный полльзователем
* `const Text = () => {}` - функция для набора текста
* `const handleClick = () => {}` - функция для открытия whatsapp по ссылке

Остальная информация в коментариях к коду 
___
### Carousel.js
**Дополнительный копонент**<br>
Реализует слайдер фотографий 

Для устройств больше планшета используется собственное решение, для устройств меньше - [Swiper](https://swiperjs.com/react) `from "swiper/react"`

Функции:<br>
* `function useWindowSize() {}` - функция для определения размера экрана у пользователя 
* `export default function Carousel({ arrayImages, arrayImagesLenght }) {}` - сам компонент 
  * параметры:
    *  `arrayImages` - массив всех фото
    *  `arrayImagesLenght` - размер массива всех фото
* `nextImage`, `nextSlide` и `prevImage`- функции перелистывания вперёд, назад (`nextSlide` идентичен `nextImage`, но используется внури `useEffect`)

Остальная информация в коментариях к коду 