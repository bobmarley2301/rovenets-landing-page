# Handmade Bags & Backpacks

Односторінковий сайт для бренду handmade-сумок і рюкзаків, створений з використанням Next.js, TypeScript та Tailwind CSS.

## Технології

-   Next.js 13
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Swiper.js

## Вимоги

-   Node.js 16.x або вище
-   npm 7.x або вище

## Встановлення

1. Клонуйте репозиторій:

```bash
git clone https://github.com/your-username/handmade-bags.git
cd handmade-bags
```

2. Встановіть залежності:

```bash
npm install
```

3. Створіть файл `.env.local` в корені проекту та додайте необхідні змінні середовища:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Запустіть проект в режимі розробки:

```bash
npm run dev
```

5. Відкрийте [http://localhost:3000](http://localhost:3000) у вашому браузері.

## Збірка для продакшену

Для створення продакшен-збірки виконайте:

```bash
npm run build
```

Для запуску продакшен-версії:

```bash
npm start
```

## Структура проекту

```
handmade-bags/
├── public/
│   └── images/          # Зображення
├── src/
│   ├── components/      # React компоненти
│   ├── pages/          # Сторінки Next.js
│   └── styles/         # Глобальні стилі
├── .env.local          # Змінні середовища
├── next.config.js      # Конфігурація Next.js
├── package.json        # Залежності та скрипти
├── postcss.config.js   # Конфігурація PostCSS
├── tailwind.config.js  # Конфігурація Tailwind CSS
└── tsconfig.json       # Конфігурація TypeScript
```

## Ліцензія

MIT
