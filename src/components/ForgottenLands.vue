<template>
  <div>
    <!-- Хедер -->
    <header class="gradient-bg py-4 sticky top-0">
      <nav class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-2xl font-bold">{{ translations[lang].name }}</h1>
        <div class="flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <img src="https://flagcdn.com/h24/ru.png" alt="Флаг России" class="flag-icon" @click="setLanguage('ru')">
          <img src="https://flagcdn.com/h24/us.png" alt="Флаг США" class="flag-icon" @click="setLanguage('en')">
        </div>
        <a href="../index.html" class="text-white-300 hover:underline">{{ translations[lang].back }}</a>
      </nav>
    </header>

    <!-- Основной контент -->
    <main class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-6 text-center">{{ translations[lang].title }}</h2>
      <div class="bg-gray-800 p-6 rounded-lg">
        <p class="mb-4">{{ translations[lang].description }}</p>
        <div class="space-y-2">
          <p><strong>{{ translations[lang].github }}:</strong> <a href="https://github.com/SharpShrk/Forgotten-Lands" class="text-blue-400 hover:underline"> {{ translations[lang].gitlink }}</a></p>
          <p><strong>{{ translations[lang].tools }}:</strong> <span> Unity, C#, SOLID, OOP</span></p>
          <p><strong>{{ translations[lang].details }}:</strong> <br/> <span>{{ translations[lang].detailsText }}</span></p>
        </div>
        <h3 class="text-xl font-semibold mt-6">{{ translations[lang].screenshots }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/images/forgotten-lands/1.png" alt="Скриншот 1" class="rounded-lg">
          <img src="/images/forgotten-lands/2.png" alt="Скриншот 2" class="rounded-lg">
          <img src="/images/forgotten-lands/3.png" alt="Скриншот 3" class="rounded-lg">
        </div>
      </div>
    </main>

    <!-- Футер -->
    <footer class="gradient-bg py-4">
      <div class="container mx-auto text-center">
        <p><span>{{ translations[lang].footer }}</span></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem('lang') || 'ru', // Загружаем язык из localStorage или по умолчанию русский
      translations: {
        en: {
          title: 'Novel',
          name: 'Oleg Gaidukov',
          back: 'Back to Home',
          description: 'A survival game in the vamplike genre.',
          github: 'GitHub',
          gitlink: ' Repo link',
          play: 'Play',
          tools: 'Tools Used',
          details: 'Description',
          detailsText: 'The player task is to hold out as long as possible on the field, where the spawn of enemies increases over time. To survive, the player will have to skillfully dodge all enemies, as well as upgrade autocast spells. Each spell has its own characteristics and they drop out randomly when the level increases. After defeat, the player can use the accumulated coins to upgrade the character characteristics, such as health, speed, armor and increased income, which will help to hold out even longer and set new records.',
          metrics: 'Metrics',
          metricsText: 'Achieved stable 60 FPS on mobile devices. Reduced scene loading time by 20% using Addressables. Daily active users (DAU) reached 10K+.',
          screenshots: 'Screenshots',
          footer: '© 2025 Oleg Gaidukov. All rights reserved.'
        },
        ru: {
          title: 'Novel',
          name: 'Олег Гайдуков',
          back: 'На главную',
          description: 'Выживалка в жанре vamplike.',
          github: 'GitHub',
          gitlink: ' Ссылка на репозиторий',
          play: 'Играть',
          tools: 'Используемые инструменты',
          details: 'Описание',
          detailsText: 'Задача игрока продержаться как можно дольше на поле, где спавн врагов увеличивается со временем. Для выживания игроку предстоит грамотно уворачиваться от всех врагов, а также прокачивать автокаст-спеллы. У каждого спелла свои особенности и они выпадают случайно при повышении уровня. После поражения игрок на накопленные монеты может прокачать характерисстики персонажа, такие как здоровье, скорость, броня и увеличение дохода, что поможет продержаться еще дольше и поставить новые рекорды.',
          metrics: 'Метрики',
          metricsText: 'Достигнута стабильная частота 60 FPS на мобильных устройствах. Время загрузки сцен сокращено на 20% с помощью Addressables. Ежедневные активные пользователи (DAU) превысили 10 тыс.',
          screenshots: 'Скриншоты',
          footer: '© 2025 Олег Гайдуков. Все права защищены.'
        }
      }
    };
  },
  methods: {
    setLanguage(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang); // Сохраняем выбранный язык
    }
  }
}
</script>