# RTK-query0infinity scroll app

## Запуск проекта
```
npm install - устанавливаем зависимости
npm run start - запуск frontend проекта в dev режиме
```
----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
----
## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----
## Конфигурация проекта

Для разработки проект содержит конфиг:
1. Webpack - ./config/build


Вся конфигурация хранится в /config
- /config/build - конфигурация webpack

----
### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)
