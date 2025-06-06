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
          <p><strong>{{ translations[lang].github }}:</strong> <a href="https://github.com/SharpShrk/TowerDefense" class="text-blue-400 hover:underline"> {{ translations[lang].gitlink }}</a></p>
          <p><strong>{{ translations[lang].play }}:</strong> <a href="https://yandex.ru/games/app/404904?lang=ru" class="text-blue-400 hover:underline"> Yandex Games</a></p>
          <p><strong>{{ translations[lang].tools }}:</strong> <span> Unity, C#, SOLID, OOP, Zenject, MVP</span></p>
          <p><strong>{{ translations[lang].details }}:</strong> <br/> <span>{{ translations[lang].detailsText }}</span></p>
        </div>
        <h3 class="text-xl font-semibold mt-6">{{ translations[lang].screenshots }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/images/metallic-citadel/1.png" alt="Скриншот 1" class="rounded-lg">
          <img src="/images/metallic-citadel/2.png" alt="Скриншот 2" class="rounded-lg">
          <img src="/images/metallic-citadel/4.png" alt="Скриншот 3" class="rounded-lg">
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
          title: 'Metallic Citadel',
          name: 'Oleg Gaidukov',
          back: 'Back to Home',
          description: 'A team-based Tower Defence game where players strategically manage resources to defend a base from enemy waves.',
          github: 'GitHub',
          gitlink: ' Repo link',
          play: 'Play',
          tools: 'Tools Used',
          details: 'Description',
          detailsText: 'Players must balance resource distribution and defensive strategies to protect the base. Scalable difficulty challenges the player and only the right strategy will allow you to complete all levels. The player has access to an arsenal of turrets and resource buildings, as well as castable abilities. Also, during the mission, the player can upgrade defensive buildings and the base. The game is optimized for mobile and desktop devices.',
          metrics: 'Metrics',
          metricsText: 'Achieved stable 60 FPS on mobile devices. Reduced scene loading time by 20% using Addressables. Daily active users (DAU) reached 10K+.',
          screenshots: 'Screenshots',
          footer: '© 2025 Oleg Gaidukov. All rights reserved.'
        },
        ru: {
          title: 'Металлический шторм',
          name: 'Олег Гайдуков',
          back: 'На главную',
          description: 'Командная игра в жанре Tower Defence, где игроки стратегически управляют ресурсами для защиты базы от волн врагов.',
          github: 'GitHub',
          gitlink: ' Ссылка на репозиторий',
          play: 'Играть',
          tools: 'Используемые инструменты',
          details: 'Описание',
          detailsText: 'Игроки должны балансировать распределение ресурсов и оборонительные стратегии для защиты базы. Масштабируемая сложность бросает вызов игроку и только правильно принятая стратегия позволит пройти все уровни. Игроку доступен арсенал из турелей и ресурсных построек, а также кастуемые способности. Также по ходу миссии игроку доступна прокачка оборонительных построек и базы. Игра оптимизирована для мобильных и десктопных устройств. Игра переведена на русский, английский и турецкий язык.',
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