<template>
  <div>
    <!-- Хедер -->
    <header class="gradient-bg py-4 sticky">
      <nav class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-xl font-bold">{{ translations[lang].name }}</h1>
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
          <p><strong>{{ translations[lang].github }}:</strong> <span> {{ translations[lang].gitlink }}</span></p>
          <p><strong>{{ translations[lang].play }}:</strong> <a href="#" class="text-blue-400 hover:underline"> Yandex Games</a></p>
          <p><strong>{{ translations[lang].tools }}:</strong> <span> Unity, C#, OOP, SOLID, Figma, Photoshop</span></p>
          <p><strong>{{ translations[lang].details }}:</strong><br/> <span class="whitespace-pre-line">{{ translations[lang].detailsText }}</span></p>
          <p><strong>{{ translations[lang].metrics }}:</strong><br/> <span class="whitespace-pre-line">{{ translations[lang].metricsText }}</span></p>
        </div>
        <h3 class="text-xl font-semibold mt-6">{{ translations[lang].screenshots }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/images/brainrot-quiz/1.png" alt="Скриншот 1" class="rounded-lg">
          <img src="/images/brainrot-quiz/3.png" alt="Скриншот 3" class="rounded-lg">
          <img src="/images/brainrot-quiz/5.png" alt="Скриншот 4" class="rounded-lg">
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
          title: 'BrainrotQuiz',
          name: 'Oleg Gaidukov',
          back: 'Back to Home',
          description: 'A meme-based quiz game centered around Italian "brainrot" culture, designed for fun and engagement.',
          github: 'GitHub',
          gitlink: ' missing',
          play: 'Play',
          tools: 'Tools Used',
          details: 'Description',
          detailsText: 'The quiz offers players funny questions inspired by internet memes, with an emphasis on the Italian theme of "brainrot animals". A simple quiz designed to test trends. The game has 3 modes of 30 questions. Two classic modes where you need to guess the image and a third mode with audio questions.',
          metrics: 'Metrics',
          metricsText: 'Average DAU 1500+. Conversion to I2P gaming session exceeds 85%. Return is small, but for one-time games of this genre it is higher than expected Ret(D1) 10% and Ret(D7) 6%.',
          screenshots: 'Screenshots',
          footer: '© 2025 Oleg Gaidukov. All rights reserved.'
        },
        ru: {
          title: 'BrainrotQuiz',
          name: 'Oleg Gaidukov',
          back: 'На главную',
          description: 'Мемный квиз, посвященный итальянской культуре "brainrot", созданный для веселья и соревновательного азарта.',
          github: 'GitHub',
          gitlink: ' отсутствует',
          play: 'Играть',
          tools: 'Используемые инструменты',
          details: 'Описание',
          detailsText: 'Квиз предлагает игрокам забавные вопросы, вдохновленные интернет-мемами, с акцентом на итальянскую тему "brainrot-животные". Простой квиз, ссозданный для того чтобы прощупать тренды. В игре 3 режима по 30 вопросов. Два классических режима, где нужно угадать изображение и третий режим с аудио вопросами.',
          metrics: 'Метрики',
          metricsText: ' В среднем DAU 1500+. Конверсия в игровую сессию I2P превышеает 85%. Возвращаемость небольшая, но для одноразовых игр подобного жанра выше, чем ожидалась Ret(D1) 10% и Ret(D7) 6%.',
          screenshots: 'Скриншоты',
          footer: '© 2025 Олег Гайдуков. Все права защищены.'
        }
      }
    }
  },
  methods: {
    setLanguage(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }
}
</script>