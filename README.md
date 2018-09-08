# Шаблон для оптимизации сайта

- создает css-префиксы, упорядочивает медиа запросы, "причесывает" код в стиле яндекса
- конкатенирует файлы css в main.css и main.min.css
- конкатенирует файлы js в main.js и main.min.js
- создает файл с критическим css
- оптимизирует изображения 


После скачивания или клонирования в командой строке необходимо установить все пакеты, выполните <code>npm i</code> и дождитесь окончания установки.


Файлы, которые вы хотите объединить, поместите в папки <strong>css/parts</strong> и <strong>js/parts</strong>.
Затем зайдите в src/css/main.css и src/js/main.js и пропишите подключение файлов:
- css - <code>@import 'parts/style';</code><br> <em>Не указывайте в конце расширение файла, если указать - будет ошибка.</em>
- js  - <code>//import('parts/main.js')</code><br> <em>Проверяйте имена файлов, если ввести путь к файлу неправильно - будет ошибка.</em>

<br>
Изображения поместите в <strong>src/images/</strong>
<br>

На выходе вы получите:
- main.css, main.min.css, main.critical.min.css
- main.js, main.min.js
- оптимизированные изображения


Изначально в проекте уже подключены несколько файлов для того, чтобы сразу было понятно как подключать.
