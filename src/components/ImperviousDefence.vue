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
          <p><strong>{{ translations[lang].github }}:</strong> <a href="https://github.com/SharpShrk/ImperviousDefence" class="text-blue-400 hover:underline"> {{ translations[lang].gitlink }}</a></p>
          <p><strong>{{ translations[lang].play }}:</strong> <a href="https://yandex.ru/games/app/415803?draft=true&lang=ru" class="text-blue-400 hover:underline"> Yandex Games</a></p>
          <p><strong>{{ translations[lang].tools }}:</strong> <span> Unity, C#, SOLID, OOP, Zenject, MVP, IK</span></p>
          <p><strong>{{ translations[lang].details }}:</strong> <br/> <span>{{ translations[lang].detailsText }}</span></p>
        </div>
        <h3 class="text-xl font-semibold mt-6">{{ translations[lang].screenshots }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/images/impervious-defence/1.png" alt="Скриншот 1" class="rounded-lg">
          <img src="/images/impervious-defence/2.png" alt="Скриншот 2" class="rounded-lg">
          <img src="/images/impervious-defence/3.png" alt="Скриншот 3" class="rounded-lg">
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
      lang: localStorage.getItem('lang') || 'ru',
      translations: {
        en: {
          title: 'Impervious Defence',
          name: 'Oleg Gaidukov',
          back: 'Back to Home',
          description: 'An action-packed game where players defend a fortress against relentless enemy waves.',
          github: 'GitHub',
          gitlink: ' Repo link',
          play: 'Play',
          tools: 'Tools Used',
          details: 'Description',
          detailsText: 'Dynamic gameplay with combat mechanics and strategic fortress upgrades. The players task is to monitor the condition of the walls, repair them by producing new bricks. Build turrets and upgrade them. The generation of enemy waves using a pool of objects and increasing difficulty is implemented. The interface is adaptive and adjusts to any resolution. Two control schemes are implemented for mobile and desktop devices.',
          metrics: 'Metrics',
          metricsText: 'Achieved 35% retention rate on D7 via analytics (Firebase, AppMetrica). Reduced performance drops by optimizing shaders with HLSL.',
          screenshots: 'Screenshots',
          footer: '© 2025 Oleg Gaidukov. All rights reserved.'
        },
        ru: {
          title: 'Глухая Оборона',
          name: 'Олег Гайдуков',
          back: 'На главную',
          description: 'Экшн-игра, в которой игроки защищают крепость от непрерывных волн врагов.',
          github: 'GitHub',
          gitlink: ' Ссылка на репозиторий',
          play: 'Играть',
          tools: 'Используемые инструменты',
          details: 'Описание',
          detailsText: 'Динамичный игровой процесс с боевыми механиками и стратегическими улучшениями крепости. Задача игрока следить за состоянием стен, ремонтировать их путем производства новых кирпичей. Строить турели и улучшать их. Реализована генерация волн врагов с использованием пула объектов и нарастающая сложность. Интерфейс адаптивный и подстраивается под любые разрешения. Реализованы две схемы управления для мобильных и десктопных устройств.',
          metrics: 'Метрики',
          metricsText: 'Достигнут уровень удержания 35% на 7-й день через аналитику (Firebase, AppMetrica). Снижены просадки производительности за счет оптимизации шейдеров с HLSL.',
          screenshots: 'Скриншоты',
          footer: '© 2025 Олег Гайдуков. Все права защищены.'
        }
      }
    };
  },
  methods: {
    setLanguage(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }
}
</script>